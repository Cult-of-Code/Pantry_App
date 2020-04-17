import React, { Component } from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';




class ViewUserRecipes extends Component {
    
    render(){
        if (this.props.user_recipes !== null){
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
        } else {
            return (
                <React.Fragment>
                <h1> You do not have any recipes yet!</h1>
                </React.Fragment>
                )
        }
    }
}

export default ViewUserRecipes