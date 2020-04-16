import React, {Component} from 'react';
import { getRecipePuppy, getTheMealDB, addPantryItemToUser, getItemsFromUserPantry } from '../logical/fetchers';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Toast, ToastBody, ToastHeader } from 'reactstrap';

class JuliasTest extends Component {
  

    render(){
        return(
            <React.Fragment>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Pantry App</NavbarBrand>
            {this.props.logged_in &&
                <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="">Get Recipes</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="">My Recipes</NavLink>
                    </NavItem>
                </Nav>
            }
            {!this.props.logged_in &&
                <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/users/sign_up">Create an Account</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/user">Get Recipes</NavLink>
                    </NavItem>
                </Nav>
            }
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

    


export default JuliasTest