import {createInstance} from "./axiosInstance";

const BASE_URL = process.env.REACT_APP_SPORT_URL;
const API_TOKEN = process.env.REACT_APP_API_SPORT_TOKEN;

console.log(BASE_URL, API_TOKEN)

export const getCultureNews = () => {
    const instance = createInstance({
        method: 'get',
        baseURL: BASE_URL,
        url: 'v2/everything',
        params: {
            q: 'culture',
            apiKey: API_TOKEN,
            language: 'en'
        }
    });
    return instance('v2/everything',{params: {language: 'en',
            q: 'culture',
            apiKey: API_TOKEN}})
};