import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characterSlice";
import locationReducer from './locationSlice';
import episodeReducer from './episodeSlice';

export default configureStore({
    reducer: {
        characterStore: characterReducer,
        locationStore: locationReducer,
        episodeStore: episodeReducer,
    }
})