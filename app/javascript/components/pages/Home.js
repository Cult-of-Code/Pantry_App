

//------------------------------------------
//          Nessessary Imports
//------------------------------------------
import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


//------------------------------------------
//              Components
//------------------------------------------
//import { myTest, cool } from './logical/master'


//------------------------------------------
//                Pages
//------------------------------------------
//import RecipieList from './pages/RecipieList'


//------------------------------------------
//                 App
//------------------------------------------
export default class Home extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {}
    
  }

  
  
  
  
  render () {

    const {
      logged_in,
      current_user,
      sign_in_route,
      sign_out_route
    } = this.props

    //console.log(this.props)

    return (
      <div className="home">
      
        <h1>Welcome to THE Pantry App</h1>
        <br/>
        
        <h2>We are excited to announce our new, state of the art web application, that will make it easier to track your store bought food items. Our application allows you to create a grocery list, log your food items, lets you know which food items are about to expire, get recommended recipes based on the food you currently have in storage, and more. Sign up now, it's free!
        </h2>
      
        
      </div>
    );
  }
}