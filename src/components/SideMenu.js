import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const SideMenu = ({ categories }) => {
    return (
        <Container fluid>
            <Row>
                <Col sm={3}>
                    <Nav className="flex-column">
                        {categories.map((category, index) => (
                            <Nav.Item key={index}>
                                <Nav.Link href={`#${category}`}>{category}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Row>
                        {categories.map((category, index) => (
                            <Col key={index} id={category}>
                                <h2>{category}</h2>
                                <p>Products in this category go here.</p>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default SideMenu;