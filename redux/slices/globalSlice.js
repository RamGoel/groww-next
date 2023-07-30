const { createSlice } = require("@reduxjs/toolkit");
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
    uiMode: 'light',
    feedData: []

}
const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        changeUiMode: (state, action) => {
            state.uiMode = state.uiMode == 'dark' ? 'light' : 'dark'
        },
        saveFeedData: (state, action) => {
            state.feedData = [...state.feedData, ...action.payload]
        },

    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        },
    },
})

export const { changeUiMode, saveFeedData } = globalSlice.actions

export default globalSlice.reducer