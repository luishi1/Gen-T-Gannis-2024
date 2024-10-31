// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import mascotaReducer from './reducers/mascotaReducer';

const store = configureStore({
  reducer: {
    mascotas: mascotaReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // redux-thunk está incluido por defecto
});

export default store;
