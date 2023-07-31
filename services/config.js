import axios from "axios";
export const Api = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        "Authorization":`Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`
    }
});