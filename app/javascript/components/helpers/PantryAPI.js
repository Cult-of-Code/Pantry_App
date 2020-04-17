
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Constants

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//


//const   accessCORS  =   'https://cors-anywhere.herokuapp.com/'
const   localhost   =   'https://7742f0fa2a534226b6a53e03ed2dc239.vfs.cloud9.us-east-2.amazonaws.com/'//'https://pantry-application.herokuapp.com/'





//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Imports

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//


import TheMealDB from '../helpers/TheMealDB'





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
                name:           "",
                description:    "",
                est_time:        0,
                
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
    
    static getAvailableRecipes = function( ingredients ){
        
        ingredients = Pantry.splitIngredients( ingredients )
        
        return Pantry.format( TheMealDB.searchByIngredients( ingredients, true ) )
        .then( receivedList =>{
            return Pantry._narrowDownSearch( ingredients, receivedList )
        })
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
                let ingr = recipe['strIngredient'+strCount]
                if ( !!ingr ) 
                {
                    ingredients.push({ name: ingr, units: recipe['strMeasure'+strCount] })
                }
                /*
                { ingredients.push( 
                    `${recipe['strMeasure'+strCount]} of ${ingr}` 
                    
                    // TODO test if the 'Measure' is a word like: 'whole' or 'boiled',
                    //  so, we don't add 'of' between the measurement and ingredient
                )}
                */
                else break;
            }
            //  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
            
            return(
            {
                name:           recipe.strMeal,
                description:    recipe.strInstructions,
                est_time:        -1,
                
                category:       recipe.strCategory,
                origin:         recipe.strArea,
                
                ingredients:    [...ingredients],
                instructions:   [],  //recipe.strInstructions -ARRAY- .slice(1)
                
                                // TODO slice up instructions if they resemble an ordered list (guesswork)
                
                thumbnail:      recipe.strMealThumb,
                source:         recipe.strSource,
                video:          recipe.strYoutube
            })
        })
    }
    
    
    
    
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    
    static splitIngredients = function( list_i ){
        
        if (Array.isArray(list_i) && list_i)
        { 
            if (typeof list_i[0] === 'string')
            { return list_i.map( ingr => ingr.toLowerCase().trim())  }
            
            else if (typeof list_i[0] === 'object')
            { return list_i.map( item => item.name.toLowerCase().trim() ) }
        }
        
        else if (typeof list_i === 'string')
        { return list_i.split(',').map( ingr => ingr.toLowerCase().trim()) }
        
        
        else { return [""] }
    }
    
    
    
    
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    /* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/
    
    static _narrowDownSearch = function( ingredients, searchList ){
        
        return searchList.filter( recipe => {
            // I want to see results were every recipe only includes ingredients from the list
            /*
                count the number of matches
                if a recipe has more ingredients than the number of matches, throw out the recipe
                
                loop through the recipe's ingredients
                every time I have some match, I add 1
            */
            
            //          all ingredients cannot be more than what matches
            return !(recipe.ingredients.length > recipe.ingredients.filter( ingr => {
                return recipe.ingredients.some( ingr => 
                    //ingr.toLowerCase().trim().includes(  )
                    ingredients.indexOf(ingr.name.toLowerCase().trim()) < 0 ? false : true
                    
                    // TODO
                    /*      Test if most of the characters in your words match well enough ( 75%? ),
                            ( instead of strict comparison, as above )
                    */
                )
            }).length)
            
        })
    }
    
    
    
    
    //=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@//
    /*  +    +    +    +    +    +    +    +    +    +    +    +  */
    
    static _fetchDB = function({ input, output }){
        return fetch( localhost + input , 
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