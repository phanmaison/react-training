import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';
import List from './List';
import Menu from './Menu';
import { logoutAction } from '../redux/actions';

class Home extends React.Component {
  updateState(item) {
    let total = this.state.total;
    item.id = ++total;
    this.setState(state => {
      return {
        items: [...state.items, item],
        total: total
      }
    });
  }
  showEditForm(item) {
    document.getElementById('formInput').value = item.content;
    this.setState(state => {
      return { 
        items: state.items,
        total: state.total,
        idEdit: item.id
      };
    });
  }
  updateItem(id, content) {
    let items = this.state.items.map(item => {
      if (item.id === id) {
        item.content = content;
      }
      return item;
    });
    const total = this.state.total;
    this.setState((state) => {
      return {
        items: items,
        total: state.total,
        idEdit: 0
      }
    });
  }
  render() {
    return (
      <div>
        <Menu />
        <h3>Hello {this.props.userId}, <a href="#logout" onClick={() => this.props.logoutAction()}>logout</a></h3>
        <Form />
        <List />
      </div>
    );
  }
}

const mapState = state => ({
  userId: state.userId
});

export default connect(mapState, { logoutAction })(Home);
