

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

    console.log(this.props)

    return (
      <React.Fragment>
      
        <h1>Hello Home Page</h1>
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
      
      
      </React.Fragment>
    );
  }
}