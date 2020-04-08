import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AddItemToPantry from '../AddItemToPantry'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', ()=> {
    const div = document.createElement('div')
    ReactDOM.render(<AddItemToPantry />, div)
})

it('has a name input', ()=> {
    const component = mount(<AddItemToPantry />)
    // looks for an id of name on the label tag
    expect(component.find('label#name').text()).toBe("Name")
})

it('has a quantity input', ()=>{
  const component = mount(<AddItemToPantry />)
  // looks for an id of quantity on the label tag
  expect(component.find('label#quantity').text()).toBe("Quantity")
})

it('has a units input', ()=>{
  const component = mount(<AddItemToPantry />)
  // looks for an id of units on the label tag
  expect(component.find('label#units').text()).toBe("Unit of Measurement")
})

it('has a when_bought input', ()=>{
  const component = mount(<AddItemToPantry />)
  // looks for an id of when_bought on the label tag
  expect(component.find('label#when_bought').text()).toBe("Date of Purchase")
})

it('has a exp_date', ()=>{
  const component = mount(<AddItemToPantry />)
  // looks for an id of exp_date on the label tag
  expect(component.find('label#exp_date').text()).toBe("Expiration Date")
})

it('has a min_item', ()=>{
  const component = mount(<AddItemToPantry />)
  // looks for an id of min_item on the label tag
  expect(component.find('label#min_item').text()).toBe("Minimum Amount")
})

it('has a max_item', ()=>{
  const component = mount(<AddItemToPantry />)
  // looks for an id of max_item on the label tag
  expect(component.find('label#max_item').text()).toBe("Maximum Amount")
})

it('has a submit button', ()=>{
  const component = mount(<AddItemToPantry />)
  // looks for an id of submit on the button
  expect(component.find('button#submit').text()).toBe("Add New Item to Pantry")
})