import { action, makeObservable, observable } from 'mobx';
import { getWeather } from '../../utils/requester/getWeather';
//import { exerciseObject, objectInArrayWithExercises } from '../../utils/types';

export default class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.weather = [];
        this.exercisesArray = [];
        this.totalTime = 0;
        this.location = {name: 'Minsk'};
        this.weatherError = '';

        makeObservable(this, {
           /* setWeather: action,
            weather: observable,
            weatherError: observable,
            location: observable,
            exercisesArray: observable,
            totalTime: observable,
            updateTotalTime: action,
            removeWeatherError: action,*/
        });
    }
}
