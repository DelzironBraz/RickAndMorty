import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
    name: "characterStore",
    initialState: {
        characters: [],
        page: 1,
        count: 0,
        name: '',
        species: '',
        gender: '',
        status: ''
    },
    reducers: {
        setCharacters: (state, action) => {
            state.characters = action.payload;
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
        setSpecies: (state, action) => {
            state.species = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        }
    }
});

export const { setCharacters, setPage, setCount, setName, setSpecies, setGender, setStatus } = characterSlice.actions;

export default characterSlice.reducer