import { createSlice } from "@reduxjs/toolkit";

export const episodeSlice = createSlice({
    name: 'episodeStore',
    initialState: {
        episodes: [],
        name: '',
        page: 1,
        count: 0,
    },
    reducers: {
        setEpisodes: (state, action) => {
            state.episodes = action.payload;
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
    }
});

export const { setEpisodes, setPage, setCount, setName } = episodeSlice.actions;

export default episodeSlice.reducer;