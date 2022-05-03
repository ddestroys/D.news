import React, {useState} from "react";

import Sunny from './../../../img/sunny.svg'
import Sky from './../../../img/sky.svg'
import {observer} from "mobx-react";
import {useStore} from "../../../utils/useStore";

import moment from "moment";
import classNames from "classnames";

const cards = [
    {
        date: '29.03',
        icon: Sunny,
        value: '+13'
    },
    {
        date: '29.03',
        icon: Sunny,
        value: '+13'
    },
    {
        date: '29.03',
        icon: Sunny,
        value: '+13'
    },
    {
        date: '29.03',
        icon: Sunny,
        value: '+13'
    },
    {
        date: '29.03',
        icon: Sunny,
        value: '+13'
    },
];

const getSing = (value) => String(value)[0] === '-' ? '' : '+'



const Weather = observer(() => {
    const rootStore = useStore();
    const {weather, setWeather, location, weatherError, removeWeatherError} = rootStore.weatherStore;
    const [city, setCity] = useState('');

    const onInputChange = (e) => {
        removeWeatherError();
        setCity(e.target.value)
    }

    return <div className='weather-wrapper'>
        <div className='search-city-row'>
            <input className={classNames('input',{'input-error':weatherError.length})} placeholder='Enter the city' value={city} onChange={onInputChange}/>
            <img src={Sky} className='input-icon'/>
            <div className='search-button' onClick={()=>setWeather(city)}>Search</div>
        </div>
        <div className='weather'>
            <div className='weather-block'>
                <div className='city-name'>{location.name}</div>
                <div className='year'>2022</div>
                <div className='date-cards'>
                    {weather.map(weatherItem=><div className='date-card'>
                        <div className='date'>{moment(weatherItem.date).format('DD.MM')}</div>
                        <img src={weatherItem.day.condition.icon} className='card-icon'/>
                        <div className='weather-value'>{getSing(weatherItem.day.avgtemp_c)}{Math.round(weatherItem.day.avgtemp_c)}</div>
                    </div>)}

                </div>
            </div>
        </div>
    </div>
});

export default Weather;