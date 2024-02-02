"use client";

import { fetchWeatherByCity } from "@/lib/features/weather/weatherThunks";
import { useAppDispatch } from "@/lib/hooks";
import React, { useState } from "react";

const SearchWeather = () => {
  const [city, setCity] = useState("");
  const dispatch = useAppDispatch();

  const handleFetchWeather = async () => {
    try {
      const weatherData = await dispatch(fetchWeatherByCity(city)).unwrap();
      console.log(weatherData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleFetchWeather}>Fetch Weather</button>
    </div>
  );
};

export default SearchWeather;
