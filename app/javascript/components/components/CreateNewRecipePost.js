import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { Route, Switch, Redirect } from 'react-router-dom'

class CreateNewRecipePost extends Component {
    constructor() {
        super()
        this.state= {
            success: false,
           recipe: '' 
             
        }
    }      
            
            
        handleChange = (event) => {
        let { recipe } = this.state
        recipe= event.target.value
        this.setState({ recipe: recipe }) 
          }
        
        
        handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ success: true })
            }
             
        
        
        
    render(){
    return(
      <React.Fragment>
         <Form>
            <FormGroup>
                <Label htmlFor="name" id="name">New Recipe Name</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={ this.handleChange }
                        value={ this.state.recipe }
                    />
                    
            </FormGroup>
            <Button name="submit" id="submit" onClick={ this.handleSubmit }>
              Add New Recipe Post
            </Button>
            { this.state.success && <Redirect to={`/user/post/${this.state.recipe}/edit`}/> }
        </Form>
      </React.Fragment>
      )
    }
}

export default CreateNewRecipePost