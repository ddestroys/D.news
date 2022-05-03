import UserStore from '../userStore/Store';
import { action, makeObservable, observable } from 'mobx';
import WeatherStore from "../weatherStore/Store";
import NewsStore from "../newsStore/Store";

export default class RootStore {
    constructor() {
        this.isError = false;
        this.isLoading = true;

        this.userStore = new UserStore(this);
        this.weatherStore = new WeatherStore(this);
        this.newsStore = new NewsStore(this)

        makeObservable(this, {
            isError: observable,
            isLoading: observable,
            toggleError: action,
            toggleLoading: action,
        });

        this.initApp();
    }

    initApp() {
        Promise.all([this.weatherStore.setWeather(), this.newsStore.setSportNews(),this.newsStore.setWorldNews(), this.newsStore.setHealthNews(), this.newsStore.setCultureNews(),this.newsStore.setScienceNews()]).then(this.toggleLoading, (er) => {
            this.toggleLoading();
            this.toggleError();
            console.log(er);
        });
    }

    toggleLoading = () => {
        this.isLoading = !this.isLoading;
    };

    toggleError = () => {
        this.isError = !this.isError;
    };
}
