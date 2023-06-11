import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PhotoCarousel from '../components/PhotoCarousel'
import GoogleMap from '../components/GoogleMap'
import TypeWriter from '../components/TypeWriter'

function HomePage() {
    return (
        <div>
            <Container fluid>
                <Row className="mt-3">
                    <Col className="main-container">
                        <PhotoCarousel />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="main-container">
                        <div style={{ height: '50vh' }}>
                            <TypeWriter />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="main-container">
                        <GoogleMap />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;

