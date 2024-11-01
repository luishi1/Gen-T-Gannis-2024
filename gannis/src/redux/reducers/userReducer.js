// src/redux/reducers/userReducer.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/userActions';


const initialState = {
    loading: false,
    users: [],
    error: null,
    token: null,
    email: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, token: action.payload,  email: action.email, error: null };
        case LOGIN_FAILURE:
            return { ...state, error: action.payload };
        case LOGOUT:
            return { ...initialState }
        default:
            return state;
    }
};

export default userReducer;