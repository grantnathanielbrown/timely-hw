import React, { useEffect, useState } from 'react';
import { store } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeather } from './weatherSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureThreeQuarters, faDroplet, faWind, faCloudRain } from '@fortawesome/free-solid-svg-icons';
export default function WeatherContainer() {
    const weather = useSelector(selectWeather);
    console.log(weather);
    let content;
    let rain = weather?.rain ? (`${weather?.rain["1h"]}mm in the last hour` || `${weather?.rain["3h"]}mm in the last 3 hours`) : "N/A";
    if (weather.status === "loading") {
        content = <h2 className="text-4xl">Loading...</h2>
    } else {
        content = 
        <div className='h-full w-full flex justify-between'>
            <div className="text-4xl flex flex-col items-start justify-around h-full w-full">
                <div className="text-6xl flex flex-col">{weather.name}</div>
                <div>
                    <FontAwesomeIcon icon={faTemperatureThreeQuarters} color="#000" /> Current Temp.: {Math.round(weather.main.temp)}°F
                </div>
                <div>
                    <FontAwesomeIcon icon={faDroplet} color="#000" /> Humidity: {weather.main.humidity}%
                </div>
                <div>
                    <FontAwesomeIcon icon={faWind} color="#000" /> Wind Speed: {Math.round((weather.wind.speed || 0) + (weather.wind.gust || 0))}mph
                </div>
                <div>
                    <FontAwesomeIcon icon={faCloudRain} color="#000" /> Rain: {rain}
                </div>
            </div>

            <div className="flex flex-col h-full w-full">
                <img className="rounded-lg city-image" src={`https://source.unsplash.com/featured/?${weather.name}`}></img>
            </div>
        </div>
    }
  return (
    <div className="weather-container rounded-lg p-4">
        {content}
    </div>
  )
}

