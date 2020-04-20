

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

//                getItemsFromUserPantry

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*//*

    https://369d7c08c6744cd4b13e4ae8a3e758ef.vfs.cloud9.us-west-2.amazonaws.com/pantry_items

*///    `    `    `    `    `    `    `    `    `    `    `    `


function getItemsFromUserPantry( user_id ) {
    
    
    let output = { 
        results:  undefined,
        error:    'no error'
    }
    
    
    return fetch("/pantry_items", 
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
    
    fetch("/pantry_items", 
    { 
        body: JSON.stringify({ pantryItem: newItem }),
        headers: { 'Content-Type': 'application/json'},
       
        
        method: "POST"
        
    })
    .then((response)=>{
        console.log(response)
        if(response.ok)
        { return response }
    })
    .catch((error) => output.error = error )
    
}



/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/

//                  deletePantryItemFromUser

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*//*



*///


// handleDelete = (itemId) => {
//     fetch(`${localhost}pantry_items/${user_id}`, { method: 'delete' }).
//       then((response) => {
//         alert('Item deleted successfully')
//         this.getItemsFromUserPantry();
//       });
//   }




function deletePantryItemFromUser( user_id ) {
    
    let output = { 
        results:  undefined,
        error:    'no error'
    }
    
    return fetch(`${localhost}pantry_items/${user_id}`, 
    { 
        
        
        method: "delete"
        
    })
    .then((response)=>{
        console.log(response)
        if(response.ok)
        { return response } //getItemsFromUserPantry(1)
    })
    .catch((error) => output.error = error )
    
}







/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/

//                  updatePantryItemToUser

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*//*



*///



function updatePantryItemToUser( updatedInfo, user_id ) {
    
    let output = { 
        results:  undefined,
        error:    'no error'
    }
    
    console.log(updatedInfo)
    
    return fetch(`${localhost}pantry_items/${user_id}`, 
    { 
        body: JSON.stringify(updatedInfo),
        headers: { 'Content-Type': 'application/json'},
        
        
        method: "put"
        
    })
    .then((response)=>{
        console.log(response)
        if(response.ok)
        { return response }  //getItemsFromUserPantry
    })
    .catch((error) => output.error = error )
    
}


/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/

//                  createRecipePostToUser

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*//*



*///

function createRecipePostToUser( newItem ) {
    console.log(newItem)
    let output = { 
        results:  undefined,
        error:    'no error'
    }
    
    fetch("/user_recipes", 
    {   
        body: JSON.stringify( {userRecipe: newItem} ),
        headers: { 'Content-Type': 'application/json'},
        
        
        method: "POST"
        
    })
    .then((response)=>{
        console.log(response)
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
            addPantryItemToUser,
            deletePantryItemFromUser,
            updatePantryItemToUser,
            createRecipePostToUser
}

