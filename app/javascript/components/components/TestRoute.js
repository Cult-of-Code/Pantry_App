

//------------------------------------------
//          Nessessary Imports
//------------------------------------------
import React from 'react'
import PantryAPI from '../helpers/PantryAPI'
//const { test, getAllRecipes } = PantryAPI


//::::::::::::::::::::::::::::::::::::::::::

//         Route To Page Tester
//__________________________________________
export default function(props){
    
    const { match } = props
    const { params } = match
    
    let outputShow = []
    let keyNum = 0
    for (let [key, value] of Object.entries(params)) {
        outputShow.push(
        <div key={keyNum}>
            <span style={{ color:"rgb(100, 126, 202)", fontSize: "150%" }}>{key}:</span>
            <span style={{ letterSpacing: '2em' }}> </span>
            <span style={{ color:"rgb(167, 53, 59)", fontSize: "175%" }}><em><b>{value}</b></em></span>
        </div>)
        keyNum++
    }
    
    /* - - - - - - - - - */
    //console.log('')
    //console.log(test)
    //getAllRecipes().then(a=>console.log(a))
    //console.log('')
    /* - - - - - - - - - */
    
    return(
        <div style={{ display:'flex', flexDirection: 'column', alignItems: 'center', margin: '3em', paddingTop: '2em'}}>
            <br/><br/><br/>
            <h2><i style={{ color:"rgb(200, 200, 202)"}}>{match.path}</i></h2>
            <br/>
            {outputShow.map( v => v)}
        </div>
    )
}