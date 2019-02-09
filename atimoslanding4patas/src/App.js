import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import {Row, Col} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{}}>
        <Header />
        <Carousel/>
      </div>
    );
  }
}

export default App;
