

//------------------------------------------
//          Nessessary Imports
//------------------------------------------
import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


//------------------------------------------
//              Components
//------------------------------------------
import { myTest, cool } from './logical/master'
import { getRecipePuppy, getTheMealDB } from './logical/fetchers'


//------------------------------------------
//                Pages
//------------------------------------------
import RecipieList from './pages/RecipieList'
import AddItemToPantry from './pages/AddItemToPantry'

import Home from './pages/Home'


//------------------------------------------
//                 App
//------------------------------------------
export default class App extends React.Component {
  constructor(){
    super()
    
    //this.accessCORS = 'https://cors-anywhere.herokuapp.com/'
    
    this.state = {
      recipePuppy: {},
      theMealDB: {}
    }
    
    
    
    
    //        "tests"
    // Logic from the Master file
    /*
    console.log(  myTest()  )
    console.log(  cool()  )
    */
    
    
    
  }
  
  
  componentDidMount(){

    getRecipePuppy().then( (received) => {
      this.setState({ recipePuppy: received.results }) 
    })
  
    getTheMealDB().then( (received) => {
      this.setState({ theMealDB: received.results }) 
    })

  }

  
  
  
  
  render () {
    
    
    //console.log(this.state.recipePuppy)
    //console.log(this.state.theMealDB)
    
    
    const {
      logged_in,
      current_user,
      sign_in_route,
      sign_out_route
    } = this.props

  /*
    console.log("current_user")
    console.log(current_user)
  */

    return (
      <React.Fragment>
      
        
      
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
      
      
      
      <Router>
        <Switch>
          
          <Route path="/temp_list" 
                  render={ (props) => <RecipieList {...props}
                  
                  recipes={ { 
                              recipePuppy: this.state.recipePuppy, 
                              theMealDB: this.state.theMealDB
                  } }
          />}/>
          
          <Route path="/temp_form" render={ (props) => <AddItemToPantry {...props} 
                  
          />}/>
          
          
          
          
          
          
          {/*   Recipe Posts    */}
          <Route path="/recipes" render={ (props) => <Home {...props} 
                  
          />}/>
          
          
          
          {/*   Container Create   */}
          <Route path="/container/create" render={ (props) => <Home {...props} 
                  
          />}/>
          
          {/*   Container Edit Specific   */}
          <Route path="/container/:storage_name/edit" render={ (props) => <Home {...props} 
                  
          />}/>
          
          {/*   Container Specific Dashboard    */}
          <Route path="/container/:storage_name" render={ (props) => <Home {...props} 
                  
          />}/>
          
          {/*   Containers Dashboard    */}
          <Route path="/containers" render={ (props) => <Home {...props} 
                  
          />}/>
          
          
          
          {/*   Home Page    */}
          <Route render={ (props) => 
              <Home {...props} 
                  
          />}/>
          
        </Switch>
      </Router>
      </React.Fragment>
    );
  }
}