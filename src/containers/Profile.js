import React from 'react';
import moment from 'moment';
import axios from 'axios';
import { Table, Button, Input, } from 'reactstrap';


import NavBar from '../components/NavBar'


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            user: [],
            first_name: '',
            last_name: '',
        }
    }

    convertDate = () => {
        let datetime = moment(this.state.dob).format('LL')
        this.setState({ dob: datetime })
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/v1/users/me/',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            this.setState({
                user: response.data,
                first_name: response.data.first_name,
                last_name: response.data.last_name,
            })
            this.convertDate();
        })
    }

    handleEdit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: !this.state.disabled,
        })
    }

    handleSave = (event) => {
        const token = localStorage.getItem('token');
        this.setState({
            disabled: !this.state.disabled,
        })
        event.preventDefault();
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/v1/users/update/',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: {
                firstName: this.state.first_name,
                lastName: this.state.last_name,
            }
        }).then(response => {
            if (response.data.status === "success") {
            }
        })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        let { disabled } = this.state;
        let submitButton = disabled === false
            ? <Button type='submit' size='sm' outline color='danger' className='float-right' onClick={this.handleSave}>Save</Button>
            : <Button outline color='primary' size='sm' className='float-right' onClick={this.handleEdit}>Edit</Button>
        return (
           <div className="profile">
           <div className="NavBar">
               <NavBar/>
           </div>
            <Table>
                <thead>
                    <tr>
                        <th>Personal Details</th>
                        <th>{submitButton}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">First Name</th>
                        <td><Input id='edit' type='text' value={this.state.first_name} disabled={this.state.disabled} onChange={e => this.setState({ first_name: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <th scope="row">Last Name</th>
                        <td><Input id='edit' value={this.state.last_name} disabled={this.state.disabled} onChange={e => this.setState({ last_name: e.target.value })} /></td>
                    </tr>
                </tbody>
            </Table >
           </div>
        )
    }



}

export default Profile;
