

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Constants

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

    //  access-control-allow-origin  :  CORS
const   accessCORS  =   'https://cors-anywhere.herokuapp.com/'






//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//

//                          Functions

//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//=//





/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/

//                      getRecipePuppy

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*//*

    https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
    http://www.recipepuppy.com/about/api/

*///    `    `    `    `    `    `    `    `    `    `    `    `


const getRecipePuppy = function(){
    
    
    let output = { 
        results:  undefined,
        error:    'no error'
    }
    
    
    return fetch(`${accessCORS}http://www.recipepuppy.com/api/`, 
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
  





/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/

//                      getTheMealDB

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*//*

    https://www.themealdb.com/api.php

*///    `    `    `    `    `    `    `    `    `    `    `    `


function getTheMealDB(){
    
    
    let output = { 
        results:  undefined,
        error:    'no error'
    }
    
    
    return fetch(`${accessCORS}https://www.themealdb.com/api/json/v1/1/random.php`, 
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
  





/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/

//                      addPantryItemToUser

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*//*

    http://34.220.204.52:8080/profiles

*///    `    `    `    `    `    `    `    `    `    `    `    `

//function >>

function addPantryItemToUser(newItem) {
    
    let output = { 
        results:  undefined,
        error:    'no error'
    }
    
    return fetch(`${accessCORS}http://34.220.204.52:8080/profiles`, 
    {
        body: JSON.stringify(newItem),
        headers: { 'Content-Type': 'application/json' },
        
        method: "POST"
    })
      
    .then((response)=>{
        if(response.ok)
        { return getItemsFromUserPantry() }
    })
    .catch((error) => output.error = error )
}








//=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@//
/*  +    +    +    +    +    +    +    +    +    +    +    +  */

export {
            getRecipePuppy,
            getTheMealDB,
            addPantryItemToUser
}

