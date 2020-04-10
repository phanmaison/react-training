import React from 'react';
import Form from './Form';
import List from './List';
import Menu from './Menu';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
          {
              id: 1,
              content: "task item a",
              status: 1
          },
          {
              id: 2,
              content: "text item b",
              status: 1
          },
          {
              id: 3,
              content: "text item c",
              status: 1
          }
      ],
      total: 3,
      idEdit: 0
    };

    this.updateState = this.updateState.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }
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
  deleteItem(id) {
    let items = this.state.items.filter(item => {
      return item.id != id;
    });
    const total = items.length;
    this.setState({
      items: items,
      total: total
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
      if (item.id == id) {
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
        <Form updateAppState={this.updateState} idEdit={this.state.idEdit} updateItem={this.updateItem} />
        <List items={this.state.items} deleteItem={this.deleteItem} showEditForm={this.showEditForm} />
      </div>
    );
  }
}

export default Home;
