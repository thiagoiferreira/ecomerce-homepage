import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <div style={{marginTop:50, borderTop:'groove', borderColor:'#137030'}}>
                <Navbar style={{ backgroundColor: '#999999' }} variant="dark">    
                    <Row>
                        <Col>
                            <img style={{marginTop:15, marginRight:40, marginLeft:20, marginBottom:15}}
                                alt="logo"
                                src={require("../images/logobranca.svg")}
                                width="auto"
                                height="60"
                                className="d-inline-block align-top"
                              />
                            </Col>
                    </Row>

                        <Col md={{offset:1, span:8}} >
                        <img src = {require("../images/Ativo-19.svg")}
                        width='auto'
                        height='20'
                        />
                        <h6 style={{color:'white'}}>Tecnologias para uma vida melhor. © 2018</h6>                        
                        </Col>
                </Navbar>
                    
            </div>
        );
    }
}

export default Footer;