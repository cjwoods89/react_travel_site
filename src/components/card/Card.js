import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
        <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
                <img src={this.props.image} alt={"Flag of " + this.props.location} />
                <div className="caption">
                    <h3>{this.props.location}</h3>
                    <p><a href={this.props.url}>{this.props.location} Tourism Site</a></p>
                </div>
            </div>
        </div>
    );
  }
}

export default Card;
