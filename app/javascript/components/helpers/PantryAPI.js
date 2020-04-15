
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
}