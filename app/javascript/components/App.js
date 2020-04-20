

//------------------------------------------
//          Nessessary Imports
//------------------------------------------
import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Pantry from './helpers/PantryAPI'

import UserPageRouter from './UserPageRouter'


//------------------------------------------
//            TEST COMPONENTS
//------------------------------------------
import ShakersTest from './components/ShakersTest'
import AustinsTest from './components/AustinsTest'
import JuliasTest from './components/JuliasTest'
import ConnorsTest from './components/ConnorsTest'


//------------------------------------------
//              Components
//------------------------------------------
import { myTest, cool } from './logical/master'
import { getRecipePuppy, getTheMealDB, addPantryItemToUser, getItemsFromUserPantry } from './logical/fetchers'

import PageSlot from './components/PageSlot'



//------------------------------------------
//                Pages
//------------------------------------------
import RecipieList from './pages/RecipieList'

import Home from './pages/Home'
//import UserFrame from './pages/UserFrame'
//import Frame from './pages/Frame'
import ViewItemsInPantry from './pages/ViewItemsInPantry'
import ViewOneItem from './pages/ViewOneItem'

import ViewRecipes from './pages/ViewRecipes'


//------------------------------------------
//                 App
//------------------------------------------
export default class App extends React.Component {
  constructor(){
    super()
    
    this.state = {
      recipePuppy: {},
      theMealDB: {},
      usersPantryItems: [],
      pantry_items: [],
      routeToViewAllPantry: null,
      routeToViewOnePantry: null
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
    
    /*
    // TEST USER
    getItemsFromUserPantry( 6 )
    .then( (received) => {
      this.setState({ usersPantryItems: received.results }) 
    })
    */

  }


  render () {
    
    
    //console.log(this.state.recipePuppy)
    //console.log(this.state.theMealDB)
    // console.log(this.state.usersPantryItems)

    const {
      logged_in,
      current_user,
      sign_in_route,
      sign_out_route
    } = this.props
    
    //const user_info = { ...this.props }
    //console.log(user_info)
    
    var user_id = 0

    if (current_user !== null){
      user_id = current_user.id
    } else {
      user_id = 0
    } 
    
  
    // console.log("current_user")
    // console.log(current_user)
  
  
    /*
    
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
            <UserFrame current_user= {user_id}/>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
            <Frame/>
          </div>
        }
    
    */
  
  

    return (
      <React.Fragment>
      
      <PageSlot { ...this.props } >
      
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

          <Route path="/user" exact render={ (props) => <UserPageRouter {...props}
                    dude={4} logged_in={ logged_in }
          />}/>
          
          {/*   User Pages    */}
          <Route path="/user/:page" render={ (props) => <UserPageRouter {...props} 
                    handleSubmit={ addPantryItemToUser } 
                    current_user={ current_user }
                    logged_in={ logged_in }
          />}/>

          
          
          
          
          {/* Individual Test Routes */}
          <Route path="/shaker" exact render={ (props) => <ShakersTest {...props} />} />
          <Route path="/austin" exact render={ (props) => <AustinsTest {...props} />} />
          <Route path="/julia" exact render={ (props) => <JuliasTest {...props} />} />
          <Route path="/connor" exact render={ (props) => <ConnorsTest {...props} 
          current_user={ current_user }/>} />

          
          
          
          
          {/*   Recipes Available (List)    */}
          <Route path="/recipes" render={ (props) => <ViewRecipes {...props} 
                  current_user={ current_user }
          />}/>

         
         
         
          {/*   Home Page    */}
          <Route render={ (props) => 
              <Home {...props} 
                  
          />}/>
          
        </Switch>
      </Router>
      </PageSlot>
      </React.Fragment>
    );
  }
}
