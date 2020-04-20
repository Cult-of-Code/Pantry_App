import React from 'react'

/*
    <div className="result">
        Hello!  I am a result!
    </div>
*/

export default function({ searchResults }){
return searchResults ? ( <div className="recipeSearch">
{
    searchResults.map( (recipe,k) =>
        <div className="result" key={k}>
            {recipe.name}
        </div>
    )
}
</div>) : <div className="loading"/>
}