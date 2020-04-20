import React from 'react';
import { Card, CardTitle, CardText, Col, Row, Container } from 'reactstrap';
import { Link } from "react-router-dom"


const Storages = (props) => {

    const single_bin = props.single_bin
    const items = props.pantry_item

        return (
            <React.Fragment>
                    <Col style={{padding: '10px'}}>
                        <Card body>
                            <CardTitle>{single_bin}</CardTitle>
                            <Row>
                                { items.map((pantry_item, index) => {
                                    if (pantry_item.storage_bin === single_bin && pantry_item.user_id === props.user_id) {
                                        return(
                                            <Col xs="3" sm="12" md={{ size: 2 }} style={{padding: '2px'}} key={ index }>
                                                <Container  >
                                                    <Card body >
                                                        <Link to = { `/user/collection/${pantry_item.id}` }><CardTitle>{ pantry_item.name }</CardTitle> </Link>
                                                        <CardText>{ pantry_item.quantity } { pantry_item.units }</CardText>
                                                    </Card>
                                                </Container>
                                            </Col>
                                                )
                                            }
                                        }
                                    )
                                }
                            </Row>
                        </Card>
                    </Col>
            </React.Fragment>
        )
    }


export default Storages