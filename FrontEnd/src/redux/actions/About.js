import * as api from '../api';

// Action Creators

export const getAbouts = () => async (dispatch) => {
    try {
        dispatch({ type: 'START-GETABOUT' })
        const { data } = await api.fetchAbouts();
        dispatch({ type: 'FETCH_ALL_ABOUT', payload: data })
        dispatch({ type: 'END-GETABOUT' })
    } catch (error) {
        console.log(error);
    }
}

export const createAbout = (about) => async (dispatch) => {
    try {
        const { data } = await api.createAbout(about);
        dispatch({ type: 'CREATE_ABOUT', payload: data })
    } catch (error) {
        console.log(error);
    }
}
export const deleteAbout = (id) => async (dispatch) => {
    try {
        await api.deleteAbouts(id);
        dispatch({ type: 'DELETE_ABOUT', payload: id })
        console.log('delete About');
    } catch (error) {
        console.log(error);
    }
}
export const updateAbout = (id, About) => async (dispatch) => {
    try {
        const { data } = await api.updateAbout(id, About);
        dispatch({ type: 'UPDATE_ABOUT', payload: data })
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}