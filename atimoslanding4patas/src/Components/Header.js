import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {
    render() {
    const navbar = {backgroundColor: '#36B461'};

        return (
            <div>
                <Navbar style={{backgroundColor:'#36B461'}} variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt="logo"
                            src={require("../logobranca.svg")}
                            width="320"
                            height="57"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default Header;