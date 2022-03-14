import React from 'react';
import {Col, Row} from 'react-bootstrap';

const headerNotice = (props) => {
    return(
      <Row>
        <Col md={{offset:(12-props.span)/2,span:props.span}} className='retText'>
          <h1 className='header'>{props.dialogue}</h1>
        </Col>
      </Row>
    );
}
export default headerNotice;