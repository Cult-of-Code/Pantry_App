

//------------------------------------------
//          Nessessary Imports
//------------------------------------------
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Toast, ToastBody, ToastHeader } from 'reactstrap';


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
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Pantry App</NavbarBrand>
            <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="">Get Recipes</NavLink>
                    </NavItem>
            {this.props.logged_in &&
                    <NavItem>
                      <NavLink href="">My Recipes</NavLink>
                    </NavItem>
            }
            {!this.props.logged_in &&
                    <NavItem>
                      <NavLink href="/users/sign_up">Create an Account</NavLink>
                    </NavItem>
            }
            </Nav>
            </Navbar>
            <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            {this.props.logged_in &&
                <Toast>
                  <ToastHeader>
                    User Name 
                  </ToastHeader>
                  <ToastBody>
                    Welcome (insert user name)! Lets get cooking!
                    <Nav vertical>
                        <NavItem>
                          <NavLink href="#">Add Item to Pantry</NavLink>
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
                <Toast>
                  <ToastHeader>
                     Create an account to:
                  </ToastHeader>
                  <ToastBody>
                    <Nav vertical>
                        <NavbarText>
                         Get recipies based off what you have in your pantry
                        </NavbarText>
                        <NavbarText>
                         Track items about to Expire
                        </NavbarText>
                        <NavbarText>
                         See groceries you are running Low On
                        </NavbarText>
                    </Nav>
                  </ToastBody>
                </Toast>
            }
            </div>
            <div className="PageSlot">
                {this.props.components}
            </div>
            </React.Fragment>
        )
    }

}
