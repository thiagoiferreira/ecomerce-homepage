import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        const navbar = { backgroundColor: '#36B461' };

        return (
            <div style={{marginTop:50}}>
                <Row>
                    <Col>
                        <Navbar style={{ backgroundColor: '#999999' }} variant="dark">
                        <img
                                    alt="logo"
                                    src={require("../images/logoicone.svg")}
                                    width="auto"
                                    height="100"
                                    className="d-inline-block align-top"
                                />
                        </Navbar>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;