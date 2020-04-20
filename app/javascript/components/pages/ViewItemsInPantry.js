import React, { useState, useEffect } from 'react';
import Storages from './Storages'
import {getItemsFromUserPantry} from '../logical/fetchers'
import Pantry from '../helpers/PantryAPI'
import pantry_item from '../Data/mockData'


const ViewItemsInPantry = (props) => {
    
        /*
        Pantry.retrieve({ pack: 'items', id: this.props.current_user.id })
        .then( ({ results }) => {
            this.state.pantry_items.push(results.pantry_items)
        }).then( () => {
            this.setState({routeToViewAllPantry: <Route path="/:user_id/pantry" exact render={ (props) => <ViewItemsInPantry {...props} 
            user_id={ this.props.current_user.id }
            items={ this.state.pantry_items }
          />} />})
            this.setState({routeToViewOnePantry: <Route path="/:user_id/pantry/:id" exact render={ (props) => <ViewOneItem {...props} 
            user_id={ this.props.current_user.id }
            items={ this.state.pantry_items }
          />} />})
        })
        */
        const [data, setData] = useState({ items: [] });
        
        useEffect(() => {
            const fetchData = async () => {
              const result = await Pantry.retrieve({ pack: 'items', id: 23 });
              console.log(result.results.pantry_items)
              setData(result.results.pantry_items);
            };
            fetchData();
          }, [])
        
        var items = null
        
        /*
        const retrieveData = () => {
            Pantry.retrieve({ pack: 'items', id: 23 })
        .then( ({ results }) => {
            console.log( results.pantry_items )
            items = results.pantry_items
            
        })
        }
        
        
        retrieveData()
        */
        console.log (setData)
        if (items !== null) {
        var storage_bin = []
        var single_bin = ''
        return (
            
            <React.Fragment>
                { items.map((pantry_item, index) => {
                    if (storage_bin.includes(pantry_item.storage_bin)){
                        
                    } else if (pantry_item.user_id === props.user_id){
                        storage_bin.push(pantry_item.storage_bin)
                        single_bin = pantry_item.storage_bin
                        return(
                            <Storages 
                            single_bin = {single_bin}
                            pantry_item = {items}
                            user_id = {props.user_id}
                            />
                                )
                            }
                        }
                    )
                }
            </React.Fragment>
        
        )
    } else {
        return (
            <h1>Loading</h1>
        )
    }
}

export default ViewItemsInPantry