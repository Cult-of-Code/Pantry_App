

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
        error:    null
        
    }
    
    
    fetch(`${accessCORS}http://www.recipepuppy.com/api/`, 
      { 
        headers: { 'Content-Type': 'application/json' }
      })
    .then((response)=>{
      //console.table(response)
        if(response.status === 200)
        { return(response.json()) }
    })
    .then((resultsJSON)=>{
      //console.log(resultsArray)
        //this.setState({ recipePuppy: resultsJSON }) 
        output.results = resultsJSON
    })
    .catch((error) => output.error = error )//this.setState({error}))
  }
  





/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*/

//                      Another One

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = -*//*

    comments

*///    `    `    `    `    `    `    `    `    `    `    `    `

//function >>









//=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@=@//
/*  +    +    +    +    +    +    +    +    +    +    +    +  */

export { 
            getRecipePuppy as PuppyRecipes
}


