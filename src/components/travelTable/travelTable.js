import React, { Component } from 'react';
import './travelTable.css';

// import { Table } from 'react-bootstrap';

class TravelTable extends Component {
  render() {
    return (
        <tr>
            <td>{this.props.destination}</td>
            <td>{this.props.capitol}</td>
            <td>{this.props.offLanguage}</td>
            <td>{this.props.population}</td>
            <td>{this.props.natBird}</td>
        </tr>
    );
  }
}

export default TravelTable;

