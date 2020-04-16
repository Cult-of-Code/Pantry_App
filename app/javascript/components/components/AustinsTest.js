

//------------------------------------------
//          Nessessary Imports
//------------------------------------------
import React, { Component } from 'react'
//import { getRecipePuppy, getTheMealDB, addPantryItemToUser, getItemsFromUserPantry } from '../logical/fetchers'

//------------------------------------------
//                Helpers
//------------------------------------------
import TheMealDB from '../helpers/TheMealDB'
import Pantry from '../helpers/PantryAPI'


//------------------------------------------
//                 Class
//------------------------------------------
export default class AustinsTest extends Component {
    
    constructor(){
        super()
        this.state= {}
    }
    
    componentDidMount(){
        
        /*
        //Pantry.format( TheMealDB.searchByIngredients(["Chicken","Basil"]) )
        Pantry.format( TheMealDB.searchByIngredients("Chicken, Basil") )
        .then( receivedList => {
          this.setState({ searchResults: receivedList }) 
        })
        */
        
        Pantry.retrieve({ pack: 'items', id: 53 })
        .then( ({ results }) => {
          this.setState({ searchResults: results }) 
        })
        
        
    }
    
    render(){

        console.log(this.state.searchResults)
        
        return(
            <h1>Austin</h1>
        )
    }
} 