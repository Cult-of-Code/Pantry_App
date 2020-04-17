import React from 'react';
import { Card, CardTitle, CardText, Col, Row, Container } from 'reactstrap';
import { Redirect } from "react-router-dom"
import Pantry from '../helpers/PantryAPI'
import pantry_item from '../Data/mockData'


const ViewOneItem = (props) => {
    
        const { id } = props.match.params
        
        var items = props.items[0]
        
        const pantry_item = items.find((item) => item.id === parseInt(id))
        
        var when_bought = undefined
        
        var exp_date = undefined
        
        var min_item = undefined
        
        var max_item = undefined
        
        console.log(props.items)
        
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

export default ViewOneItem