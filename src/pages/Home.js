import React from "react";
import { Redirect } from 'react-router-dom';
import {Jumbotron } from 'reactstrap';
import List from '../pages/List'
import NavBar from '../components/NavBar'
import Contact from '../components/Contact'


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            modal: false,
            loggedIn: true,
        };
    }

    componentDidMount = () => {
        const token = localStorage.getItem('token')
        if (!token) {
            this.setState({
                loggedIn: false
            }) 
        }
    }

    handleRedirect = () => {
        if (this.state.loggedIn === false) {
            return <Redirect to="/login" />
        }
    }

    render() {
        const divStyle = {
            color: "white",
            backgroundImage: 'url(https://i0.wp.com/cultivatics.com/wp-content/uploads/2018/09/cropped-4k-wallpaper-architecture-background-1308624.jpg?ssl=1)',
          };
        return (
            <div>
                 <div>
                <NavBar/>
                </div>
                <div>
                <Jumbotron style={divStyle}>
                    <h1 className="display-3">Welcome back!</h1>
                    <p className="lead">Your start-up kit to Finance</p>
                    <hr className="my-2" />
                </Jumbotron>
                </div>
                <div className="List">
                <List/>
                </div>
                <div className="ContactForm">
                <Contact/>
                </div>
                { this.handleRedirect() }   
            </div>
        )
    }
}

export default Homepage;