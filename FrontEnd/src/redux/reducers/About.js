export default (abouts= [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_ABOUT':
            return action.payload;
        case 'CREATE_ABOUT':
            return [...abouts, action.payload];
        case 'DELETE_ABOUT':
            return abouts.filter((About) => About._id !== action.payload);
            case 'UPDATE':
                return abouts.map((About) => (About._id === action.payload._id ? action.payload : About));
        default:
            return abouts;
    }
}