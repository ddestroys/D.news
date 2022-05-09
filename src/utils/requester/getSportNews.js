import {createInstance} from "./axiosInstance";

const BASE_URL = process.env.REACT_APP_SPORT_URL;
const API_TOKEN = process.env.REACT_APP_API_SPORT_TOKEN;


export const getSportNews = () => {
    const instance = createInstance({
        method: 'get',
        baseURL: BASE_URL,
        url: 'v2/top-headlines',
        params: {
            category: 'sports',
            apiKey: API_TOKEN,
            language: 'en'
        }
    });
    return instance('v2/top-headlines',{params: {language: 'en',
            category: 'sports',
            apiKey: API_TOKEN}})
};