import { React,useState,useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import WeatherInput from './components/WeatherInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import {
  latLongAsync
} from './features/weather/weatherSlice.js';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(process.env);
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      dispatch(latLongAsync({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }));
    },(error) => {
      console.log(error);
    });
  },[])
  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value);
  };
  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <h1 className="logo text-4xl">timely <FontAwesomeIcon icon={faCloudBolt} color="#20BEE1" /> weather</h1>
      </header>
      <div className="flex justify-center weather-input-container">
        {/* <WeatherInput label="Latitude"/>
        <WeatherInput label="Longitude"/> */}
        <TextField size="small" id="outlined-basic" label="Latitude" value={latitude} onChange={handleLatitudeChange} variant="outlined"/>
        <TextField size="small" id="outlined-basic" label="Longitude" value={longitude} onChange={handleLongitudeChange} variant="outlined"/>
        <Button variant="contained">Search by Latitude+Longitude</Button>
        <span className="text-3xl ml-4">-OR-</span>
        {/* <WeatherInput label="City"/> */}
        <TextField size="small" id="outlined-basic" label="City" value={city} onChange={handleCityChange} variant="outlined"/>
        <Button variant="contained">Search by City</Button>
      </div>
    </div>
  );
}

export default App;
