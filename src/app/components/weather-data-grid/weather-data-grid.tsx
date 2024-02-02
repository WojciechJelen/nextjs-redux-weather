"use client";

import { useAppSelector } from "@/lib/hooks";
import SearchWeather from "../search-weather/search-weather";
import { DisplayWeatherData } from "../display-weather-data.tsx/display-weather-data";

export const WeatherDataGrid = () => {
  return (
    <div>
      <SearchWeather />
      <DisplayWeatherData />
    </div>
  );
};
