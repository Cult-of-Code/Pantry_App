

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Constants

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

import data from './_data/themealdb_data'

    //  access-control-allow-origin  :  CORS
const   accessCORS  =   'https://cors-anywhere.herokuapp.com/'
const   localhost   =   'https://48f5f1653b9d4eb4bfd5e77896cc3cc6.vfs.cloud9.us-east-2.amazonaws.com/' //'https://pantry-application.herokuapp.com/'

const   themealdb_key = 9973533 //process.env.REACT_APP__THE_MEAL_DB__KEY
//console.log(themealdb_key)







//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Functions

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//





/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/

//                      getTheMealDB

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*//*

    https://www.themealdb.com/api.php
    
    Options:
    
                Lookup full meal details by id
                    lookup.php?i=52772
                
                - -- -- -- -- -- -- -- -- -- -
                
                Filter by main ingredient
                    filter.php?i=chicken_breast
                
                Search meal by name
                    search.php?s=Arrabiata
                    
                List all meals by first letter
                    search.php?f=a
                    
                - -- -- -- -- -- -- -- -- -- -  
                
                Filter by Category
                    filter.php?c=Seafood
                
                Filter by Area
                    filter.php?a=Canadian
                    
                - -- -- -- -- -- -- -- -- -- -  
                    
                List all meal categories
                    categories.php
                
                List all Categories, Ingredients, Area 
                    list.php?c=list
                    list.php?i=list
                    list.php?a=list
                    
                - -- -- -- -- -- -- -- -- -- - 
                    
                Lookup a single random meal
                    random.php

*///    `    `    `    `    `    `    `    `    `    `    `    `

export default class TheMealDB {
    
    
    static test = function(){
        console.log(data)
    }
    
    
    static search = function({ searchBy = "", searchTerm = "" }){
        
        let output = { 
            results:  undefined,
            error:    'no error'
        }
        
        // ~  - ~  - ~  - ~  - ~  - ~  - ~  - ~  -
        
        let input = "random.php"
        switch(searchBy){
            
            case 'id':
            case 0:
                input = `lookup.php?i=${searchTerm}`
                break;
                
            case 'ingredient':
            case 1:
                input = `filter.php?i=${searchTerm}`
                break;
                
            case 'name':
            case 2:
                input = `search.php?s=${searchTerm}`
                break;
                
            case 'first letter':
            case 3:
                input = `search.php?f=${searchTerm}`
                break;
                
            case 'category':
            case 4:
                input = `filter.php?c=${searchTerm}`
                break;
                
            case 'area':
            case 5:
                input = `filter.php?a=${searchTerm}`
                break;
                
            case 'list':
            case 5:
                switch(searchTerm){
                    
                    case 'categories':
                    case 0:
                        input = "list.php?c=list"
                        break;
                        
                    case 'ingredients':
                    case 1:
                        input = "list.php?i=list"
                        break;
                        
                    case 'area':
                    case 2:
                        input = "list.php?a=list"
                        break;
                        
                    default:
                        input = "categories.php"  // categories + details
                }
                break;
                
            default:
                output.error = "invalid search"
        }
        
        
        /*  +    +    +    +    +    +    +    +    +    +    +    +  */
        
        return ({ input, output })
    }
    
    
    
    
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    
    static searchByIngredients = function( ingredients, skipCheckIngr = false ){
        
        if (!skipCheckIngr){ ingredients = TheMealDB._splitIngredients( ingredients ) }
        return Promise.resolve([].concat(...data.map(v=>v.meals)))
        let queries = ingredients.map( si => TheMealDB._fetchDB( 
            TheMealDB.search({ searchBy:"ingredient", searchTerm:si }) 
        ))
        
        
        /*  +    +    +    +    +    +    +    +    +    +    +    +  */
        return Promise.all( queries ).then( answers => {   // get an array of all answers
            return [].concat(...answers.map(v=> v.results ? v.results.meals : {idMeal: -1})) 
            .filter(Boolean) // remove all 'falsy' values  :  null
        
        // Get full meal details
        }).then( list => {
            
            
            console.log(list)
            
            
            return Promise.all(  list.map( sm => TheMealDB.getMealByID( sm.idMeal ) ) 
            ).then( meals => meals.filter(Boolean)) // remove all 'falsy' values  :  null )
            
            //.then( answers => { return [...answers] })  // get an array of all answers
            
        })
        // MOVED
        /*
        // Narrow down list
        }).then( detailedList => {
            //return TheMealDB._narrowSearchedList( ingredients, detailedList )
            return detailedList
        })
        */
    }
    
    
    
    
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    
    static getMealByID = function( id ){
        return TheMealDB._fetchDB( 
            TheMealDB.search({ searchBy:"id", searchTerm:id }) 
        ).then( ({ results }) => results ? results.meals[0] : null)
    }
    
    
    
    
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    
    static _splitIngredients = function( list_i = [] ){
        
        if (Array.isArray(list_i)){ return list_i.map( ingr => ingr.trim()) }
        else if (typeof list_i === 'string')
        { return list_i.split(',').map( ingr => ingr.trim()) }
        else { return [""] }
    }
    
    
    
    
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    
    // TO BE REMOVED  -  Moved to 'PantryAPI' helper
    static _narrowSearchedList = function( ingredients, list ){
        
        return list.filter( m => {
            
            let compiledIngredients = ""
            for(let c = 1; c<21; c++){
            
                let ing = m[`strIngredient${c}`]
                
                if ( !!ing ) {  
                    compiledIngredients+=" "+ing  
                    
                    if (ingredients.every( ingr => 
                        compiledIngredients.toLowerCase().includes(
                            ingr.toLowerCase().trim()) ))
                        { return true }
                }
                else break
            }
            
            return false
        })
    }
    
    
    
    
    //=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@//
    /*  +    +    +    +    +    +    +    +    +    +    +    +  */
    
    static _fetchDB = function({ input, output }){
        return fetch(`${accessCORS}https://www.themealdb.com/api/json/v2/${themealdb_key}/${input}`,
        { 
            headers: { 'Content-Type': 'application/json' }
        })
        .then((response)=>{
            if(response.status === 200)
            { return(response.json()) }
        })
        .then((resultsJSON)=>{
            output.results = resultsJSON
            return output
        })
        .catch((error) => output.error = error )
    }
    
    /*
     now with the API Key:
                            - change 'v1' to 'v2'
                            - add in the key
    */
}