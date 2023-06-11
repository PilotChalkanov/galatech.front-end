import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card, Form, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import SideMenu from '../components/SideMenu'
import {listProductDetails} from '../actions/productActions'


function ProductScreen() {
    const categories = ['Category 1', 'Category 2', 'Category 3'];

    const [qty, setQty] = useState(1);
    const params = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

    useEffect(() => {
        dispatch(listProductDetails(params.id))

    }, [dispatch, params])

    const addToCartHandler = () => {
        navigate(`/cart/${params.id}?qty=${qty}`)
    }
    return (

        <div>
            <Row>
                <SideMenu categories={categories} />
            </Row>
            <Link to='/' className='btn btn-dark my-3'>Go Back</Link>
            {loading ?
                <Loader/>
                : error
                    ? <Message variant='danger'>{error}</Message>
                    :
                    (
                        <Row>
                            <Col md={6}>
                                <Image src={product.image} alt={product.name} fluid/>
                            </Col>

                            <Col md={3}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h3>{product.name}</h3>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`}
                                                color={'#f8e825'}/>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        Price: {product.price} leva
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <p>{product.description}</p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={3}>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col>
                                                <strong>
                                                    ${product.price}
                                                </strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>
                                                <strong>
                                                    {product.countInStock > 0 ? 'In Stock' : 'Out fo Stock'}
                                                </strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Select Qty</Col>
                                                <Col xs='auto' className='my-1'>
                                                    <Form.Control
                                                        as="select"
                                                        value={qty}
                                                        onChange={(e) => setQty(e.target.value)}>
                                                        {
                                                            [...Array(product.countInStock).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))
                                                        }
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}

                                    <ListGroup.Item>
                                        <Button
                                            onClick={addToCartHandler}
                                            className='btn-block'
                                            disabled={product.countInStock === 0}
                                            type='button'>
                                            <i className='fa fa-shopping-cart'></i>
                                            Add to Cart
                                        </Button>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button
                                            onClick={addToCartHandler}
                                            className='btn-block'
                                            type='button'
                                            variant={'light'}>
                                            <i className='fa fa-heart'></i>
                                            Add Wishlist
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    )
            }


        </div>
    );
}

export default ProductScreen;