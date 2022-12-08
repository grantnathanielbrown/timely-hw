import axios from "axios";
export function searchByLatLong(latitude,longitude) {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OW_KEY}&units=imperial`);
}

export function searchByCity(city) {
  return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_OW_KEY}`)
  .then((response) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${process.env.REACT_APP_OW_KEY}&units=imperial`);
  }
)
}
