import React, {Component} from 'react';

import {Button} from 'reactstrap';

class ToDo extends Component {
  handleToggle = () => {
    const { toggleTask, todo } = this.props
    toggleTask(todo.id)
  }

  handleDelete = () => {
    const { deleteTask, todo } = this.props
    deleteTask(todo.id)
  }

  render() {
    const { todo } = this.props
    return (
      <li
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
          color: todo.done ? 'red' : 'green'
        }}
      >
        <span onClick={this.handleToggle}>{todo.task}</span>
        <Button color="danger" onClick={this.handleDelete}>X</Button>
      </li>
    )
  }
}

export default ToDo