import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function WeatherInput(props) {
  return (
    <div className="weather-input-container">
        <TextField size="small" id="outlined-basic" label={props.label} variant="outlined"/>
    </div>
  );
}

export default WeatherInput;
