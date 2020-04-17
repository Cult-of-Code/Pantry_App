import React, {Component} from 'react';
import { getRecipePuppy, getTheMealDB, addPantryItemToUser, getItemsFromUserPantry } from '../logical/fetchers';
import Pantry from '../helpers/PantryAPI'
import TheMealDB from '../helpers/TheMealDB'

export default class ConnorsTest extends Component {
    
    constructor(){
        super()
        this.state= {
            searchResults: null
        }
    }
    
    componentDidMount(){
        
        Pantry.retrieve({ pack: 'items', id: this.props.current_user.id })
        .then( ({ results }) => {
            console.log( results.pantry_items )
            return Pantry.getAvailableRecipes( ["Chicken","Basil"] )
        })
        .then( ({ results }) => {
            this.setState({ searchResults: results }) 
        })
        
        
    }
    
    render(){

        if (this.state.searchResults === null){
            return (
                <h1>Loading</h1>
                )
        } else {
            return(
            <h1>{this.state.searchResults}</h1>
        )
        }
        

        
    }
}