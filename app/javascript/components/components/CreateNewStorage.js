import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { Route, Switch, Redirect } from 'react-router-dom'

class CreateNewStorage extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state= {
            success: false,
           storage: '' 
             
        }
    }      
            
            
        handleChange = (event) => {
        let { storage } = this.state
        storage= event.target.value
        this.setState({ storage: storage }) 
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
                <Label htmlFor="name" id="name">New Storage Name</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={ this.handleChange }
                        value={ this.state.storage }
                    />
                    
            </FormGroup>
            <Button name="submit" id="submit" onClick={ this.handleSubmit }>
              Add New Storage Bin
            </Button>
            { this.state.success && <Redirect to={`/user/container/${this.state.storage}/edit`}/> }
        </Form>
      </React.Fragment>
      )
    }
}

export default CreateNewStorage