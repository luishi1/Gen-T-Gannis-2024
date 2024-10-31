
import { combineReducers } from 'redux';
import mascotaReducer from './mascotaReducer';

const rootReducer = combineReducers({
    mascota: mascotaReducer,
    // otros reducers...
});

export default rootReducer;
