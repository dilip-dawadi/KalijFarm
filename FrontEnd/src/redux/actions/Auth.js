// this file help to get data from mongoodb
import { AUTH, VERIFY } from "../constants/actionTypes";
import * as api from '../api'

// dispatching is this whole action
export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        // once we get data fro api or backend we will dispatching
        dispatch({ type: AUTH, data });
        navigate('/');
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            dispatch({ type: 'ERROR-AUTH-SIGNIN', payload: { errorAuthSignIn: error.response.data.message } })
        } else {
            console.log(error.message);
        }
    }
}

export const signup = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data })
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            dispatch({ type: 'START' })
            dispatch({ type: 'ERROR-AUTH-SIGNUP', payload: { errorAuthSignUp: error.response.data.message } })
            dispatch({ type: 'END' })
        } else {
            console.log(error.message);
        }
    }
}

export const verify = (id, token, navigate) => async (dispatch) => {
    try {
        const { data } = await api.fetchVerified(id, token);
        console.log(data, 'data of verify');
        // once we get data fro api or backend we will dispatching
        dispatch({ type: VERIFY, payload: data })
        navigate('/')
    } catch (error) {
        if (error.response.status === 500) {
            dispatch({ type: 'ERROR-AUTH-VERIFY', payload: { errorAuthVerify: error.response.data.message } })
        } else {
            console.log(error.message);
        }
    }
}
