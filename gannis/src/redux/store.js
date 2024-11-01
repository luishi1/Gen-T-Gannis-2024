// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import mascotaReducer from './reducers/mascotaReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    mascotas: mascotaReducer,
    users: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // redux-thunk está incluido por defecto
});

export default store;
