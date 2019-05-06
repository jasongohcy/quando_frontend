import React, { Component } from 'react'
import {Row, Input, Button} from 'reactstrap';

class TaskForm extends Component {
  state = {
    text: ''
  }

  handleInput = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTask(this.state.text)
  }

  render() {
    const { text } = this.state
    return (
        <form onSubmit={this.handleSubmit}>
         <Row style={{justifyContent:'center'}}>
        <Input style={{width:'300px'}} type="text" value={text} onChange={this.handleInput}></Input>
        <Button style={{marginLeft:'1rem'}} color="primary">Submit</Button>
        </Row>
        </form>
     
    )
  }
}

export default TaskForm