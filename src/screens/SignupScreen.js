import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useSearchParams} from 'react-router-dom'
import {Form, Button, Row, Col, FormControl} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from "../components/Loader"
import Message from "../components/Message"
import FormContainer from "../components/FormContainer"
import {signup} from '../actions/userActions'


function SignupScreen(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const redirect = searchParams.get('redirect') ? searchParams.get('redirect') : '/'

    const userSignup = useSelector(state => state.userSignup)
    const {error, loading, userInfo} = userSignup

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
        e.preventDefault()
        dispatch(signup(email, password))

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(signup(email, password, confirmPassword))
        }
    }

    return (
        <FormContainer>
            <h1> Sign Up </h1>
            {message && <Message variant={'danger'}>{message}</Message> }
            {error && <Message variant={'danger'}>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>
                        Email Address
                        <FormControl
                            required
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
                            required
                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></FormControl>
                    </Form.Label>
                </Form.Group>

                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>
                        Confirm Password
                        <FormControl
                            required
                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        ></FormControl>
                    </Form.Label>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Sign Up
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Already have an account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                    Sign In
                </Link>

                </Col>

            </Row>

        </FormContainer>
    );
}

export default SignupScreen;