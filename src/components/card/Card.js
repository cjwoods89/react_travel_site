import React, { Component } from 'react';
import './Card.css';

import { Col, Thumbnail} from 'react-bootstrap';

class Card extends Component {
  render() {
    return (
        
        <Col xs={8} xsOffset={2} sm={6} smOffset={0} md={3} mdOffset={0}>
            <Thumbnail src={this.props.image} alt={"Flag of" + this.props.location} >
                <h3>{this.props.location}</h3>
                <p><a href={this.props.url}>{this.props.location} Tourism Site</a></p>
            </Thumbnail>
        </Col>
    
    );
  }
}

export default Card;
