import React, { Component } from 'react';
import Storages from './Storages'
import {getItemsFromUserPantry} from '../logical/fetchers'
import Pantry from '../helpers/PantryAPI'
import pantry_item from '../Data/mockData'


const ViewItemsInPantry = (props) => {
  
        var items = props.items[0]
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
}

export default ViewItemsInPantry