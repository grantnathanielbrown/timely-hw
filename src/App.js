import React from 'react';
import { Counter } from './features/counter/Counter';
import WeatherInput from './components/WeatherInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <h1 className="logo text-4xl">timely <FontAwesomeIcon icon={faCloudBolt} color="#20BEE1" /> weather</h1>
      </header>
      <div className="flex justify-center weather-input-container">
        <WeatherInput label="Latitude"/>
        <WeatherInput label="Longitude"/>
        <Button variant="contained">Search by Coordinates</Button>
        <span className="text-3xl ml-4">-OR-</span>
        <WeatherInput label="City"/>
        <Button variant="contained">Search by City</Button>
      </div>
    </div>
  );
}

export default App;
