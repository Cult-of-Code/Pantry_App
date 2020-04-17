import React from 'react'

export default function(props){
    
    console.log(props)
    
    return(<React.Fragment>
    
        <h3><em>low on</em></h3>
        
        {Object.entries(props).map( el => {
            <div>
            key: {el[0]}
            value: {el[1]}
            </div>
        })}
        
    </React.Fragment>)
}