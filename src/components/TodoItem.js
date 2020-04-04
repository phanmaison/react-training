import React, { Component } from 'react'
import PropTypes from 'prop-types';

import '../App.css';

export class TodoItem extends Component {
	getTodoItemStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
			color: this.props.todo.completed ? 'lightgray' : 'black',
			// margin: '8px'
		}
	}

	render() {
		const { id, title, completed } = this.props.todo;
		return (
			<div style={this.getTodoItemStyle()}>
				<div className="todo-item">
					<input type="checkbox"
						checked={completed}
						onChange={() => this.props.markComplete(id)}
					/>
					<button className="btn-delete"
						onClick={() => this.props.delTodo(id)}> x
					</button>
					<span>
						{' '} {title} {' '}
					</span>
				</div>
			</div>
		)
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}

export default TodoItem
