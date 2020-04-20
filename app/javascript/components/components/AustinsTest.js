

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
//               Components
//------------------------------------------
import Notification from './user_notifications/notification'
import RecipeSearchResultsDisplay from './recipe_search'


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
        //Pantry.format( TheMealDB.searchByIngredients("Chicken, Basil") )
        Pantry.format( TheMealDB.searchByIngredients(["Chicken","Basil"]) )
        .then( receivedList => {
          this.setState({ searchResults: receivedList }) 
        })
        */
        
        
        
        /*
        Pantry.retrieve({ pack: 'items', id: 107 })
        .then( ({ results }) => {
            console.log( [...results.pantry_items.map( item => item.name )] )
          //return TheMealDB.searchByIngredients( [...results.pantry_items.map( item => item.name )] )
          //return TheMealDB.searchByIngredients( results.pantry_items )
          return TheMealDB.searchByIngredients( ["Chicken","Basil"] )
        })
        .then( ( list ) => {
            
          this.setState({ searchResults: list }) 
        })
        */
        
        
        
        /* 
        Pantry.retrieve({ pack: 'posts', id: 107 })
        .then( ({ results }) => {
          this.setState({ searchResults: results }) 
        })
        */
        
        
        
        ////      WORKING GREAT
        
        
        Pantry.retrieve({ pack: 'items', id: 150 })
        .then( ({ results }) => {
            let items = results.pantry_items
            //items = items.splice( 0, Math.floor(items.length*0.15) )
            
            console.log( items )
            return Pantry.getAvailableRecipes( items )
        })
        .then( ( results ) => {
            console.log(results)
            this.setState({ searchResults: results }) 
        })
        
        
        
        
        
        
        /*
        Pantry.retrieve({ pack: 'items', id: 107 })
        .then( ({ results }) => {
            this.setState({ searchResults: results }) 
        })
        */
        
        /*
        TheMealDB._fetchDB({ input: '', output:{results:'',error:''} })
        .then( ({ results }) => {
            this.setState({ searchResults: results }) 
        })
        */
        
    }
    
    render(){

    
        //console.log(this.state.searchResults)
    /*   
        console.log(Date.now())
        
        if (this.state.searchResults)
        { console.log(
            (Date.parse(this.state.searchResults.pantry_items[0].exp_date) - Date.now()) / 86400000
        )}
        // if less than 1 -> expires tomorrow
        // warn 3 days before expire
        //  ->   if less than 3, expires in 3 days
    */
    
    
        return(<React.Fragment>
        
            <h1>Austin</h1>
            <Notification.expire/>
            {/* this.state.searchResults && Notification.low(this.state.searchResults)*/}
            
            <div className="dude">
                <div className="pep">
                    HHH
                </div>
            </div>
            <div className="pep">
                    BBB
            </div>
            
            
            {/*     Break     */}
            <br/><br/> <br/><br/>
            {/*               */}
            
            
            
            
            {/* results={this.state.searchResults} */}
            <RecipeSearchResultsDisplay />
            
            
        </React.Fragment>)
    }
} 