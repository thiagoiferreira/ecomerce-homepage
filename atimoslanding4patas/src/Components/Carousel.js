import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Container, Image} from 'react-bootstrap';
import './Component.css';
import doggo from '../images/doggo.png';
import catto from '../images/catto.png';
import dog2 from '../images/dog2.png';


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
      <Slider {...settings} className='slider'>
        <div>
          <Image rounded fluid className='imageCarousel'  src={doggo} />
        </div>
        <div>
        <Image rounded fluid className='imageCarousel' src={catto}/>
        </div>
        <div>
          <Image  rounded fluid className='imageCarousel' src={dog2}/>
        </div>
      </Slider>
    );
  }
}
export default Carousel;
