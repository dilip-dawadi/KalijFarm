// this file help to get data from mongoodb
import { AUTH } from "../constants/actionTypes";
import * as api from '../api/index.js'

// dispatching is this whole action
export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        // once we get data fro api or backend we will dispatching
        dispatch({type: AUTH, data})

        navigate('/')
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        // once we get data fro api or backend we will dispatching
        dispatch({type: AUTH, data})
        navigate('/')
    } catch (error) {
        console.log(error.message);
    }
}
