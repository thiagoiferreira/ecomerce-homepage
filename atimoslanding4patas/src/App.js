import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import {Row, Col, Container} from 'react-bootstrap';
import './App.css';
import wallpaper from './images/greenwallpaper.png'
import Footer from './Components/Footer';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + wallpaper + ")"};
  

class App extends Component {
  render() {
    return (
      <div className="App" style = {sectionStyle} background-size="cover">
      <Header />      
      <Row>
        <Col md='1'></Col>
        <Col md='10' style={{backgroundColor:'white'}}>
        <Carousel/>
        </Col>
      </Row>
      </div>
    );
  }
}

export default App;
