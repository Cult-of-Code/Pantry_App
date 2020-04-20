import React, { Component } from 'react'
import Pantry from '../helpers/PantryAPI'

import RecipeSearchResultsDisplay from '../components/recipe_search'

export default class ViewRecipes extends Component {
    
    constructor(props){
        super(props)
        this.state= {}
    }
    
    
    componentDidMount(){
        
        Pantry.retrieve({ pack: 'items', id: 150 })
        .then( ({ results }) => {
            return Pantry.getAvailableRecipes( results.pantry_items )
        })
        .then( ( results ) => {
            this.setState({ searchResults: results }) 
        })
        
    }
    
    // this.state.searchResults
    render(){return(<RecipeSearchResultsDisplay searchResults={this.state.searchResults} />)}
}