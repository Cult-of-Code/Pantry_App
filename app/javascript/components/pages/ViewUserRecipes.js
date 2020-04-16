import React, { Component } from 'react';
import { Card, CardTitle, CardText, Col } from 'reactstrap';




class ViewUserRecipes extends Component {
    
    render(){
      return (
        <React.Fragment>
            { props.user_recipes.map((user_recipe, index) => {
                return(
                    <Card body key={ index} >
                        <CardTitle active tag="button" action>{ user_recipe.name }</CardTitle>
                        <CardText>
                        { user_recipe.est_time } - { user_recipe.description }
                        </CardText>
                        
                    </Card>
                )
            })}
       
        </React.Fragment>
        )
    }
}

export default ViewUserRecipes