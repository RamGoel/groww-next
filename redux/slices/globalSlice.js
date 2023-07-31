const { createSlice } = require("@reduxjs/toolkit");
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
    uiMode: 'light',
    feedData: [],
    userData: null,
    userImages: null,
    isLoggedin:true

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
        saveUserData: (state, action) => {
            state.userData = action.payload
        },
        saveUserImages: (state, action) => {
            state.userImages = action.payload
        },
        changeLoginStatus:(state)=>{
            state.isLoggedin=!state.isLoggedin
        },
        repeatFeedData:(state)=>{
            state.feedData.push(state.feedData)
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
    changeUiMode,
    saveFeedData,
    saveUserData,
    saveUserImages,
    changeLoginStatus,
    repeatFeedData
} = globalSlice.actions

export default globalSlice.reducer