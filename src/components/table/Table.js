import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
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

export default Table;

