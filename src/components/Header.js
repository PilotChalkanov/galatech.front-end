import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Navbar, Nav, Container, Image, Button, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from '../actions/userActions'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const userName = userInfo["username"].split('@')[0]

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout)
    }
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
                            <Nav className="me-auto text-center">

                                <LinkContainer to='/'>
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/about'>
                                    <Nav.Link>About</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/'>
                                    <Nav.Link>Shop</Nav.Link>
                                </LinkContainer>

                                {/*<LinkContainer to='/cart'>*/}
                                {/*    <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>*/}
                                {/*</LinkContainer>*/}

                            </Nav>
                            <Nav>

                                <LinkContainer to='/cart'>
                                    <Button
                                        type={'button'}
                                        variant={'light'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 24 24"
                                             fill="grey" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round" className="feather feather-shopping-cart">
                                            <circle cx="9" cy="21" r="1"></circle>
                                            <circle cx="20" cy="21" r="1"></circle>
                                            <path
                                                d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                    </Button>
                                </LinkContainer>

                                <Button>
                                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                         viewBox="0 0 24 24"
                                         aria-labelledby="favouriteIconTitle" id="IconChangeColor"><title
                                        id="favouriteIconTitle">Favourite</title>
                                        <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041
                                    12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973
                                    18.6,15.1242507 13.45,19.7149864 L12,21 Z" id="mainIconPathAttribute"
                                              fill="#ffffff"></path>
                                    </svg>


                                </Button>
                                {userInfo ? (
                                    <NavDropdown
                                        menuVariant="dark"
                                        title={userName}
                                        id='username'>
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>
                                                Profile
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (<LinkContainer to='/login'>
                                    <Nav.Link><i className="fas fa-user"></i>Lоgin</Nav.Link>
                                </LinkContainer>)
                                }
                            </Nav>


                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </header>
        </div>
    );
}

export default Header;

