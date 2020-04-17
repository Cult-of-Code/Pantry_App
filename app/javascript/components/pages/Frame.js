//------------------------------------------
//          Nessessary Imports
//------------------------------------------
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Toast, ToastBody, ToastHeader } from 'reactstrap';
//------------------------------------------
//                 App
//------------------------------------------
class Frame extends Component{ 
  render () {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Pantry App</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/users/sign_up">Create an Account</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/user">Get Recipes</NavLink>
                    </NavItem>
                </Nav>
        </Navbar>
           
        
      </React.Fragment>
    )
  }
}
export default Frame