import {createInstance} from "./axiosInstance";

const BASE_URL = process.env.REACT_APP_SPORT_URL;
const API_TOKEN = process.env.REACT_APP_API_SPORT_TOKEN;

export const getScienceNews = () => {
    const instance = createInstance({
        method: 'get',
        baseURL: BASE_URL,
        url: 'v2/everything',
        params: {
            q: 'science',
            apiKey: API_TOKEN,
            language: 'en'
        }
    });
    return instance('v2/everything',{params: {language: 'en',
            q: 'science',
            apiKey: API_TOKEN}})
};