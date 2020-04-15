import React, {Component} from 'react';
import { getRecipePuppy, getTheMealDB, addPantryItemToUser, getItemsFromUserPantry, deletePantryItemFromUser, updatePantryItemToUser } from '../logical/fetchers';

// class ShakersTest extends Component {
//     constructor(props) {
//         super(props)
//     }
    
//     handleDelete = (id) => {
//         deletePantryItemFromUser(id)
//         console.log("This item was successfully deleted!")
//     }
    
//     render(){
//         return(
//             <React.Fragment>
//                 <h1> Hello!! </h1>
//                 <button onClick={() => this.handleDelete(3) }>
//                       Delete
//                 </button>
//             </React.Fragment>)
//     }
// }


class ShakersTest extends Component {
    constructor(props) {
        super(props);
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
            max_item: '',
            user_id: 2
          }
        }
    }
    
    componentDidMount() {
        const { match: { params: { id } } } = this.props;
            
        getItemsFromUserPantry(4)
        .then( (received) => {
            console.log(received)
        this.setState({ form: received.results }) 
        })
    }
    
    handleUpdate = (id) => {
        console.log("updating")
        console.log(this.state.form)
        console.log(JSON.stringify(this.state.form))
        updatePantryItemToUser( this.state.form, id )
        console.log("This item was successfully updated!")
    }
    
    handleInputChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })

        console.table(form)
    }
    
    
    render(){
        const {name} = this.state
        return(
            <React.Fragment>
                <h1> Hello!! </h1>
            <div>    
            <label> Name: </label>
              <input
                type='text'
                name="name"
                value={name}
                onChange={this.handleInputChange}
            />
            </div>
            <button onClick={() => this.handleUpdate(4) }>
                  Update
            </button>
           
            </React.Fragment>)
    }
}

export default ShakersTest