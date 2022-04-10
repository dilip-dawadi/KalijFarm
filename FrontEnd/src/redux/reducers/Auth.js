import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, };
    case actionType.PLAY:
      return { ...state, successAuthplay: action.data };
    case actionType.LOGOUT:
      localStorage.removeItem('profile')
      localStorage.removeItem('cart')
      return { ...state, authData: null };
    case actionType.VERIFY:
      return { ...state, Verify: action.payload };
    case 'ERROR-AUTH-SIGNUP':
      return { ...state, errorAuthSignUp: action.payload.errorAuthSignUp };
    case 'ERROR-AUTH-SIGNIN':
      return { ...state, errorAuthSignIn: action.payload.errorAuthSignIn };
    case 'ERROR-AUTH-PLAY':
      return { ...state, errorAuthPlay: action.payload.errorAuthPlay };
    default:
      return state;
  }
};

export default authReducer;