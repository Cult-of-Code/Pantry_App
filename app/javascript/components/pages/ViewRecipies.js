import React, { Component } from 'react';
import Pantry from '../helpers/PantryAPI'
import TheMealDB from '../helpers/TheMealDB'









    Pantry.retrieve({ pack: 'items', id: 23 })
        .then( ({ results }) => {
            console.log([...results.pantry_items.map( item => item.name)])
/*          return TheMealDB.searchByIngredients( [...results.pantry_items.map( item => item.name)]) */
            return TheMealDB.searchByIngredients( ['Chicken', 'Basil'])
        }).then( ( list ) => {
          this.setState({ searchResults: list }) 
        })