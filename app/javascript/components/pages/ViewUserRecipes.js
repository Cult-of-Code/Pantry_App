import React, { Component } from 'react';
import { Card, CardTitle, CardText, Button, Row, Col } from 'reactstrap';




class ViewUserRecipes extends Component {
    
    render(){
         return (
                <React.Fragment>
                <Row>
                    <Col> <h1> My Recipes</h1></Col>
                    <Col><Button href= "/user/post/create" >Add New Recipe</Button></Col>
                 </Row>
      
                { this.props.user_recipes.map((user_recipe, index) => {
                    return(
                        <Card body key={ index} >
                            <CardTitle>{ user_recipe.name }</CardTitle>
                            <CardText>
                            { user_recipe.est_time } - { user_recipe.description }
                            </CardText>
                            <Button href= "/user/post/:post_id" color="secondary" size="lg" block>See Recipe</Button>
                        </Card>
                    )
                })}
       
                </React.Fragment>
        )
           
        
    }
}

export default ViewUserRecipes