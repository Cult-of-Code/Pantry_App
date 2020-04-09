import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect} from "react-router-dom"


class AddItemToPantry extends Component{
    constructor(props){
        super(props)
        this.state = {
          success: false,
          form:{
            name: '',
            quantity: '',
            units: '',
            storage_bin: 'the stash behind the television set',
            when_bought: '',
            exp_date: '',
            min_item: '',
            max_item: ''
          }
        }
    }
handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.form)
        this.props.submitForm(this.state.form)
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
                <Label htmlFor="quantity" id="quantity">Quantity</Label>
                    <Input
                        type="text"
                        name="quantity"
                        onChange={ this.handleChange }
                        value={ this.state.form.quantity }
                    />
                <Label htmlFor="units" id="units">Unit of Measurement</Label>
                    <Input
                        type="text"
                        name="units"
                        onChange={ this.handleChange }
                        value={ this.state.form.units }
                    />
                <Label htmlFor="when_bought" id="when_bought">Date of Purchase</Label>
                    <Input
                        type="text"
                        name="when_bought"
                        onChange={ this.handleChange }
                        value={ this.state.form.when_bought }
                    />
                <Label htmlFor="exp_date" id="exp_date">Expiration Date</Label>
                    <Input
                        type="text"
                        name="exp_date"
                        onChange={ this.handleChange }
                        value={ this.state.form.exp_date }
                    />
                <Label htmlFor="min_item" id="min_item">Minimum Amount</Label>
                    <Input
                        type="text"
                        name="min_item"
                        onChange={ this.handleChange }
                        value={ this.state.form.min_item }
                    />
                <Label htmlFor="max_item" id="max_item">Maximum Amount</Label>
                    <Input
                        type="text"
                        name="max_item"
                        onChange={ this.handleChange }
                        value={ this.state.form.max_item }
                    />
            </FormGroup>
            <Button name="submit" id="submit" onClick={ this.handleSubmit }>
              Add New Item to Pantry
            </Button>
            { this.state.success && <Redirect to="/"/> }
              <Button id="home" href= "/" >Home</Button>
        </Form>
      </React.Fragment>
    )
 }
}
export default AddItemToPantry