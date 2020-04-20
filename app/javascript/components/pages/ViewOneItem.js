import React, {Component} from 'react';
import { Card, CardTitle, CardText, Col, Row, Container } from 'reactstrap';
import { Redirect } from "react-router-dom"
import Pantry from '../helpers/PantryAPI'
import pantry_item from '../Data/mockData'


class ViewOneItem extends Component {
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
            this.items.push (results.pantry_items)
        }).then( ( ) => {
            this.setState({ items: this.items }) 
        })
        
    }
    
    
    
    
    render(){
        
        if (this.state.items === [] || this.state.items[0] === undefined) {
        return (
            <h1>Loading</h1>
            )

    }else {
        
        var items = this.items[0]
        
        const { id } = this.props.match.params
        
        const pantry_item = items.find((item) => item.id === parseInt(id))
        
        var when_bought = undefined
        
        var exp_date = undefined
        
        var min_item = undefined
        
        var max_item = undefined
        
        console.log(this.props.items)
        
        if (pantry_item.when_bought !== '' && pantry_item.when_bought !== undefined){
             when_bought = <CardText>{ pantry_item.when_bought } </CardText>
        } 
        
        if (pantry_item.exp_date !== '' && pantry_item.exp_date !== undefined) {
             exp_date = <CardText>{ pantry_item.exp_date } </CardText>
        }
        
        if (pantry_item.min_item !== '' && pantry_item.min_item !== undefined) {
             min_item = <CardText>{ pantry_item.min_item } </CardText>
        }
        
        if (pantry_item.max_item !== '' && pantry_item.max_item !== undefined) {
             max_item = <CardText>{ pantry_item.max_item } </CardText>
        }
        
        return (
            <React.Fragment>
                <Col xs="3" sm="12" md={{ size: 2 }} style={{padding: '2px'}}>
                    <Container  >
                        <Card body>
                            <CardTitle>{ pantry_item.name }</CardTitle>
                            <CardText>{ pantry_item.quantity } { pantry_item.units }</CardText>
                            {when_bought}
                            {exp_date}
                            {min_item}
                            {max_item}
                        </Card>
                    </Container>
                </Col>
            </React.Fragment>
        )
    }
    }
}

export default ViewOneItem