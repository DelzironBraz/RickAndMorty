import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name: "locationStore",
    initialState: {
        locations: [],
        page: 1,
        count: 0,
        name: '',
        type: '',
        dimension: ''
    },
    reducers: {
        setLocation: (state, action) => {
            state.locations = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setCount: (state, action) => {
            state.count = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        setDimension: (state, action) => {
            state.dimension = action.payload;
        }
    }
});

export const { setLocation, setPage, setCount, setName, setType, setDimension } = locationSlice.actions;

export default locationSlice.reducer;