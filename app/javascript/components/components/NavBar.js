import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Toast, ToastBody, ToastHeader, Row, Col } from 'reactstrap';


export default function(props){
    let rgbV = 220
    let rgb = `rgb(${rgbV},${rgbV},${rgbV})`
return(
    <Navbar color="dark" light expand="md">
    <NavbarBrand href="/"> <span style={{ color:'white' }}>Pantry App</span> </NavbarBrand>
    
        <Nav className="ml-auto" navbar>
        
                <NavItem>
                  <NavLink href="/user/recipes">
                  <span style={{ color: rgb }}>Get Recipes</span>
                  </NavLink>
                </NavItem>
                
                <NavItem>{props.logged_in ? 
                  <NavLink href="/user/posts">
                  <span style={{ color: rgb }}>My Recipes</span>
                  </NavLink>
                  :
                  <NavLink href="/users/sign_up">
                  <span style={{ color: rgb }}>Create an Account</span>
                  </NavLink>
                }</NavItem>
                  
                  <NavItem>{!props.logged_in ?
                  <NavLink href="/users/sign_in">
                  <span style={{ color: rgb }}>Sign In</span>
                  </NavLink>
                  :
                  <NavLink href="/users/sign_out">
                  <span style={{ color: rgb }}>Sign out</span>
                  </NavLink>
                  
                }</NavItem>
                
        </Nav>
    </Navbar>
)
}