import React, { Component } from 'react'
//import { getRecipePuppy, getTheMealDB, addPantryItemToUser, getItemsFromUserPantry } from '../logical/fetchers'


import TheMealDB from '../helpers/TheMealDB'

export default class AustinsTest extends Component {
    
    constructor(){
        super()
        this.state= {}
    }
    
    componentDidMount(){

        TheMealDB.searchByIngredients(["Chicken","Basil"])
        .then( receivedList => {
          this.setState({ searchResults: receivedList }) 
        })
    }
    
    render(){
        console.table(this.state.searchResults)
        return(
            <h1>Austin</h1>
        )
    }
} 