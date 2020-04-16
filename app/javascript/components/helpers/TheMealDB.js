

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Constants

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

    //  access-control-allow-origin  :  CORS
const   accessCORS  =   'https://cors-anywhere.herokuapp.com/'
const   localhost   =   'https://369d7c08c6744cd4b13e4ae8a3e758ef.vfs.cloud9.us-west-2.amazonaws.com/' //'https://pantry-application.herokuapp.com/'






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
    
    static searchByIngredients = function( ingredients ){
        
        ingredients = TheMealDB._splitIngredients( ingredients )
        let queries = ingredients.map( si => TheMealDB._fetchDB( 
            TheMealDB.search({ searchBy:"ingredient", searchTerm:si }) 
        ))
        
        /*  +    +    +    +    +    +    +    +    +    +    +    +  */
        return Promise.all( queries ).then( answers => { 
            return [].concat(...answers.map(v=>v.results.meals)) // get an array of all answers
        
        // Get full meal details
        }).then( list => {
            
            return Promise.all(  list.map( sm => TheMealDB.getMealByID( sm.idMeal ) ) )
            .then( answers => { return [...answers] })  // get an array of all answers
            
        // Narrow down list
        }).then( detailedList => {
            return TheMealDB._narrowSearchedList( ingredients, detailedList )
        })
    }
    
    
    
    
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    
    static getMealByID = function( id ){
        return TheMealDB._fetchDB( 
            TheMealDB.search({ searchBy:"id", searchTerm:id }) 
        ).then( ({ results }) => results.meals[0])
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
        return fetch(`${accessCORS}https://www.themealdb.com/api/json/v1/1/${input}`, 
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
    

}