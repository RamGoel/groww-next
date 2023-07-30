import axios from "axios"
import { Api } from "./config"
import { saveFeedData } from "@redux/slices/globalSlice"
export const getImagesApi = () => {
    return (dispatch, disableLoader) => {
        console.log(process.env.UNSPLASH_KEY)
        Api.get('/photos/random?count=10').then(res => {
            console.log(res)
            dispatch(saveFeedData(res.data))
        }).catch(err => {
            console.log(err)
        }).finally(()=>{
            disableLoader()
        })
    }
}