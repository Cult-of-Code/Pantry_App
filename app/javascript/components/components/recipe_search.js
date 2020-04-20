import React from 'react'

/*
    <div className="result">
        Hello!  I am a result!
    </div> {recipe.name}
*/

export default function({ searchResults }){
    console.log(searchResults)
return searchResults ? ( <div className="recipeSearch">
{
    searchResults.map( (recipe,k) =>
        <div className="result" key={k}>
            
            
            {/*    Picture & Match Column    */}
            <div style={{ display:'flex', flexFlow:'column' }}>
                <div className='image'>
                  <img src={`${recipe.thumbnail}`} alt="food"/>
                </div>
                {(recipe.match*100).toFixed(2)}{"% match"}
            </div>
            
            
            
            {/*    Name Column    */}
            <div style={{ display:'flex', flexFlow:'column' }}>
                <div className='name'>
                    {recipe.name}
                </div>
            </div>
            
            
            
            {/*    Details Column    */}
            <div style={{ display:'flex', flexFlow:'column' }}>
                <div>{recipe.origin}</div>
                <div>{recipe.category}</div>
            </div>
            
            
        </div>
    )
}
</div>) : <div className="loading"/>
}