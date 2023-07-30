import axios from "axios"
import { Api } from "./config"
import { saveFeedData, saveUserData } from "@redux/slices/globalSlice"
export const getImagesApi = () => {
    return (dispatch) => {
        Api.get('/photos/random?count=10').then(res => {
            dispatch(saveFeedData(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}
export const getUserDetailsApi = (id) => {
    return (dispatch) => {
        console.log("----->", id)
        
    }
}