import * as api from '../api';

// Action Creators

export const getRooms = (roomNo) => async (dispatch) => {
    try {
        dispatch({ type: 'START_ROOM' })
        const { data: { Roomdata: data, currentPage, numberOfPages } } = await api.fetchRooms(roomNo || 1);
        dispatch({ type: 'FETCH_ALL_ROOM', payload: { data, currentPage, numberOfPages } })
        dispatch({ type: 'END_ROOM' })
    } catch (error) {
        console.log(error.message);
    }
}
export const getRoomBySearch = (roomSearchD) => async (dispatch) => {
    try {
        dispatch({ type: 'START_ROOM' })
        console.log(roomSearchD, 'RoomSearch');
        const { data: { roomData: data, message } } = await api.fetchRoomBySearch(roomSearchD);
        console.log(data, 'data of search');
        dispatch({ type: 'FETCH_ROOM_BY_SEARCH', payload: { data } });
        dispatch({ type: 'END_ROOM' })

    } catch (error) {
        console.log(error);
    }
}
export const getRoom = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'START_ROOM' })
        const { data } = await api.fetchaRoom(id);
        dispatch({ type: 'FETCH_ROOM', payload: { Room: data } })
        dispatch({ type: 'END_ROOM' })
    } catch (error) {
        console.log(error);
    }
}
export const createRooms = (createaRoom) => async (dispatch) => {
    try {
        dispatch({ type: 'START_ROOM' })
        const { data: { data, message } } = await api.createaRoom(createaRoom);
        dispatch({ type: 'CREATE_ROOM', payload: { data, message } });
        dispatch({ type: 'END_ROOM' });
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            dispatch({ type: 'START_ROOM' })
            dispatch({ type: 'ERROR-ROOM', payload: { errorRoom: error.response.data.message } })
            dispatch({ type: 'END_ROOM' })
        } else {
            console.log(error.message);
        }
    }
}

export const updateRooms = (id, updateaRoom) => async (dispatch) => {
    try {
        dispatch({ type: 'START_ROOM' })
        const { data: { data, message } } = await api.updateaRoom(id, updateaRoom);
        dispatch({ type: 'UPDATE_ROOM', payload: { data, message } })
        dispatch({ type: 'END_ROOM' })
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            dispatch({ type: 'START_ROOM' })
            dispatch({ type: 'ERROR-ROOM', payload: { errorRoom: error.response.data.message } })
            dispatch({ type: 'END_ROOM' })
        } else {
            console.log(error.message);
        }
    }
}

export const deleteaRoom = (id) => async (dispatch) => {
    try {
        await api.deleteaRoom(id);
        dispatch({ type: 'DELETE_ROOM', payload: id })
    } catch (error) {
        console.log(error);
    }
}

export const roomBook = (booked) => async (dispatch) => {
    try {
        console.log(booked, 'booked');
        const { data: { message: data } } = await api.roomBook(booked);
        dispatch({ type: 'ROOM_BOOK', successBook: data })
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            dispatch({ type: 'ERROR_ROOM_BOOK', payload: { errorRoomBook: error.response.data.message } })
        } else {
            console.log(error.message);
        }
    }
}