import axios from "axios";
// A mock function to mimic making an async request for data
export function searchByLatLong(latitude,longitude) {
  console.log(process.env.REACT_APP_OW_KEY,latitude,longitude);
  // return new Promise((resolve) =>
  //   setTimeout(() => resolve({ data: amount }), 500)
  // );
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OW_KEY}&units=imperial`);
}
