

//------------------------------------------
//          Nessessary Imports
//------------------------------------------
import React from 'react'


//------------------------------------------
//               Components
//------------------------------------------
import TheMealDB_List from '../components/TheMealDB'


//------------------------------------------
//             React Component
//------------------------------------------
export default function({ recipes }){
    return(
    <React.Fragment>
        <h2>List of Recipies</h2>
        <br/>
        
        <h3>The Mead DB</h3>
        <TheMealDB_List recipes={recipes}/>
        
    </React.Fragment>
    )
}