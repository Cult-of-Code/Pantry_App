import React, {Component} from 'react';
import { getRecipePuppy, getTheMealDB, addPantryItemToUser, getItemsFromUserPantry, deletePantryItemFromUser, updatePantryItemToUser } from '../logical/fetchers';

class ShakersTest extends Component {
    constructor(props) {
        super(props)
    }
    
    handleDelete = (id) => {
        deletePantryItemFromUser(id)
        console.log("This item was successfully deleted!")
    }
    
    render(){
        return(
            <React.Fragment>
                <h1> Hello!! </h1>
                <button onClick={() => this.handleDelete(3) }>
                      Delete
                </button>
            </React.Fragment>)
    }
}

export default ShakersTest