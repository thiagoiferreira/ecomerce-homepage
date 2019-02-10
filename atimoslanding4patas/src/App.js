import React, { Component } from 'react';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Carousel from './Components/Carousel';
import {Row, Col, Container} from 'react-bootstrap';
import './App.css';
import Footer from './Components/Footer';
  
const cardImage1 = 'https://images-americanas.b2w.io/produtos/01/00/item/110636/6/110636641_1GG.jpg'
const cardImage2 = 'https://www.royalpets.com.br/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/a/r/arranhador_bigben_para_gatos.jpg';
const cardImage3 = 'https://www.petlove.com.br/images/products/195756/product/Brinquedo_Pet_Injet_Osso_Mass_Dental_Flex_Azul_1858199_1.jpg?1522759448'

class App extends Component {
  render() {
    return (
      <div className="App"  background-size="cover">
      <Header fixed='top'/>      
      <Row>
        <Col md='1'/>
        <Col md='10'>
        <Carousel/>
        </Col>
      </Row>
      <Row>
          <Col md='3'/>
          <Col md='6' className='retText'>
          {/* <p>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum.
            </h3>
          </p> */}
          <Header/>
          </Col>
      </Row>
      <Row>
        <Col md='1'/>
        <Col>
          <Cards cardImage={cardImage1}
          cardtitle='Ração Royal Canin Yorkshire'
          buttonText='Comprar'
          cardbody='Apenas 49.90'>
          </Cards>
        </Col>
        <Col>
          <Cards cardImage={cardImage2}
          cardtitle='Arvore de Gato'
          buttonText='Comprar'
          cardbody='Apenas 300 bonoros'>
          </Cards>
        </Col>
        <Col>
          <Cards cardImage={cardImage3}
          cardtitle='Brinquedos de Cachorro'
          buttonText='Comprar'
          cardbody='Apenas 9.90'>
          </Cards>
          {/* fix the cards using a list, make them show up with a for */}
        </Col>
      </Row>
      <Footer fixed='bottom'></Footer>
      </div>
    );
  }
}

export default App;
