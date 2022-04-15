export default (state = { isLoading: true, gallery: [] }, action) => {
    switch (action.type) {
        case 'START_GET_GALLERY':
            return { ...state, isLoading: true };
        case 'END_GET_GALLERY':
            return { ...state, isLoading: false };
        case 'FETCH_ALL_GALLERY':
            return { ...state, gallery: action.payload };
        case 'CREATE_GALLERY':
            return { ...state, gallery: [...state.gallery, action.payload] };
        case 'DELETE_GALLERY':
            return { ...state, gallery: state.gallery.filter((Gallery) => Gallery._id !== action.payload) }
        case 'UPDATE_GALLERY':
            return { ...state, gallery: state.gallery.map((Gallery) => (Gallery._id === action.payload._id ? action.payload : Gallery)) };
        default:
            return state;
    }
}