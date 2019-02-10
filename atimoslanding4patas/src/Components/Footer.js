import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        const navbar = { backgroundColor: '#36B461' };

        return (
            <div style={{marginBottom:50}}>
                <Row>
                    <Col>
                        <Navbar style={{ backgroundColor: '#36B461' }} variant="dark">
                        </Navbar>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;