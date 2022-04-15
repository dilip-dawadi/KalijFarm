import * as api from '../api';

// Action Creators

export const getGalleries = () => async (dispatch) => {
    try {
        dispatch({ type: 'START_GET_GALLERY' })
        const { data } = await api.fetchGalleries();
        dispatch({ type: 'FETCH_ALL_GALLERY', payload: data })
        dispatch({ type: 'END_GET_GALLERY' })
    } catch (error) {
        console.log(error);
    }
}

export const createaGallery = (gallery) => async (dispatch) => {
    try {
        const { data } = await api.createaGallery(gallery);
        dispatch({ type: 'CREATE_GALLERY', payload: data })
    } catch (error) {
        console.log(error);
    }
}
export const deleteaGallery = (id) => async (dispatch) => {
    try {
        await api.deleteaGallery(id);
        dispatch({ type: 'DELETE_GALLERY', payload: id })
        console.log('Delete Gallery');
    } catch (error) {
        console.log(error);
    }
}
export const updateaGallery = (id, gallery) => async (dispatch) => {
    try {
        const { data } = await api.updateaGallery(id, gallery);
        dispatch({ type: 'UPDATE_GALLERY', payload: data })
    } catch (error) {
        console.log(error);
    }
}