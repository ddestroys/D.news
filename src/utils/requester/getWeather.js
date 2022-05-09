import {createInstance} from "./axiosInstance";

const BASE_URL = process.env.REACT_APP_WEATHER_URL;
const API_TOKEN = process.env.REACT_APP_API_WEATHER_TOKEN;


export const getWeather = (city='Minsk') => {
    const instance = createInstance({
        method: 'get',
        baseURL: BASE_URL,
        url: 'v1/forecast.json',
        headers: {'key': API_TOKEN},
        params: {
            q: city,
            days: '5'
        }
    });
    return instance('v1/forecast.json',{params: {q: city,
        days: '5'}})
};