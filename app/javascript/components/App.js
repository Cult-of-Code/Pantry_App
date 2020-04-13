

//------------------------------------------
//          Nessessary Imports
//------------------------------------------
import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import PageRouter from './PageRouter'


//------------------------------------------
//              Components
//------------------------------------------
import { myTest, cool } from './logical/master'
import { getRecipePuppy, getTheMealDB, addPantryItemToUser, getItemsFromUserPantry } from './logical/fetchers'


//------------------------------------------
//                Pages
//------------------------------------------
import RecipieList from './pages/RecipieList'
import AddItemToPantry from './pages/AddItemToPantry'

import Home from './pages/Home'
import UserFrame from './pages/UserFrame'
import Frame from './pages/Frame'
import ViewItemsInPantry from './pages/ViewItemsInPantry'

//------------------------------------------
//                 App
//------------------------------------------
export default class App extends React.Component {
  constructor(){
    super()
    
    //this.accessCORS = 'https://cors-anywhere.herokuapp.com/'
    
    this.state = {
      recipePuppy: {},
      theMealDB: {},
      usersPantryItems: []
    }
    
    
    
    
    //        "tests"
    // Logic from the Master file
    /*
    console.log(  myTest()  )
    console.log(  cool()  )
    */
    
    
    
  }
  
  
  componentDidMount(){

    getRecipePuppy()
    .then( (received) => {
      this.setState({ recipePuppy: received.results }) 
    })
  
    getTheMealDB()
    .then( (received) => {
      this.setState({ theMealDB: received.results }) 
    })
    
    // TEST USER
    getItemsFromUserPantry( 6 )
    .then( (received) => {
      this.setState({ usersPantryItems: received.results }) 
    })
    
  }


  render () {
    
    
    //console.log(this.state.recipePuppy)
    //console.log(this.state.theMealDB)
    console.log(this.state.usersPantryItems)
    
    
    const {
      logged_in,
      current_user,
      sign_in_route,
      sign_out_route
    } = this.props

  
    // console.log("current_user")
    // console.log(current_user)
  

    return (
      <React.Fragment>
      
        
      
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
            <UserFrame/>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
            <Frame/>
          </div>
        }
      
        
      
      <Router>
        <Switch>
          
          {/*   Temporary Testing Pages   */}
          {/*-----------------------------*/}
          <Route path="/temp_list" 
                  render={ (props) => <RecipieList {...props}
                  
                  recipes={ { 
                              recipePuppy: this.state.recipePuppy, 
                              theMealDB: this.state.theMealDB
                  } }
          />}/>
          
          <Route path="/temp_form" render={ (props) => <AddItemToPantry {...props} 
                  submitForm= {this.handleSubmit} current_user={ current_user }
          />}/>
          {/*-----------------------------*/}
          
          
          
          
          {/*   User Dashboard    */}
          <Route path="/user" exact render={ (props) => <PageRouter {...props} dude={4}/>}/>
          
          {/*   User Pages    */}
          <Route path="/user/:page" render={ (props) => <PageRouter {...props} 
                    handleSubmit={ addPantryItemToUser } current_user={ current_user }
          />}/>

          
          
          
          
          
          
          {/*   Recipes Available (List)    */}
          <Route path="/recipes" render={ (props) => <Home {...props} 
                  
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
