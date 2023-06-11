import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Footer(props) {
    return (
        <div>
            <footer>
                <Container>
                    <Row className="text-center py-3">
                        <Col>
                            <a href="https://www.facebook.com/profile.php?id=100071277770872" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </Col>
                        {/*<Col>*/}
                        {/*    <a href="https://www.youtube.com/channel/your-channel" target="_blank" rel="noopener noreferrer">*/}
                        {/*        <i className="fab fa-youtube"></i>*/}
                        {/*    </a>*/}
                        {/*</Col>*/}
                    </Row>
                    <Row>
                        <Col className="text-center py-3">Copyright &copy; GalaTechTurbo</Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;