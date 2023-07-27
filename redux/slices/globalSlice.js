const { createSlice } = require("@reduxjs/toolkit");
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
    uiMode: 'dark',

}
const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        changeUiMode: (state, action) => {
            state.uiMode = state.uiMode == 'dark' ? 'light' : 'dark'
        }
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

export const { changeUiMode } = globalSlice.actions

export default globalSlice.reducer