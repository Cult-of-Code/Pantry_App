import React, { Component } from 'react';
import Pantry from '../helpers/PantryAPI'
import TheMealDB from '../helpers/TheMealDB'

export default class Recipies extends Component {
    
    constructor(){
        super()
        this.state= {}
    }
    
    componentDidMount(){
        
        Pantry.retrieve({ pack: 'items', id: 23 })
        .then( ({ results }) => {
            console.log( results.pantry_items )
            return Pantry.getAvailableRecipes( results.pantry_items )
        })
        .then( ({ results }) => {
            this.setState({ searchResults: results }) 
        })
        
        
    }
    
    render(){

        console.log(this.state.searchResults)
        
        return(
            <h1>Test</h1>
        )
    }
}