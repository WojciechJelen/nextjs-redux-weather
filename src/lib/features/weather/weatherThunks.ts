import { unstable_noStore as noStore } from "next/cache";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  CityData,
  CombinedWeatherData,
  FetchWeatherError,
  HistoricalTemperatureResponseDataType,
} from "./types";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const OPEN_METEO_BASE_URL = "https://api.open-meteo.com/v1/forecast";

const fetchWeatherData = async ({
  name,
  lat,
  lon,
}: {
  name: string;
  lat: number;
  lon: number;
}) => {
  // opt out from static rendering
  noStore();
  const currentWeatherUrl = `${BASE_URL}?q=${name}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`;
  const historicalWeatherUrl = `${OPEN_METEO_BASE_URL}?latitude=${lat}&longitude=${lon}&past_days=10&hourly=temperature_2m`;

  const responses = await Promise.all([
    fetch(currentWeatherUrl),
    fetch(historicalWeatherUrl),
  ]);

  const data = await Promise.all(
    responses.map((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
  );

  const historicalData = data[1] as HistoricalTemperatureResponseDataType;
  const historicalWeather = {
    time: historicalData.hourly.time,
    temperature_2m: historicalData.hourly.temperature_2m.map(Number),
  };

  return {
    currentWeather: data[0],
    historicalWeather,
  };
};

export const fetchWeatherByCity = createAsyncThunk<
  CombinedWeatherData,
  CityData,
  { rejectValue: FetchWeatherError }
>(
  "weather/fetchWeatherByCity",
  async ({ name, lat, lon }, { rejectWithValue }) => {
    try {
      return await fetchWeatherData({ name, lat, lon });
    } catch (error) {
      return rejectWithValue({ message: (error as FetchWeatherError).message });
    }
  }
);
