import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Intro from './components/intro/Intro';
import Card from './components/card/Card';
import Table from './components/table/Table';
import Footer from './components/footer/Footer';

import card1 from './images/aruba_flag.svg';
import card2 from './images/chile_flag.svg';
import card3 from './images/italy_flag.svg';
import card4 from './images/spain_flag.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
           <Navigation />
           <Hero />
           <Intro />
           <div className="row">
              <Card image={card1} location="Spain" url="http://www.spain.info/en_US/"/>
              <Card image={card2} location="Italy" url="http://www.italia.it/en/home.html"/>
              <Card image={card3} location="Aruba" url="http://www.arubatourism.com/"/>
              <Card image={card4} location="Chile" url="http://chile.travel/en/"/>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading tableHeading"><h3><strong>Some information about the places I would like to visit</strong></h3></div>
            <table className="table table-hover">
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
                <Table destination="Spain" capitol="Madrid" offLanguage="Spanish" population="46.77 million" natBird="Eagle"/>
                <Table destination="Italy" capitol="Rome" offLanguage="Italian" population="59.83 million" natBird="Bluebirds"/>
                <Table destination="Aruba" capitol="Oranjestad" offLanguage="Dutch" population="102,911" natBird="Aruban Burrowing Owl"/>
                <Table destination="Chile" capitol="Santiago" offLanguage="Spanish" population="17.62 million" natBird="Andean Condor"/>
              </tbody>
            </table>
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
