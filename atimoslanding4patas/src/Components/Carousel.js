import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row} from 'react-bootstrap';
import './Component.css';


class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      border: true,


    };
    return (
    <Row >
        <Col md={2}/>
        <Col md={8} >
      <Slider {...settings}>
        <div>
          <img className='imageCarousel' src={'https://marketplace.canva.com/MACcZEIyEHs/2/0/thumbnail_large/canva-teal-green-cute-puppy-paw-adopt-dog-facebook-cover-MACcZEIyEHs.jpg'}></img>
        </div>
        <div>
        <img className='imageCarousel' src={'https://s2.glbimg.com/xibvfR6_qN9i2qb0uMwe29rSW2Q=/940x490/e.glbimg.com/og/ed/f/original/2018/03/26/pexels-photo-374906.jpeg'}></img>
        </div>
        <div>
          <h3><img className='imageCarousel' src={'https://i.kym-cdn.com/entries/icons/original/000/022/139/CFkPNBTgNNABqac-1600x900-noPad.jpg'}/></h3>
        </div>
      </Slider>
      </Col>
      </Row>
    );
  }
}
export default Carousel;
