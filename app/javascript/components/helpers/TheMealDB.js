

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Constants

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

    //  access-control-allow-origin  :  CORS
const   accessCORS  =   'https://cors-anywhere.herokuapp.com/'
const   localhost   =   'https://48f5f1653b9d4eb4bfd5e77896cc3cc6.vfs.cloud9.us-east-2.amazonaws.com/' //'https://pantry-application.herokuapp.com/'






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


export default function searchTheMealDB({ searchBy = "", searchTerm = "" }){
    
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
    
    
    // - * - - - * - - - * - - - * - - - * - - - * - - - * - - - * - -
    
    
    
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















//=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@//
/*  +    +    +    +    +    +    +    +    +    +    +    +  */

// exports

