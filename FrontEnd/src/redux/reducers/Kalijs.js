export default (state = { isLoading: true, Kalijs: [] }, action) => {
    switch (action.type) {
        case 'START':
            return { ...state, isLoading: true };
        case 'END':
            return { ...state, isLoading: false };
        case 'FETCH_ALL':
            return {
                ...state,
                Kalijs: action.payload.data,
                adminCurrentPage: action.payload.adminCurrentPage,
                adminNumberOfPages: action.payload.adminNumberOfPages,
            }
        case 'FETCH_KAL':
            return {
                ...state,
                Kal: action.payload.Kal,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            }
        case 'FETCH_KAL_BY_SEARCH':
            return {
                ...state, Kal: action.payload.KalSearch
            };
        case 'FETCH_KALIJ':
            return { ...state, kalij: action.payload.kalij };
        case 'ERROR-KALIJ':
            return { ...state, errorKalij: action.payload.errorKalij };
        case 'CREATE':
            return { ...state, Kalijs: [...state.Kalijs, action.payload.data], createMsg: action.payload.message };
        case 'UPDATE':
            return { ...state, Kalijs: state.Kalijs.map((kalij) => (kalij._id === action.payload._id ? action.payload : kalij)), updateMsg: action.payload.message };
        case 'LIKE_FOOD':
            return { ...state, Kal: state.Kal.map((kalij) => (kalij._id === action.payload.foodLike._id ? action.payload.foodLike : kalij)) };
        case 'COMMENT_FOOD':
            return {
                ...state,
                Kal: state.Kal.map((kalij) => {
                    if (kalij._id === action.payload.updatedCommentFood._id) {
                        return action.payload.updatedCommentFood;
                    }
                    return kalij;
                }),
            };
        case 'LIKE_FOOD_MESSAGE':
            return { ...state, likeFoodMessage: action.payload.message };
        case 'DELETE':
            return { ...state, Kalijs: state.Kalijs?.filter((kalij) => kalij._id !== action.payload) }
        default:
            return state;
    }
}