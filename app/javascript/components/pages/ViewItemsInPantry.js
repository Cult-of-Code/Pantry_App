import React, { Component } from 'react';
import Storages from './Storages'
import {getItemsFromUserPantry} from '../logical/fetchers'
import Pantry from '../helpers/PantryAPI'
import pantry_item from '../Data/mockData'


class ViewItemsInPantry extends Component {
    constructor(){
        super()
        this.state= {
            items: []
        }
    }
        items = []
        
        componentDidMount(){

        Pantry.retrieve({ pack: 'items', id: this.props.user_id.id })
        .then( ({ results }) => {
            console.log(results.pantry_items)
            this.items.push (results.pantry_items)
        }).then( ( ) => {
            this.setState({ items: this.items }) 
        })
        


    }
        
        
        
        
    render(){
        var items = this.state.items[0]
        
        if (this.state.items === [] || this.state.items[0] === undefined) {
        return (
            <h1>Loading</h1>
            )

    }else {
        {var storage_bin = []}
        {var single_bin = ''}
        return (
            <React.Fragment>
                { items.map((pantry_item, index) => {
                if (storage_bin.includes(pantry_item.storage_bin)){
                } else if (pantry_item.user_id === this.props.user_id.id){
                storage_bin.push(pantry_item.storage_bin)
                    single_bin = pantry_item.storage_bin
                    return(
                        <Storages 
                        single_bin = {single_bin}
                        pantry_item = {items}
                        user_id = {this.props.user_id.id}
                        />
                                )
                            }
                        }
                    )
                }
            </React.Fragment>

        )
    }}
}

export default ViewItemsInPantry