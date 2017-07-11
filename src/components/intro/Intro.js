import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
        <div className="page-header">
          <h1>Welcome to my React Travel Site</h1>
          <h1><small>This site is about places I would like to travel</small></h1>
          <h1>Here are some places I would like to visit</h1>
        </div>
    );
  }
}

export default Intro;
