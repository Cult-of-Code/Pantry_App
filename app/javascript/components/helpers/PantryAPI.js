

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Constants

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//


const   accessCORS  =   'https://cors-anywhere.herokuapp.com/'
const   localhost   =   'https://369d7c08c6744cd4b13e4ae8a3e758ef.vfs.cloud9.us-west-2.amazonaws.com/'//'https://pantry-application.herokuapp.com/'






//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Imports

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//


import * as Fetchers from '../logical/fetchers'






//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Functions

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//





/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/

//           Get Recipes from Available Ingredients

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*//*

    

*///    `    `    `    `    `    `    `    `    `    `    `    `


class PantryItems{      // TODO
    
    static getRecipesFromAvailableIngredientsByUser = function( user_id ){
    
        let output = { 
            results:  undefined,
            error:    'no error'
        }
        
        
        return fetch(`${localhost}pantry_items/${user_id}`, 
          { 
            headers: { 'Content-Type': 'application/json' },
            mode: 'no-cors'
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
    
    
    static test(){
        return 5
    }
    
}






/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/

//                Format Recipes from APIs

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*//*

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


function formatRecipes(){
    
  
    const theMealDB = Fetchers.getTheMealDB().then( (received) => {
        
      console.log("getTheMealDB")
      console.log(received)
      
      // received.results.meals //   << Array of Recipes
      
      return received.results.meals.map( recipe => {
          
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
    })
    
    
    const recipePuppy = Fetchers.getRecipePuppy().then( (received) => {
        
      console.log("getRecipePuppy")
      console.log(received)
      
      // received.results.results //   << Array of Recipes
      
      return received.results.results.map( recipe => {
          
        return(
        {
            title:          "",
            category:       "",
            origin:         "",
            
            ingredients:    [],
            instructions:   [],
            
            thumbnail:      "",
            source:         "",
            video:          ""
        })
      })
    })
    
    
    
    return Promise.all([ theMealDB, recipePuppy ]).then( (answers) => {
        
        let output = []
        answers.forEach(v=>output.push(...v))
        return output 
        
    })
}
  












//=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@//
/*  +    +    +    +    +    +    +    +    +    +    +    +  */

export default {
    
    test: PantryItems.test,
    
    
    getAllRecipes: formatRecipes,
    
    availableRecipes: PantryItems.getRecipesFromAvailableIngredientsByUser
    
    
}

