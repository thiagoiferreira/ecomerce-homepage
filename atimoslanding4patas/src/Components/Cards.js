import React from 'react';
import {Card, Button} from 'react-bootstrap';

const cards = (props) => {

      return (
        <Card style={{ width: '18rem', marginTop:'20', backgroundColor:'#efefef', height:430 }}>
          <Card.Img variant="top" src={props.cardImage} style={{height:250, width:'auto', marginTop:15}} />
          <Card.Body>
            <Card.Title>{props.cardtitle}</Card.Title>
            <Card.Text>
                {props.cardbody}
            </Card.Text>
            <Button variant="primary" style={{backgroundColor:'#137030'}}>{props.buttonText}</Button>
          </Card.Body>
        </Card>
      );
    }
export default cards;