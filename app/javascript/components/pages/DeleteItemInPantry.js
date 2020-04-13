import React from 'react';
import { Link } from 'react-router-dom';

export default class DeleteItemInPantry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: usersPantryItems };
  }

  componentDidMount() {
    this.getItemsFromUserPantry();
  }

  getItemsFromUserPantry = () => {
    fetch(`${localhost}pantry_items/`).
      then((response) => response.json()).
      then((items) =>  this.setState({ items }));
  };

  handleDelete = (itemId) => {
    fetch(`${localhost}pantry_items/${user_id}`, { method: 'delete' }).
      then((response) => {
        alert('Item deleted successfully')
        this.getItemsFromUserPantry();
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h3>All Pantry Items</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Units</th>
              <th>Storage Bin</th>
              <th>When Bought</th>
              <th>Expiration Date</th>
              <th>Minimum Item</th>
              <th>Maximum Item</th>
            </tr>
          </thead>
          <tbody>
          {
            items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <Link to={`/pantry/${item.id}`}>
                      {item.quantity}
                    </Link>
                  </td>
                  <td>{item.units}</td>
                  <td>{item.storage_bin}</td>
                  <td>{item.when_bought}</td>
                  <td>{item.exp_date}</td>
                  <td>{item.min_item}</td>
                  <td>{item.max_item}</td>
                  <td>
                    <button onClick={() => this.handleDelete(item.id) }>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}