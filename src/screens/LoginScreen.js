import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useSearchParams} from 'react-router-dom'
import {Form, Button, Row, Col, FormControl} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from "../components/Loader"
import Message from "../components/Message"
import FormContainer from "../components/FormContainer"
import {login} from '../actions/userActions'

function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const redirect = searchParams.get('redirect') ? searchParams.get('redirect') : '/'

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    /*
    prevents authenticated user to navigate to login page
    redirects to shop page
        * */
    useEffect(() => {
        if (userInfo) {
            console.log(redirect)
            navigate(`${redirect}`)
        }
    }, [navigate, userInfo, redirect])
    const submitHandler = (e) => {
        console.log(error)
        e.preventDefault()
        dispatch(login(email, password))
    }
    return (
        <FormContainer>
            <h1> Sign In </h1>
            {error && <Message variant={'danger'}>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>
                        Email Address
                        <FormControl
                            type='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></FormControl>
                    </Form.Label>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>
                        Password
                        <FormControl
                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></FormControl>
                    </Form.Label>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Don't have account? <Link to={redirect ? `/signup?redirect=${redirect}` : '/signup'}>
                    Sign Up
                </Link>

                </Col>

            </Row>
        </FormContainer>
    )
}

export default LoginScreen;