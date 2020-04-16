import React, {Component} from 'react';
import { getRecipePuppy, getTheMealDB, addPantryItemToUser, getItemsFromUserPantry } from '../logical/fetchers';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Toast, ToastBody, ToastHeader } from 'reactstrap';

class JuliasTest extends Component {
  

   render(){
      return (
        <React.Fragment>
            { this.props.user_recipes.map((user_recipe, index) => {
                return(
                    <Card body key={ index} >
                        <CardTitle>{ user_recipe.name }</CardTitle>
                        <CardText>
                        { user_recipe.est_time } - { user_recipe.description }
                        </CardText>
                        <Button color="secondary" size="lg" block>See Recipe</Button>
                    </Card>
                )
            })}
       
        </React.Fragment>
        )
    }

}

    


export default JuliasTest