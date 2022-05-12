import * as api from '../api';

// Action Creators

export const getKal = (page) => async (dispatch) => {
    try {
        dispatch({ type: 'START' })
        const { data: { data, currentPage, numberOfPages } } = await api.fetchKal(page || 1);
        dispatch({ type: 'FETCH_KAL', payload: { Kal: data, currentPage, numberOfPages } });
        dispatch({ type: 'END' })

    } catch (error) {
        console.log(error);
    }
}
export const getKalBySearch = (searchKals) => async (dispatch) => {
    try {
        dispatch({ type: 'START' })
        const { data: { data } } = await api.fetchKalBySearch(searchKals);
        dispatch({ type: 'FETCH_KAL_BY_SEARCH', payload: { KalSearch: data } });
        dispatch({ type: 'END' })

    } catch (error) {
        console.log(error);
    }
}
export const getKalijs = (up) => async (dispatch) => {
    try {
        dispatch({ type: 'START' })
        const { data: { adminData: Kalijs, adminCurrentPage, adminNumberOfPages } } = await api.fetchKalijs(up || 1);
        dispatch({ type: 'FETCH_ALL', payload: { data: Kalijs, adminCurrentPage, adminNumberOfPages } })
        dispatch({ type: 'END' })
    } catch (error) {
        console.log(error.message);
    }
}
export const getKalij = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'START' })
        const { data } = await api.fetchKalij(id);
        dispatch({ type: 'FETCH_KALIJ', payload: { kalij: data } })
        dispatch({ type: 'END' })
    } catch (error) {
        console.log(error);
    }
}
export const createKalijing = (formData) => async (dispatch) => {
    try {
        dispatch({ type: 'START' })
        const { data: { data, message } } = await api.createKalijs(formData);
        dispatch({ type: 'CREATE', payload: { data, message } });
        dispatch({ type: 'END' });
        // navigate(`/food/${data._id}`);
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            dispatch({ type: 'START' })
            dispatch({ type: 'ERROR-KALIJ', payload: { errorKalij: error.response.data.message } })
            dispatch({ type: 'END' })
        } else {
            console.log(error.message);
        }
    }
}

export const updateKalij = (id, kalij) => async (dispatch) => {
    try {
        dispatch({ type: 'START' })
        const { data: { data, message } } = await api.updateKalij(id, kalij);
        dispatch({ type: 'UPDATE', payload: { data, message } })
        dispatch({ type: 'END' })
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            dispatch({ type: 'START' })
            dispatch({ type: 'ERROR-KALIJ', payload: { errorKalij: error.response.data.message } })
            dispatch({ type: 'END' })
        } else {
            console.log(error.message);
        }
    }
}

export const deleteKalij = (id) => async (dispatch) => {
    try {
        await api.deleteKalijs(id);
        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error);
    }
}

export const foodLike = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    try {
        const { data: { foodLike, message } } = await api.foodLike(id, user?.token);
        dispatch({ type: 'LIKE_FOOD', payload: { foodLike } });
        dispatch({ type: 'LIKE_FOOD_MESSAGE', payload: { message } });
    } catch (error) {
        console.log(error);
    }
};

export const commentFood = (value, id) => async (dispatch) => {
    try {
        const { data: { updatedCommentFood, message } } = await api.comment(value, id);

        dispatch({ type: 'COMMENT_FOOD', payload: { updatedCommentFood } });

        return updatedCommentFood.comments;
    } catch (error) {
        console.log(error.message);
    }
};