import React, { Component } from 'react';
import './Hero.css';
import image1 from '../../images/airplane.jpg';
import image2 from '../../images/Airport-Travel.jpeg';
import image3 from '../../images/passport.jpg';
import image4 from '../../images/sunset-plane.png';


class Hero extends Component {
  render() {
    return (
        <div className="jumbotron">
            <div className="container-fluid">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                    </ol>

                    <div className="carousel-inner " role="listbox">
                        <div className="item active">
                            <img className="carousel-images" src={image1} alt="..." />
                        </div>
                        <div className="item">
                            <img className="carousel-images" src={image2} alt="..." />
                        </div>                        
                        <div className="item">
                            <img src={image3} alt="..." />
                        </div>
                        <div className="item">
                            <img className="carousel-images" src={image4} alt="..." />
                        </div>
                     </div>
                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>    
    );
  }
}

export default Hero;
