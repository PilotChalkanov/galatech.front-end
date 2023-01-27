import React from 'react';
import {Row, Col} from 'react-bootstrap';
import products from '../products'
import Product from'../components/Product';

function HomeScreen(props) {
    return (
        <div>
            <h1>Продукти</h1>
            <Row>
                {products.map(p => (
                    <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={p} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default HomeScreen;