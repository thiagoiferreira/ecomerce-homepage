import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, Row, Col } from 'react-bootstrap';
import './Component.css';

class Header extends React.Component {
    render(props) {
        const navbar = { backgroundColor: '#36B461' };

        return (
            <div style={{marginBottom:50, color:'white', fontStyle:'Nunito'}}>
                <Row>
                    <Col>
                        <Navbar style={{ backgroundColor: '#36B461' }} variant='dark'>
                            <Navbar.Brand href="#home">
                                <img
                                    alt="logo"
                                    src={require("../images/logobranca.svg")}
                                    width="320"
                                    height="57"
                                    className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                              <Nav  >
                              <Col md={{span:1, offset:10}} lg={{span:1, offset:10}} xl={{span:1, offset:9}} sm={{span:1, offset:11}}>
                                <NavDropdown title="Dropdown" >
                                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                             </Col>
                             <Col md={{span:1, offset:1}} lg={{span:1, offset:1}} xl={{span:1, offset:1}} sm={{span:1, offset:1}} >
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                             </Col>
                             <Col md={{span:1, offset:1}} lg={{span:1, offset:1}} xl={{span:1, offset:1}} sm={{span:1, offset:1}}>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                             </Col>
                                <Col md={{span:1, offset:11}} lg={{span:1, offset:12}} xl={{span:1, offset:12}} sm={{span:1, offset:11}} >
                                <Nav.Link style={{color:'white'}}>Cadastro</Nav.Link>
                                </Col>
                                <Col md={{span:2, offset:1}}>
                                <Nav.Link style={{color:'white'}} >Login</Nav.Link>
                                </Col>
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;