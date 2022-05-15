import { configureStore } from "@reduxjs/toolkit";
import engineReducer from './reducer';

export const store = configureStore({
    reducer:{
        engine: engineReducer,
    },
})