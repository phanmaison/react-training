import React from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from "./components/Todos";
import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'ECRM-224 Import Summary Changes',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'PAY-218-Include-logo-in-bottom-leftx',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'PAY-295-Start-and-end-of-employment-validation',
        completed: true
      },
    ]
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo =>
        todo.id !== id)]
    });
  }

  addTodo = title => {
    if (title === '') {
      return null;
    }
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    };

    this.setState({
      todos: [newTodo, ...this.state.todos]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <hr/>
          <Todos todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
