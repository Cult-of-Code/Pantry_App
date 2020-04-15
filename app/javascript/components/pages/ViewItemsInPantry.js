import React, { Component } from 'react';
import { Card, CardTitle, CardText, Col, Row, Container } from 'reactstrap';
import { Link } from "react-router-dom"
import pantry_item from '../Data/mockData'
import Storages from './Storages'
import {getItemsFromUserPantry} from '../logical/fetchers'


class ViewItemsInPantry extends Component {
    constructor(props){
        super(props)
        this.state = {
          items: this.getItems(),
          getItems: this.getItems()
        }
    }
    
    getItems() {
        let items =  (getItemsFromUserPantry(this.props.user_id))
        return items
    }
    
    
    render(){
        var items = this.state.items
        {var storage_bin = []}
        {var single_bin = ''}
        console.log( this.state.items)
        console.log( this.state.getItems)
        
        return (
            
            <React.Fragment>
                { this.state.items.map((pantry_item, index) => {
                    if (storage_bin.includes(pantry_item.storage_bin)){
                        
                    } else if (pantry_item.user_id === this.props.user_id){
                    storage_bin.push(pantry_item.storage_bin)
                    single_bin = pantry_item.storage_bin
                    return(
                        <Storages 
                        single_bin = {single_bin}
                        pantry_item = {this.state.items}
                        user_id = {this.props.user_id}
                        />
                                )
                            }
                        }
                    )
                }
            </React.Fragment>
        )
    }
}

export default ViewItemsInPantry