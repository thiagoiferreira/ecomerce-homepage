import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
    render(props) {
        const navbar = { backgroundColor: '#36B461' };

        return (
            <div style={{marginBottom:50, color:'white'}}>
                <Row>
                    <Col>
                        <Navbar style={{ backgroundColor: '#36B461' }} variant="dark">
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
                              <Nav className="mr-auto">
                              <Col md={2}>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                             </Col>
                             <Col md={2}>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                             </Col>
                             <Col md={2}>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                             </Col>
                                <Col md={{span:1, offset:11}}>
                                <Nav.Link>Cadastro</Nav.Link>
                                </Col>
                                <Col md={{span:2, offset:1}}>
                                <Nav.Link >Login</Nav.Link>
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