

//------------------------------------------
//          Nessessary Imports
//------------------------------------------
import React, { Component } from 'react';
import { Nav, NavItem, NavLink, NavbarText, Toast, ToastBody, ToastHeader, Row, Col, Alert } from 'reactstrap';


//------------------------------------------
//              Components
//------------------------------------------


//------------------------------------------
//                Pages
//------------------------------------------


//------------------------------------------
//                 Class
//------------------------------------------
export default class Slot extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
       return(
            <React.Fragment>
            <Row>
                <Col>
                <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                {this.props.logged_in &&
                    <Toast>
                      <ToastHeader>
                        User Name 
                      </ToastHeader>
                      <ToastBody>
                        Welcome! Lets get cooking!
                        <Nav vertical>
                            <NavItem>
                              <NavLink href="/user">Go to Dashboard</NavLink>
                            </NavItem>
                            <NavbarText>
                             About to Expire
                            </NavbarText>
                            <NavbarText>
                             Running Low On
                            </NavbarText>
                        </Nav>
                      </ToastBody>
                    </Toast>
                }
                {!this.props.logged_in &&
                    <div>
                    <Alert color="warning">
                        You need sign in to see this page!
                    </Alert>
                    </div>
                }
                </div>
                </Col>
                <Col>
                <div className="PageSlot">
                {this.props.children}
                </div>
                </Col>
            </Row>
            </React.Fragment>
        )
    }

}
