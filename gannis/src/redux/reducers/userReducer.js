// src/redux/reducers/userReducer.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/userActions';
import Cookies from 'js-cookie';

const initialState = {
    error: null,
    token: Cookies.get('token') || null,
    email: Cookies.get('email') || null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            Cookies.set('token', action.payload);
            Cookies.set('email', action.email);
            return { 
                ...state, 
                token: action.payload, 
                email: action.email, 
                error: null 
            };
        case REGISTER_FAILURE:
            return { 
                ...state, 
                error: action.payload 
            };
        case LOGIN_SUCCESS:
            Cookies.set('token', action.token);
            Cookies.set('email', action.email);
            return { 
                ...state, 
                token: action.payload,  
                email: action.email, 
                error: null 
            };
        case LOGIN_FAILURE:
            return { 
                ...state, 
                error: action.payload 
            };
        case LOGOUT:
            Cookies.remove('token');
            Cookies.remove('email');
            return { ...initialState }
        default:
            return state;
    }
};

export default userReducer;