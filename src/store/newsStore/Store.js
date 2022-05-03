import { action, makeObservable, observable } from 'mobx';
import { getSportNews } from '../../utils/requester/getSportNews';
import {getWorldNews} from "../../utils/requester/getWorldNews";
import {getHealthNews} from "../../utils/requester/getHealthNews";
import {getCultureNews} from "../../utils/requester/getCultureNews";
import {getScienceNews} from "../../utils/requester/getScienceNews";

export default class NewsStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.sportNews = [];
        this.worldNews = [];
        this.healthNews = [];
        this.cultureNews = [];
        this.scienceNews = [];

        makeObservable(this, {
            setSportNews: action,
            sportNews: observable,
            worldNews: observable,
            healthNews: observable,
            cultureNews: observable,
            scienceNews: observable,
        });
    }

    setSportNews = async () => {
            await getSportNews().then(res=>{
                console.log(res.data.articles)
                this.sportNews = res.data.articles;
            });
            return { isLoaded: true };

    };

    setWorldNews = async () => {
        await getWorldNews().then(res=>{
            console.log(res.data.articles)
            this.worldNews = res.data.articles;
        })
        return { isLoaded: true };
    }

    setHealthNews = async () => {
        await getHealthNews().then(res=>{
            console.log(res.data.articles)
            this.healthNews = res.data.articles;
        })
        return { isLoaded: true };
    }

    setCultureNews = async () => {
        await getCultureNews().then(res=>{
            console.log(res.data.articles)
            this.cultureNews = res.data.articles;
        })
        return { isLoaded: true };
    }

    setScienceNews = async () => {
        await getScienceNews().then(res=>{
            console.log(res.data.articles)
            this.scienceNews = res.data.articles;
        })
        return { isLoaded: true };
    }
}
