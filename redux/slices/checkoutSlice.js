const { createSlice } = require("@reduxjs/toolkit");
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
    data: []
}
const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        saveData: (state, action) => {
            state.data = action.payload
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

export const {
    saveData
} = checkoutSlice.actions

export default checkoutSlice.reducer