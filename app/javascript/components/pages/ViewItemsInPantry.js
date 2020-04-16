import React, { Component } from 'react';
import Storages from './Storages'
import {getItemsFromUserPantry} from '../logical/fetchers'
import pantry_item from '../Data/mockData'


class ViewItemsInPantry extends Component {
    constructor(props){
        super(props)
        this.state = {
          items: null,
        }
    }
    
    
    componentDidMount() {
    
    let output = { 
        results:  undefined,
        error:    'no error'
    }
    
    return fetch(`https://7742f0fa2a534226b6a53e03ed2dc239.vfs.cloud9.us-east-2.amazonaws.com/user_pantry_items/${this.props.user_id}`, 
      { 
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors'
      })
    .then((response)=>{
        if(response.status === 200)
        { return(response.json()) }
    })
    .then((resultsJSON)=>{
        output.results = resultsJSON.pantry_items
        this.setState({items: resultsJSON.pantry_items})
        return output.results
    })
    .catch((error) => output.error = error )

}
    
    render(){
        if (this.state.items === null) {
        return (
            <h1>Loading</h1>
            )
        
    }else {
        {var storage_bin = []}
        {var single_bin = ''}
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
    }}
}

export default ViewItemsInPantry