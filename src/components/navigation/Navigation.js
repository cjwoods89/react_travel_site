import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Navigation.css';

import { Nav, Navbar, NavItem} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (

        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
                <img src={logo} className="App-logo" alt="logo" />
                <a href="#">My React Travel Site</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">Home</NavItem>
                <NavItem eventKey={2} href="#">About</NavItem>
                <NavItem eventKey={3} href="#">Stuff</NavItem>
                <NavItem eventKey={4} href="#">Contact</NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
  }
}

export default Navigation;
