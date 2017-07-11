import React, { Component } from 'react';
import './Hero.css';
import image1 from '../../images/airplane.jpg';
import image2 from '../../images/Airport-Travel.jpeg';
import image3 from '../../images/passport.jpg';
import image4 from '../../images/sunset-plane.png';

import { Carousel} from 'react-bootstrap';

class Hero extends Component {
  render() {
    return (

        <Carousel>
            <Carousel.Item>
            <img alt="Side of Airplane" src={image1}/>
            </Carousel.Item>
            <Carousel.Item>
            <img alt="Inside Train Station" src={image2}/>
            </Carousel.Item>
            <Carousel.Item>
            <img alt="Passport on top of Map" src={image3}/>
            </Carousel.Item>
            <Carousel.Item>
            <img alt="Airplane taking off into the sunset" src={image4}/>
            </Carousel.Item>
        </Carousel>

      );
  }
}

export default Hero;
