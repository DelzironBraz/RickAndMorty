import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characterSlice";
import locationReducer from './locationSlice';

export default configureStore({
    reducer: {
        characterStore: characterReducer,
        locationStore: locationReducer,
    }
})