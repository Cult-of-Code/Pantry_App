

//------------------------------------------
//          Nessessary Imports
//------------------------------------------
import React from 'react'


//------------------------------------------
//               Components
//------------------------------------------



//------------------------------------------
//             React Component
//------------------------------------------
export default function({ recipes }){
    console.log(recipes)
    return(
    <React.Fragment>
    {
    typeof recipes.theMealDB.meals === 'undefined' ? <b><i>Loading...</i></b> :
    <React.Fragment>
    {
        recipes.theMealDB.meals.map( (content, keyNum) => {return(
            <div key={keyNum}>
            <img src={`${content.strMealThumb}/preview`}/>
            <h4><i>{content.strMeal}</i></h4>
            <p>{content.strInstructions}</p>
            <h5><b><i>Ingredients</i></b></h5>
            <ol type="1">
                { parseIngredients(content) }
            </ol>
            </div>
        )})
    }
    </React.Fragment>
    }
    </React.Fragment>
    )
}


//------------------------------------------
//               Functions
//------------------------------------------

function parseIngredients(content){
    let output = []
    for(let strCount = 1; strCount<21; strCount++){
        content[`strIngredient${strCount}`] !== "" &&
        output.push(
            <li key={strCount}>
                {content[`strIngredient${strCount}`]}
                {" "}
                {content[`strMeasure${strCount}`]}
            </li>
        )
    }
    return output
}