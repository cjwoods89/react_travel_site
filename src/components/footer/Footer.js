import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <nav class="navbar navbar-default navbar-fixed-bottom">
            <div className="container footer">
                  <p className="navbar-left"><span className="glyphicon glyphicon-copyright-mark"></span> Travel is fun</p>
                  <p className="navbar-right"><a href="www.twitter.com"><i className="fa fa-twitter-square" aria-hidden="true"></i>  Twitter</a></p>
                  <p className="navbar-right"><a href="www.facebook.com"><i className="fa fa-facebook-official" aria-hidden="true"></i>  Facebook</a></p>
            </div>
        </nav>
    );
  }
}

export default Footer;
