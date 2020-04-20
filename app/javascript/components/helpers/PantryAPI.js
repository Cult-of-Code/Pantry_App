
//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Constants

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//


//const   accessCORS  =   'https://cors-anywhere.herokuapp.com/'
const   localhost   =   'https://369d7c08c6744cd4b13e4ae8a3e758ef.vfs.cloud9.us-west-2.amazonaws.com/'//'https://pantry-application.herokuapp.com/'





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
                video:          "",
                
                match:          0.0%
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
            
            // recipe match %
            recipe["match"] = 0.0
            
            // number of ingredients in a recipe that match our search terms
            let matchingIngredients = recipe.ingredients.reduce( (runningTotal, recipeIngr) => {
                
                // ingredient match %
                recipeIngr["match"] = 0.0
                let sterilizedIngr = recipeIngr.name.toLowerCase().trim() 
                
                
                
                // see if parts of your search words match ingredient names in a recipe
                return runningTotal += ingredients.some( searchIngr => {
                    
                    
                    let lettersMatched = 0
                    
                    // set the bigger of the two strings 
                    // to the variable 'A' as an array 
                    let [A,B] = [ sterilizedIngr, searchIngr ]
                    if ( B.length > A.length ){ [A,B]=[B,A] } //swap
                    [A,B] = [ A.split(''), B.split('') ]
                    
                    
                    // get the number of letters that match
                    // between our search term and an ingredient's name
                    lettersMatched += A.reduce( (total,letter) => {
                        
                        let indX = B.indexOf(letter)
                        
                        if (!(indX < 0)){
                            total += 1
                            B.splice(indX, 1)
                        }
                        
                        return total
                    },0)
                    
                    
                    
                    // set the bigger of the two strings to the variable 'A'
                    let longestLength = searchIngr.length > sterilizedIngr.length ?
                    searchIngr.length : sterilizedIngr.length
                    
                    // get % match 
                    // for the all the letters in the search term and the ingredient name inside a recipe
                    lettersMatched < longestLength ?
                    recipeIngr.match = lettersMatched / longestLength
                    :
                    recipeIngr.match = longestLength / lettersMatched
                    
                    
                    
                    
                    // return true if one word in the ingredient search term
                    // matches part of the ingredient name in a recipe
                    let partEqual = searchIngr.split(' ').some( 
                        word => { return sterilizedIngr.includes(word) })
                        // TODO : allow for spelling mistakes ^
                        
                    
                    // partEqual ? 
                    // console.log( "\n |~~~ "+ recipeIngr.match +" ~~~|"+
                    //     "\n < " + lettersMatched + " > "+ "< " + longestLength + " > ") : false
                    
                    // partEqual ? 
                    // console.log(" < " + searchIngr + " >< " + sterilizedIngr + " > \n") : false
                    
                    
                    return partEqual
                    
                }) ? 1 : 0
            }, 0)
            
            
            // average of matching ingredients for this recipe
            recipe.match = recipe.ingredients.reduce(
                (total, ingr) => total + ingr.match, 0) / recipe.ingredients.length
            
            // console.log( " === "+ingredients.length+" ==="+
            //     "\n < " + recipe.ingredients.length + " >< " + matchingIngredients + " > "  )
                
            
            
            // if all ingredients in recipe use only items inside the user's pantry
            return matchingIngredients === recipe.ingredients.length
        
        
        // put the best matches toward the top of the list
        }).sort((a, b) => b.match - a.match);
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