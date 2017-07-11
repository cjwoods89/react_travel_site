import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Intro from './components/intro/Intro';
import Card from './components/card/Card';
import TravelTable from './components/travelTable/travelTable';
import Footer from './components/footer/Footer';

import { Grid, Row} from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

import card1 from './images/aruba_flag.svg';
import card2 from './images/chile_flag.svg';
import card3 from './images/italy_flag.svg';
import card4 from './images/spain_flag.svg';

const title = (
  <h1>Some information about the places I would like to visit</h1>
);

class App extends Component {
  render() {
    return (
      <div className="App">
           <Navigation />
           <Hero />
           <Intro />
            <Grid>
              <Row className="show-grid">
                <Card image={card1} location="Spain" url="http://www.spain.info/en_US/"/>
                <Card image={card2} location="Italy" url="http://www.italia.it/en/home.html"/>
                <Card image={card3} location="Aruba" url="http://www.arubatourism.com/"/>
                <Card image={card4} location="Chile" url="http://chile.travel/en/"/>
              </Row>
            </Grid>
          <div>
            <Panel header={title}>
              <Table hover>
                <thead>
                  <tr>
                    <th>Destination</th>
                    <th>Capital</th>
                    <th>Official Language</th>
                    <th>Population (approx.)</th>
                    <th>National Bird</th>
                  </tr>
                </thead>
                <tbody>
                  <TravelTable destination="Spain" capitol="Madrid" offLanguage="Spanish" population="46.77 million" natBird="Eagle"/>
                  <TravelTable destination="Italy" capitol="Rome" offLanguage="Italian" population="59.83 million" natBird="Bluebirds"/>
                  <TravelTable destination="Aruba" capitol="Oranjestad" offLanguage="Dutch" population="102,911" natBird="Aruban Burrowing Owl"/>
                  <TravelTable destination="Chile" capitol="Santiago" offLanguage="Spanish" population="17.62 million" natBird="Andean Condor"/>
                </tbody>
              </Table>
            </Panel>
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
