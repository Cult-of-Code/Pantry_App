import React, { Component } from 'react';
import { ListGroup, small } from 'reactstrap';
import { Redirect} from "react-router-dom"
import pantry_item from '../mockData'


class ViewItemsInPantry extends Component {
    constructor(props){
        super(props)
        this.state = {
          items: pantry_item
        }
    }
    
    itemShow = () =>{ 
        this.props.cats.map((pantry_item, index) => {
            return(
                <ListGroup key={ index }>
                    <h4>{ pantry_item.name }</h4>
                    <small>{ pantry_item.quantity } { pantry_item.units }</small>
                </ListGroup>
                )
            }
        )
    }
    
    
    render(){
        return (
            <Div>
                <h1>Hey</h1>
            </Div>
        )
    }
}

export default ViewItemsInPantry