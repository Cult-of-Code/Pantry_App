

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
import { getRecipePuppy, getTheMealDB } from './logical/fetchers'


//------------------------------------------
//                Pages
//------------------------------------------
import RecipieList from './pages/RecipieList'
import AddItemToPantry from './pages/AddItemToPantry'

import Home from './pages/Home'
import Frame from './pages/Frame'

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

    getRecipePuppy().then( (received) => {
      this.setState({ recipePuppy: received.results }) 
    })
  
    getTheMealDB().then( (received) => {
      this.setState({ theMealDB: received.results }) 
    })
    
    this.getItemsFromUserPantry()
  }

    getItemsFromUserPantry = () => {
      const   accessCORS  =   'https://cors-anywhere.herokuapp.com/'
      fetch(`${accessCORS}https://www.themealdb.com/api/json/v1/1/random.php`, 
      { 
        headers: { 'Content-Type': 'application/json' }
      })
    .then((response)=>{
        if(response.status === 200)
        { return(response.json()) }
    })
    .then((resultsJSON)=>{
        
        this.setState({usersPantryItems: resultsJSON})
    })
    
    }




  addPantryItemToUser = (newPantryItem) => {
        return fetch("http://34.220.204.52:8080/profiles", {
            // converting an object to a string
            body: JSON.stringify(newPantryItem),
            // specify the info being sent in JSON and the info returning should be JSON
            headers: {
                "Content-Type": "application/json"
            },
            // HTTP verb so the correct endpoint is invoked on the server
            method: "POST"
        })
        .then((response) => {
            // if the response is good call the getCats method
            if(response.ok){
                return this.get()
            }
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
      
        <Frame/>
      
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
                  submitForm= {this.handleSubmit}
          />}/>
          {/*-----------------------------*/}
          
          
          
          
          {/*   User Dashboard    */}
          <Route path="/user" exact render={ (props) => <PageRouter {...props} dude={4}/>}/>
          
          {/*   User Pages    */}
          <Route path="/user/:page" render={ (props) => <PageRouter {...props}/>}/>
          
          
          
          
          
          
          
          {/*   Recipes Available (List)    */}
          <Route path="/recipes" render={ (props) => <Home {...props} 
                  
          />}/>
          
          
          
          
          
          {/*   Containers Dashboard    */}
          <Route path="/containers" render={ (props) => <Home {...props} 
                  
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