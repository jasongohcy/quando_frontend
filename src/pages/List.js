import React, { Component } from 'react'
import ToDo from '../containers/ToDo'
import TaskForm from '../containers/Form'

class List extends Component {
  state = {
    todos: [
      { id: 1, task: 'Read the weekly news from Bloomberg Terminal ', done: false },
      { id: 2, task: 'Review of lIBOR rate 3 months against 20T-Bill ', done: false }
    ]
  }

  addTask = text => {
    const { todos } = this.state
    const newTask = {
      id: todos.length + 1,
      task: text,
      done: false
    }
    this.setState({
      todos: [newTask, ...todos]
    })
  }

  deleteTask = id => {
    const { todos } = this.state
    const updatedTodos = todos.filter(item => item.id !== id)
    this.setState({
      todos: updatedTodos
    })
  }

  toggleTask = id => {
    const { todos } = this.state
    const updatedTodos = todos.filter(item => item.id !== id)
    const task = todos.find(item => item.id === id)
    this.setState({
      todos: [
        ...updatedTodos,
        {
          ...task,
          done: !task.done
        }
      ]
    })
  }

  render() {
    const { todos } = this.state

    return (
      <div>
        <div className="border m-5 p-5">
        <h1>Research Notepad</h1>
        <ul>
          {todos.map((todo,index) => (
            <ToDo
            key={index}
              deleteTask={this.deleteTask}
              toggleTask={this.toggleTask}
              todo={todo}
            />
          ))}
        </ul>
        <TaskForm addTask={this.addTask} />
        </div>
       
      </div>
    )
  }
}

export default List