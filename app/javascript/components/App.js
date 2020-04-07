import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


import { myTest, cool } from './logical/master'
import { PuppyRecipes } from './logical/fetchers'


class App extends React.Component {
  constructor(){
    super()
    
    this.accessCORS = 'https://cors-anywhere.herokuapp.com/'
    
    this.state = {
      recipePuppy: {},
      error: null
    }
    
    
    
    
    //        "tests"
    // Logic from the Master file
    
    console.log(  myTest()  )
    console.log(  cool()  )
    
    
    
    
  }
  
  
  componentDidMount(){
    
    this.getRecipePuppy()
    
    /*
    let results = PuppyRecipes()
    this.setState({ 
      recipePuppy: results.results, 
      error: results.error
    }) 
    */
  }
  
  
  
  // Test ONIONS
  getRecipePuppy = () => {
    
    //https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
    //http://www.recipepuppy.com/about/api/
    fetch(`${this.accessCORS}http://www.recipepuppy.com/api/`, 
      { 
        headers: { 'Content-Type': 'application/json' }
      })
    .then((response)=>{
      //console.table(response)
        if(response.status === 200)
        { return(response.json()) }
    })
    .then((resultsArray)=>{
      console.log(resultsArray)
        this.setState({ recipePuppy: resultsArray }) 
    })
    .catch((error) => this.setState({error}))
  }
  
  /* = * = * = * = * = * = * = * = * = * = * = * = * = * = * = */
  
  
  
  
  render () {
    
    
    console.table(this.state.recipePuppy.results)
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
      </React.Fragment>
    );
  }
}

export default App
