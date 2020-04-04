import React, { Component } from 'react'
import '../App.css';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input type="text" name="title" 
          className="input-add"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />

        <input type="submit" className="btn-add" value="Add"
        />
      </form>
    )
  }
}

export default AddTodo
