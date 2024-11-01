import axios from 'axios';

export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const CREATE_FAILURE = 'CREATE_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

/* export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_MASCOTAS_REQUEST' });
        try {
            const response = await axios.get('http://localhost:8081/api/mascotas');
            dispatch({ type: 'FETCH_MASCOTAS_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_MASCOTAS_FAILURE', payload: error.message });
        }
    };
}; */

export const login = (mail, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:8081/api/login", { mail, password });
            console.log("response.data: " + response.data)
            dispatch({ type: LOGIN_SUCCESS, payload: response.data.token, email: response.data.email });
            return Promise.resolve();
        } catch(error) {
            dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
            return Promise.reject(error.response.data.message);
        }
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT });
    };
};

export const createUser = () => {
    
}