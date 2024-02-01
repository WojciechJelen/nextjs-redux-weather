// TODO:
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchWeatherData = async (city: string) => {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
//   );
//   const data = await response.json();
//   return data;
// };

// export const initializeWeatherData = createAsyncThunk(
//   "weather/initializeWeatherData",
//   async (city: string) => {
//     const response = await fetchWeatherData(city);
//     return response;
//   }
// );
