import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect} from "react-router-dom";
import {createRecipePostToUser} from "../logical/fetchers"


export default class CreateNewRecipePost extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {
          success: false,
          form:{
            name: '',
            description: '',
            est_time: '',
            user_id: this.props.current_user.id
           
          }
        }
    }
    
    
    
    handleChange = (event) => {
        let { form } = this.state
        console.log(form)
        form[event.target.name] = event.target.value
        this.setState({ form: form })
    }




    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.form)
        createRecipePostToUser(this.state.form)
        
        this.setState({ success: true })
    }





 render(){
    return(
      <React.Fragment>
         <Form>
            <FormGroup>
                <Label htmlFor="name" id="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={ this.handleChange }
                        value={ this.state.form.name }
                    />
                <Label htmlFor="description" id="description">Description</Label>
                    <Input
                        type="text"
                        name="description"
                        onChange={ this.handleChange }
                        value={ this.state.form.description }
                    />
                <Label htmlFor="est_time" id="est_time">Estimated Time</Label>
                    <Input
                        type="text"
                        name="est_time"
                        onChange={ this.handleChange }
                        value={ this.state.form.est_time }
                    />
            </FormGroup>
            <Button name="submit" id="submit" onClick={ this.handleSubmit }>
              Add New Recipe 
            </Button>
            { this.state.success && <Redirect to="/user/posts"/> }
              
        </Form>
      </React.Fragment>
    )
 }
}
