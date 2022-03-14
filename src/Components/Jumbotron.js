import React from 'react';
import {Jumbotron, Button, Col, Row} from 'react-bootstrap';

const jumbotron = (props) => {
return (      
    <Jumbotron style={{marginTop:30}}>
        <Row style={{border:'groove',borderColor:'#999999', borderWidth:5}}>
        <Col md={{span:8, offset:1}} >
        <h1>Hello, world!</h1>
        <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet lectus quis tortor venenatis vulputate et non turpis. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel sem nunc. 
            Nam vestibulum elit justo, ac scelerisque dolor vehicula et.
</p>
        </Col >
        <Col md={{span:2}}>
        <p>
        <Button style={{marginTop:60, backgroundColor: '#333333'}} >Junte-se a nós</Button>
        </p>
        </Col>
        <Col md={{span:1}} style={{ marginRight:10}}/>
        </Row>
      </Jumbotron>        
    );
}
export default jumbotron;