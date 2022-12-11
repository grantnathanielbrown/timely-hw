import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { searchByLatLong, searchByCity } from './weatherAPI';

const initialState = {
  weather: {
    status: "loading"
  }
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const latLongAsync = createAsyncThunk(
  "weather/searchByLatLong",
  async (coordinates) => {
    const response = await searchByLatLong(coordinates.latitude,coordinates.longitude);
    
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const cityAsync = createAsyncThunk(
  "weather/searchByCity",
  async (city) => {
    const response = await searchByCity(city);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
// createSlice generates action type strings
export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(latLongAsync.fulfilled, (state, action) => {
        state.weather = structuredClone(action.payload);
      })
      .addCase(cityAsync.fulfilled, (state, action) => {
        state.weather = structuredClone(action.payload);
      })
  },
});



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;
export const selectWeather = (state) => state.weather.weather;

export default weatherSlice.reducer;
