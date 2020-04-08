

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


//------------------------------------------
//                 App
//------------------------------------------
class App extends React.Component {
  constructor(){
    super()
    
    this.accessCORS = 'https://cors-anywhere.herokuapp.com/'
    
    this.state = {
      recipePuppy: {},
      theMealDB: {}
    }
    
    
    
    
    //        "tests"
    // Logic from the Master file
    
    console.log(  myTest()  )
    console.log(  cool()  )
    
    
    
    
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
      sign_in_route,
      sign_out_route
    } = this.props



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
          <Route path="/temp_form"><AddItemToPantry/></Route>
          
          <Route path="/about">About</Route>
          <Route> Home Page </Route>
          
        </Switch>
      </Router>
      </React.Fragment>
    );
  }
}

export default App
//