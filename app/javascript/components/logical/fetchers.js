

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

//                      getItemsFromUserPantry

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*//*

    https://369d7c08c6744cd4b13e4ae8a3e758ef.vfs.cloud9.us-west-2.amazonaws.com/pantry_items

*///    `    `    `    `    `    `    `    `    `    `    `    `


function getItemsFromUserPantry() {
    
    let output = { 
        results:  undefined,
        error:    'no error'
    }

  return fetch(`${accessCORS}https://369d7c08c6744cd4b13e4ae8a3e758ef.vfs.cloud9.us-west-2.amazonaws.com/pantry_items`, 
  { 
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors'
  })
.then((response)=>{
    if(response.status === 200)
    { return(response.json()) }
})
.then((resultsJSON)=>{
    
    this.setState({usersPantryItems: resultsJSON})
})

}
  





/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/

//                      addPantryItemToUser

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*//*

    http://34.220.204.52:8080/profiles

*///    `    `    `    `    `    `    `    `    `    `    `    `


function addPantryItemToUser(newItem) {
    
    let output = { 
        results:  undefined,
        error:    'no error'
    }
    
    return fetch(`${accessCORS}https://48f5f1653b9d4eb4bfd5e77896cc3cc6.vfs.cloud9.us-east-2.amazonaws.com/users`, 
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
            getItemsFromUserPantry,
            addPantryItemToUser
}

