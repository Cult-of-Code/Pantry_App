import React, { Component } from 'react';
import { Card, CardTitle, CardText, Col, Row, Container } from 'reactstrap';
import { Redirect } from "react-router-dom"
import pantry_item from '../Data/mockData'


class ViewItemsInPantry extends Component {
    constructor(props){
        super(props)
        this.state = {
          items: pantry_item
        }
    }
    
    
    
    
    render(){
        
        return (
            <Col style={{padding: '10px'}}>
                <Card body>
                    <Row>
                        { this.state.items.map((pantry_item, index) => {
                    return(
                        <Col xs="3" sm="12" md={{ size: 2 }} style={{padding: '2px'}}>
                        <Container  >
                            <Card body key={ index }>
                                <CardTitle>{ pantry_item.name }</CardTitle>
                                <CardText>{ pantry_item.quantity } { pantry_item.units }</CardText>
                            </Card>
                        </Container>
                        </Col>
                                    )
                                }
                            )
                         }
                    </Row>
                </Card>
            </Col>
        )
    }
}

export default ViewItemsInPantry