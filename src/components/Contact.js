import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import React, { Component } from 'react';
import axios from 'axios'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            text: '',
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    

    handleSubmit = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/v1/contact/',
            data: {
                email: this.state.email,
                text: this.state.text,
            }
        })
    }

    
    
    render() {
        return (
            <div className="border m-5 p-5">
            <h1>Inquiry Form</h1>

            <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
            <Input type="email" name="email" id="email" value={this.state.email} onChange={this.handleInput} />
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="exampleText" sm={2}>Text Area</Label>
            <Col sm={10}>
            <Input type="textarea" name="text" id="text" value={this.state.text} onChange={this.handleInput}  />
            </Col>
            </FormGroup>
        
            <FormGroup check row>
            <Col >
            <Button color="secondary ">Submit</Button>
            </Col>
            </FormGroup>
            </Form>
            </div>
            )
    }}

export default Contact

