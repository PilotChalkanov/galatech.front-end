import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PhotoCarousel from '../components/PhotoCarousel'
import GoogleMap from '../components/GoogleMap'

function HomePage() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <PhotoCarousel />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{ backgroundColor: '#d9d9d9', height: '50vh' }}>
                            {/* content for container 2 */}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <GoogleMap />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;

