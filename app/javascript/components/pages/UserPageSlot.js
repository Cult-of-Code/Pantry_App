

//------------------------------------------
//          Nessessary Imports
//------------------------------------------
import React, { Component } from 'react';


//------------------------------------------
//              Components
//------------------------------------------


//------------------------------------------
//                Pages
//------------------------------------------


//------------------------------------------
//                 Class
//------------------------------------------
export default class Slot extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div className="PageSlot">
                {this.props.components}
            </div>
        )
    }

}
