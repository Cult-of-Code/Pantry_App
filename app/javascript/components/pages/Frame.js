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
                      <NavLink href="">Get Recipes</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="">My Recipes</NavLink>
                    </NavItem>
                </Nav>
        </Navbar>
           <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            User Name 
          </ToastHeader>
          <ToastBody>
            Welcome (insert user name)! Lets get cooking!
            <Nav vertical>
                <NavItem>
                  <NavLink href="#">Your Pantry</NavLink>
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
      </div>
        
      </React.Fragment>
    )
  }
}
export default Frame