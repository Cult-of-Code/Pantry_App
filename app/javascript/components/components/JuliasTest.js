import React, {Component} from 'react';
import { getRecipePuppy, getTheMealDB, addPantryItemToUser, getItemsFromUserPantry } from '../logical/fetchers';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Toast, ToastBody, ToastHeader } from 'reactstrap';
import UserPageSlot from '../pages/UserPageSlot'

class JuliasTest extends Component {
  

   render(){
      return (
        <React.Fragment>
        <UserPageSlot>
             
            <h1>
                Helllo
            </h1>
        </UserPageSlot>
        </React.Fragment>
        )
    }

}

    


export default JuliasTest