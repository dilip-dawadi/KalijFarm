export default (state = { isLoading: true, abouts: [] }, action) => {
    switch (action.type) {
        case 'START-GETABOUT':
            return { ...state, isLoading: true };
        case 'END-GETABOUT':
            return { ...state, isLoading: false };
        case 'FETCH_ALL_ABOUT':
            return { ...state, abouts: action.payload };
        case 'CREATE_ABOUT':
            return { ...state, abouts: [...state.abouts, action.payload] };
        case 'DELETE_ABOUT':
            return { ...state, abouts: state.abouts.filter((About) => About._id !== action.payload) }
        case 'UPDATE':
            return { ...state, abouts: state.abouts.map((About) => (About._id === action.payload._id ? action.payload : About)) };
        default:
            return state;
    }
}