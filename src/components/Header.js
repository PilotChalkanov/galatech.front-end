import React from 'react';
import {Navbar, Nav, Container, Image} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Header(props) {
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                    <Container>
                        <LinkContainer to='/'>
                            <Image src="../galatech_logo_transp.png" className="me-2 logo-main"></Image>
                        </LinkContainer>

                        <LinkContainer to='/'>
                            <Navbar.Brand href="/">Gala<span>Tech</span> </Navbar.Brand>
                        </LinkContainer>

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">

                                <LinkContainer to='/'>
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/about'>
                                    <Nav.Link>About</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/'>
                                    <Nav.Link>Shop</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/cart'>
                                    <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/login'>
                                    <Nav.Link><i className="fas fa-user"></i>Lоgin</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </header>
        </div>
    );
}

export default Header;

