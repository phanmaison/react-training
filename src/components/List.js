import React from 'react';
import { connect } from 'react-redux';

import { deleteItem, updateItem } from '../redux/actions';

class List extends React.Component {
  delete(id) {
    if (window.confirm('Do you want to delete?')) {
      this.props.deleteItem(id);
    }
  }
  render() {
    const items = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.content}</td>
          <td>
            <a onClick={() => this.props.updateItem(item)} href="#edit">edit</a>
            <a onClick={() => this.delete(item.id)} href="#delete">delete</a>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h3>List task</h3>
        <table>
          <thead>
            <tr><th>Content</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    items: state.userItems
  };
};

export default connect(mapState, { deleteItem, updateItem })(List);