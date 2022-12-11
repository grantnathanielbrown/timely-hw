import { React,useState,useEffect } from 'react';
import WeatherInput from './components/WeatherInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { latLongAsync, cityAsync } from './features/weather/weatherSlice.js';
import WeatherContainer from './features/weather/WeatherContainer';
function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude.toString());
      setLongitude(position.coords.longitude.toString());
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
        <h1 className="logo text-6xl">timely <FontAwesomeIcon icon={faCloudBolt} color="#20BEE1" /> weather</h1>
      </header>
      <WeatherContainer />
      <div className="flex justify-center weather-input-container">
        <TextField size="small" id="outlined-basic" type="number" label="Latitude" value={latitude} onChange={handleLatitudeChange} variant="outlined"/>
        <TextField size="small" id="outlined-basic" type="number" label="Longitude" value={longitude} onChange={handleLongitudeChange} variant="outlined"/>
        <Button variant="contained" disabled={!latitude.length || !longitude.length} onClick={() => {dispatch(latLongAsync({
            latitude: latitude,
            longitude: longitude
          })); setCity('')}
        }>Search by Latitude+Longitude</Button>
        <span className="text-3xl ml-4">-OR-</span>
        <TextField size="small" id="outlined-basic" label="City" value={city} onChange={handleCityChange} variant="outlined" />
        <Button variant="contained" disabled={!city.length} onClick={() => {dispatch(cityAsync(city)); setLatitude(''); setLongitude('')}}>Search by City</Button>
      </div>
    </div>
  );
}

export default App;
