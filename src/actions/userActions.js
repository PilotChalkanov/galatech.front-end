import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL
} from "../constants/userConstants"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.post(
            '/auth_app/users/login/',
            {'email': email, 'password': password},
            config
        )
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        console.log(error.response)
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data
                    ? error.response.data.error
                    : error.response.data.error,
        })
    }
}

export const logout = (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
}


export const signup = (email, password, password2) => async (dispatch) => {
    try {
        dispatch({
            type: USER_SIGNUP_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.post(
            '/auth_app/users/signup/',
            {'email': email, 'password': password, 'password2': password2},
            config
        )
        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.response && error.response.data.password
                ? error.response.data.password
                : error.response.data.error,
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.get(
            `/auth_app/users/${id}/`,
            {},
            config
        )
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.password
                ? error.response.data.password
                : error.response.data.error,
        })
    }
}