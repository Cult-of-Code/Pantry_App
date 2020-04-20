

//::::::::::::::::::::::::::::::::::::::::::
//             React Imports
//::::::::::::::::::::::::::::::::::::::::::
import React, { Component } from 'react';



//::::::::::::::::::::::::::::::::::::::::::
//              Components
//::::::::::::::::::::::::::::::::::::::::::
import NavigationBar from '../components/NavBar'



//::::::::::::::::::::::::::::::::::::::::::

//              Page Slot
//__________________________________________
export default class PS extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
    return(<div style={{ display: 'flex', flexFlow: 'column', width:'100vw', height:'100vh' }}>
        <NavigationBar { ...this.props } />
        {this.props.children}
    </div>)
    }
}