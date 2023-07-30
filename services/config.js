import axios from "axios";
export const Api = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        "Authorization":`Client-ID SHoSJcKneTrl8NA3u-6S-_A7BYOVgMfD0dDz4Yn6_LI`
    }
});