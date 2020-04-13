import React, { Component } from 'react';
import { Card, CardTitle, CardText, Col, Row, Container } from 'reactstrap';
import { Redirect } from "react-router-dom"
import pantry_item from '../Data/mockData'


class ViewOneItem extends Component {
    constructor(props){
        super(props)
        this.state = {
          items: pantry_item
        }
    }
    
    render(){
        const { id } = this.props.match.params
        
        const pantry_item = this.state.items.find((item) => item.id === parseInt(id))
        
        var when_bought = null
        
        var exp_date = null
        
        var min_item = null
        
        var max_item = null
        
        if (pantry_item.when_bought !== '' && pantry_item.when_bought !== null){
             when_bought = <CardText>{ pantry_item.when_bought } </CardText>
        } 
        
        if (pantry_item.exp_date !== '' && pantry_item.exp_date !== null) {
             exp_date = <CardText>{ pantry_item.exp_date } </CardText>
        }
        
        if (pantry_item.min_item !== '' && pantry_item.min_item !== null) {
             min_item = <CardText>{ pantry_item.min_item } </CardText>
        }
        
        if (pantry_item.max_item !== '' && pantry_item.max_item !== null) {
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

export default ViewOneItem