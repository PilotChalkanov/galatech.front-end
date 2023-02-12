import React, {useEffect} from 'react';
import {Link, useNavigate, useParams, useSearchParams} from 'react-router-dom';
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart,removeFromCart} from '../actions/cartActions'
import {useDispatch, useSelector} from "react-redux";

function CartScreen() {
    const params = useParams();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const productId = params.id;
    const qty = Number(searchParams.get('qty'));

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    // console.log('cartItems', cartItems)

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () =>{
        navigate('/login?redirect=shipping')
    }

    return (
        <Row className={'text-center'}>
            <Col md={10}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                        <Message variant={'info'}>
                            Cart is empty <Link to='/'>Go Back</Link>
                        </Message>
                    ) :
                    (
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Link to={`/product/${item.product.id}`}>
                                                <Image src={item.product.image}/>
                                            </Link>
                                        </Col>

                                        <Col md={3}>
                                            <Link to={`/product/${item.product.id}`}>
                                                {item.product.name}
                                            </Link>
                                        </Col>
                                        <Col md={2}>
                                            {item.product.price} leva
                                        </Col>
                                        <Col md={2}>
                                            {item.product.qty}
                                        </Col>
                                        <Col md={1}>
                                            {(item.product.qty * item.product.price).toFixed(2)}
                                        </Col>
                                        <Col md={1}>
                                            <Form.Control
                                                as="select"
                                                value={item.product.qty}
                                                onChange={(e) => dispatch(addToCart(item.product.id, Number(e.target.value)))}>
                                                {
                                                    [...Array(item.product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Col md={1}>
                                            <Button
                                                type={'button'}
                                                variant={'danger'}
                                                className={'remove-btn'}
                                                onClick={() => removeFromCartHandler(item.product.id)}>
                                                <i className='fas fa-trash'>
                                                </i>
                                            </Button>
                                        </Col>

                                    </Row>
                                </ListGroup.Item>
                            ))}

                        </ListGroup>

                    )}
            </Col>

            <Col md={10}>
                <Row>
                    <Col md={7} className={'text-lg-end'}>
                        <h3>Subtotal items</h3>
                    </Col>
                    <Col md={2}>
                        <h3>{cartItems.reduce((acc, item) => acc + Number(item.product.qty), 0)}</h3>
                    </Col>
                    <Col md={1}>
                        <h3>{cartItems.reduce((acc, item) => acc + Number(item.product.qty) * (item.product.price), 0).toFixed(2)}</h3>
                    </Col>
                    <Col md={1}>
                        <h3>lv.</h3>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>

                    </Col>
                    <Col md={3}>
                        <Button
                            type={'button'}
                            className={'btn-block'}
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}>
                            Proceed to CheckOut
                        </Button>
                    </Col>
                </Row>

            </Col>


        </Row>


    );
}

export default CartScreen;
