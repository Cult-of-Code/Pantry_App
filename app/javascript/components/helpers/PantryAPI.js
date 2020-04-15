
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Constants

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//


//const   accessCORS  =   'https://cors-anywhere.herokuapp.com/'
const   localhost   =   'https://369d7c08c6744cd4b13e4ae8a3e758ef.vfs.cloud9.us-west-2.amazonaws.com/'//'https://pantry-application.herokuapp.com/'





//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Imports

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//


//import * as Fetchers from '../logical/fetchers'





/* = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ =*/
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/*= - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - =*//*


                      Class API  :  PantryAPI


*//*= - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - =*/
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//
/* = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ = ^ =*//*

    .   .   .   .   .   .   .   .   .   .   .   .   .   .

    Format:
            {
                title:          "",
                category:       "",
                origin:         "",
                
                ingredients:    [],
                instructions:   [],
                
                thumbnail:      "",
                source:         "",
                video:          ""
            }
            
    .   .   .   .   .   .   .   .   .   .   .   .   .   .
            
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

*///    `    `    `    `    `    `    `    `    `    `    `    `


export default class Pantry{
    
    
    static retrieve = function({ pack = "", id = -1 }){
        
        let output = { 
            results:  undefined,
            error:    'no error'
        }
        
        // ~  - ~  - ~  - ~  - ~  - ~  - ~  - ~  -
        
        let input = ""
        switch(pack){
            
            case 'full':
            case 0:
                input = `user_package/${id}`
                break;
            
            case 'items':
            case 1:
                input = `user_pantry_items/${id}`
                break;
                
            case 'posts':
            case 2:
                input = `user_user_recipes/${id}`
                break;
                
            default:
                output.error = "invalid search"
        }
        
        
        /*  +    +    +    +    +    +    +    +    +    +    +    +  */
        
        return Pantry._fetchDB({ input, output })
    }
    
    
    
    
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    
    static format = function( recipes_promise ){
        
        return recipes_promise.then( recipes => {
            if (Array.isArray(recipes) && recipes.length )
            {
                
                // TheMealDB
                if (recipes[0].idMeal)
                { return Pantry._theMealDB(recipes) }
                
                // Recipe Puppy
                else if (recipes[0].title)
                {  }
                
            }
            return []
        })
    }
    
    
    
    
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    
    static _theMealDB = function ( recipes ){
        
        return recipes.map( recipe => {
          
            //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
            let ingredients = []
            
            for(let strCount = 1; strCount<21; strCount++)
            {
                recipe[`strIngredient${strCount}`] !== "" &&
                ingredients.push( `${recipe['strIngredient'+strCount]} ${recipe['strMeasure'+strCount]}` )
            }
            //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
            
            return(
            {
                title:          recipe.strMeal,
                category:       recipe.strCategory,
                origin:         recipe.strArea,
                
                ingredients:    [...ingredients],
                instructions:   [recipe.strInstructions],
                
                thumbnail:      recipe.strMealThumb,
                source:         recipe.strSource,
                video:          recipe.strYoutube
            })
          })
        }
    
    
    
    
    //=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@//
    /*  +    +    +    +    +    +    +    +    +    +    +    +  */
    
    static _fetchDB = function({ input, output }){
        return fetch(`${localhost + input}`, 
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