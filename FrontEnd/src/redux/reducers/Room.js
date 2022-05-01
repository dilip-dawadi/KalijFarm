export default (state = { isLoading: true, Rooms: [] }, action) => {
    switch (action.type) {
        case 'START_ROOM':
            return { ...state, isLoading: true };
        case 'END_ROOM':
            return { ...state, isLoading: false };
        case 'FETCH_ALL_ROOM':
            return {
                ...state,
                Rooms: action.payload.data,
                adminCurrentPage: action.payload.currentPage,
                adminNumberOfPages: action.payload.numberOfPages,
            }
        case 'FETCH_ROOM_BY_SEARCH':
            return {
                ...state, Rooms: action.payload.data
            };
        case 'FETCH_ROOM':
            return { ...state, Room: action.payload.Room };
        case 'ERROR-ROOM':
            return { ...state, errorRoom: action.payload.errorRoom };
        case 'CREATE_ROOM':
            return { ...state, Rooms: [...state.Rooms, action.payload.data], createMsg: action.payload.message };
        case 'UPDATE_ROOM':
            return { ...state, Rooms: state.Rooms.map((Room) => (Room._id === action.payload._id ? action.payload : Room)), updateMsg: action.payload.message };
        case 'DELETE_ROOM':
            return { ...state, Rooms: state.Rooms?.filter((Room) => Room._id !== action.payload) }
        case 'ROOM_BOOK':
            return { ...state, RoomBook: action.successBook };
        case 'LIKE_ROOM':
            return { ...state, Rooms: state.Rooms.map((Room) => (Room._id === action.payload.roomLike._id ? action.payload.roomLike : Room)) };
        case 'LIKE_ROOM_MESSAGE':
            return { ...state, likeRoomMessage: action.payload.message };
        case 'ERROR_ROOM_BOOK':
            return { ...state, errorRoomBook: action.payload.errorRoomBook };
        default:
            return state;
    }
}