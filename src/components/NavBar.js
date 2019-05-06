
import {Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from "reactstrap";
    import React, { Component } from 'react'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
        render() {
        return (
        <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/home">Quantos</NavbarBrand>
            <NavbarBrand href="/profile" style={{ fontSize:".9rem" }} >Edit Profile</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/news">News</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/stock">Stock</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/compound-interest">Free Money</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div> 
    )
}}

export default NavBar

