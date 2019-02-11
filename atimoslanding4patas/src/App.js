import React, { Component } from 'react';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Carousel from './Components/Carousel';
import {Row, Col, Container} from 'react-bootstrap';
import './App.css';
import Footer from './Components/Footer';
import HeaderNotice from './Components/HeaderNotice';
  
const cardImage1 = 'https://images-americanas.b2w.io/produtos/01/00/item/110636/6/110636641_1GG.jpg'
const cardImage2 = 'https://www.royalpets.com.br/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/a/r/arranhador_bigben_para_gatos.jpg';
const cardImage3 = 'https://www.petlove.com.br/images/products/195756/product/Brinquedo_Pet_Injet_Osso_Mass_Dental_Flex_Azul_1858199_1.jpg?1522759448'




class App extends Component {

state = {
  cardsTop: [
    { 
      cardtitle:'Ração Royal Canin Yorkshire',
      cardbody:'Apenas 49.90',
      cardImage: cardImage1,
      buttonText:'Comprar'
    },
    {
      cardtitle:'Arvore de Gato',
      cardbody: 'Apenas 300 bonoros',
      cardImage: cardImage2,
      buttonText:'Comprar',      
    },
    {
      cardtitle: 'Brinquedos de Cachorro',
      cardbody: 'A partir de R$9.90',
      cardImage: cardImage3,
      buttonText: 'Comprar',
    },

  ],
}
  render() {


    const cardsTop = (
      <Row>
            {this.state.cardsTop.map((cardsTop) => {
              return (
                <div className='cards'>
                      <Cards 
                        cardtitle={cardsTop.cardtitle} 
                        cardbody={cardsTop.cardbody}
                        cardImage={cardsTop.cardImage}
                        buttonText={cardsTop.buttonText}
                        key = {cardsTop.index}
                      />
                </div>
                )
            })}
      </Row>
      
    );



    return (
      <div className="App"  background-size="cover">
        <Header fixed='top'/>
        <div >
          <Row>
            <Col md='1'/>
            <Col md='10'>
            <Carousel/>
            </Col>
          </Row>
            <HeaderNotice dialogue='Boa Noite meu consagrado' span={6}/>
            {cardsTop}
            <HeaderNotice dialogue='Torne-se um Parceiro Quatro Patas' span={8}/>
            {cardsTop}
            <Row>
              <Col md={{span:8, offset:2}} style={{backgroundColor:'white', marginTop:30, borderStyle: 'groove', borderWidth:7}}>
              <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet lectus quis tortor venenatis vulputate et non turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel sem nunc. Nam vestibulum elit justo, ac scelerisque dolor vehicula et. Etiam tortor ante, vestibulum et viverra sit amet, facilisis vel erat. Aliquam at orci vitae orci auctor volutpat. Etiam ultricies lacus ex, eget aliquet purus pellentesque sed. Vestibulum tempus congue libero, venenatis eleifend ipsum ultricies sed. Nullam bibendum, massa ullamcorper tristique cursus, massa eros egestas ex, eget hendrerit justo nunc a nibh.</p>
              </Col>
            </Row>
          <Footer fixed='bottom'></Footer>
        </div>
      </div>      
    );
  }
}

export default App;
