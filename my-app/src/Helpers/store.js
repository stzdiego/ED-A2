// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Importamos el reducer del contador

const store = configureStore({
    reducer: {
        counter: counterReducer, // Registramos el reducer en el store
    },
});

export default store;
