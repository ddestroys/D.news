import { action, makeObservable, observable } from 'mobx';
import { getWeather } from '../../utils/requester/getWeather';

export default class WeatherStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.weather = [];
        this.location = {name: 'Minsk'};
        this.weatherError = '';

        makeObservable(this, {
            setWeather: action,
            weather: observable,
            weatherError: observable,
            location: observable,
            removeWeatherError: action,
        });
    }

    removeWeatherError = () => {
        this.weatherError = ''
    };

    setWeather = async (city) => {
        try {
            await getWeather(city).then(res=>{
                this.weather = res.data.forecast.forecastday;
                this.location = res.data.location;
                this.weatherError = '';
            });
            return { isLoaded: true };
        } catch (e) {
            this.weatherError = e.message;
        }
    };
}
