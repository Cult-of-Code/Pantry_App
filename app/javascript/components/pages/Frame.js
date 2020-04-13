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
           <div className="p-3 my-2 rounded bg-docs-transparent-grid">
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
      </div>
        
      </React.Fragment>
    )
  }
}
export default Frame