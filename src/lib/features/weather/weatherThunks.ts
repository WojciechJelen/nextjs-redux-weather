import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchWeatherError, WeatherDataType } from "./types";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherByCity = createAsyncThunk<
  WeatherDataType,
  string,
  { rejectValue: FetchWeatherError }
>("weather/fetchWeatherByCity", async (city, { rejectWithValue }) => {
  try {
    const url = `${BASE_URL}?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue({ message: (error as FetchWeatherError).message });
  }
});
