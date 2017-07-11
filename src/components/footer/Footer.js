import React, { Component } from 'react';
import './Footer.css';

import { Nav, Navbar, NavItem} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (


        <Navbar inverse>
          <Navbar.Text pullLeft>
              <span className="glyphicon glyphicon-copyright-mark"></span> Travel is fun
          </Navbar.Text>
          <Navbar.Collapse>
          <Nav pullRight>
              <NavItem eventKey={2} href="www.twitter.com"><i className="fa fa-twitter-square" aria-hidden="true"></i>  Twitter</NavItem>
              <NavItem eventKey={3} href="www.facebook.com"><i className="fa fa-facebook-official" aria-hidden="true"></i>  Facebook</NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>

    );
  }
}

export default Footer;
