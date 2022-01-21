export default (state= {isLoading:true, Kalijs:[]}, action) => {
    switch (action.type) {
        case 'START': 
        return {...state, isLoading: true};
        case 'END': 
        return  {...state, isLoading: false};
        case 'FETCH_ALL':
            return {
                ...state,
                Kalijs:action.payload}
            case 'FETCH_KALIJ':
            return {...state, kalij:action.payload.kalij};

        case 'CREATE':
            return {...state, Kalijs:[...state.Kalijs, action.payload]};
        case 'UPDATE':
            return {...state, Kalijs:state.Kalijs.map((kalij) => (kalij._id === action.payload._id ? action.payload : kalij))}
        // case 'LIKEPOST':
        //     return state.map((kalij) => (kalij._id === action.payload._id ? action.payload : kalij));    
        case 'DELETE':
            return {...state, Kalijs:state.Kalijs.filter((kalij) => kalij._id !== action.payload)}
        default:
            return state;
    }
}