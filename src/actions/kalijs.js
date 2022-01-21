import * as api from '../api';

// Action Creators

export const getKalijs = () => async (dispatch) => {
    try {
        dispatch( {type: 'START'})
        const {data} = await api.fetchKalijs();
        console.log('data ', data)
        dispatch( {type: 'FETCH_ALL', payload: data})
        dispatch( {type: 'END'})
    } catch (error) {
        console.log(error);
    }
}
export const getKalij = (id) => async (dispatch) => {
    try {
        dispatch( {type: 'START'})
        const {data} = await api.fetchKalij(id);
        dispatch( {type: 'FETCH_KALIJ', payload: { kalij: data  }})
        console.log('data of Post', data)
        dispatch( {type: 'END'})
    } catch (error) {
        console.log(error);
    }
}
export const createKalij = (kalij) => async (dispatch) => {
    try {
        dispatch( {type: 'START'})
        const {data} = await api.createKalijs(kalij);
        dispatch( {type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updateKalij = (id, kalij) => async (dispatch) => {
    try {
        const { data } = await api.updateKalij(id, kalij);
        dispatch( {type: 'UPDATE', payload: data})
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const deleteKalij = (id) => async (dispatch) => {
    try {
       await api.deleteKalijs(id);
       dispatch( {type: 'DELETE', payload:id})
    } catch (error) {
        console.log(error);
    }
}

export const likeKalij = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'))
    try {
        const { data } = await api.likeKalijs(id, user?.token);
        dispatch( {type: 'LIKEPOST', payload: data});

    } catch (error) {
        console.log(error);
    }
}