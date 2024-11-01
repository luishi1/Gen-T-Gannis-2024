
import { combineReducers } from 'redux';
import mascotaReducer from './mascotaReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    mascota: mascotaReducer,
    user: userReducer
    // otros reducers...
});

export default rootReducer;
