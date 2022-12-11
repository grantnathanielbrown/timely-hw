import React from 'react';
import { useSelector } from 'react-redux';
import { selectWeather } from './weatherSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureThreeQuarters, faDroplet, faWind, faCloudRain } from '@fortawesome/free-solid-svg-icons';
export default function WeatherContainer() {
    const weather = useSelector(selectWeather);
    // console.log(weather);
    let content;
    if (weather.status === "loading") {
        content = <h2 className="text-4xl">Loading... / Waiting for Search</h2>
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
                    {/* As far as I can tell, most weather data measures wind speed by summing the baseline speed and gusts. */}
                    <FontAwesomeIcon icon={faWind} color="#000" /> Wind Speed: {Math.round((weather.wind.speed || 0) + (weather.wind.gust || 0))}mph
                </div>
                <div>
                    {/* The rain field is optional in the response, so we need to check if its fields exists before we try to access it */}
                    <FontAwesomeIcon icon={faCloudRain} color="#000" /> Rain: {weather?.rain ? (`${weather?.rain["3h"]}mm in the last 3 hours` || `${weather?.rain["1h"]}mm in the last hour`) : "N/A"}
                </div>
            </div>

            <div className="flex flex-col h-full w-full">
                {/* This website will provide images associated with whatever city is searched by the user. It will occasionally fail to find anything, which I feel is an acceptable tradeoff */}
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

