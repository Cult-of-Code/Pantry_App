import React, { Component } from 'react';
import { Card, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import getItemsFromUserRecipe from '../logical/fetchers'



class ViewUserRecipes extends Component {
    
    render(){
    //     if (this.props.user_recipes !== null){
    //   return (
    //     <React.Fragment>
    //         { this.props.user_recipes.map((user_recipe, index) => {
    //             return(
    //                 <Card body key={ index} >
    //                     <CardTitle>{ user_recipe.name }</CardTitle>
    //                     <CardText>
    //                     { user_recipe.est_time } - { user_recipe.description }
    //                     </CardText>
    //                     <Button color="secondary" size="lg" block>See Recipe</Button>
    //                 </Card>
    //             )
    //         })}
       
    //     </React.Fragment>
    //     )
    //     } else {
            return (
                <React.Fragment>
                <Row>
               <Col> <h1> My Recipes</h1></Col>
                 <Col><Button href= "/user/post/create" >Add New Recipe</Button></Col>
                 </Row>
                </React.Fragment>
                )
        
    }
}

export default ViewUserRecipes