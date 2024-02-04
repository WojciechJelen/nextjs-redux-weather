"use client";

import { fetchWeatherByCity } from "@/lib/features/weather/weatherThunks";
import { useAppDispatch } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import { PlacesAutocomplete } from "../places-autocomplete/places-autocomplete";
import { Loader } from "@googlemaps/js-api-loader";
import { CityData } from "@/lib/features/weather/types";

const SearchWeather = () => {
  const [cityData, setCityData] = useState<CityData>();
  const dispatch = useAppDispatch();
  const [googleApisLoaded, setGoogleApisLoaded] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY!,
      version: "weekly",
      libraries: ["places"],
    });

    loader
      .importLibrary("places")
      .then(() => {
        setGoogleApisLoaded(true);
      })
      .catch((e) => {
        console.error("Error loading Google Maps", e);
      });
  }, []);

  const handleFetchWeather = async () => {
    if (!cityData) return;

    try {
      await dispatch(fetchWeatherByCity(cityData)).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  if (!googleApisLoaded) {
    return null;
  }

  return (
    <div>
      <PlacesAutocomplete
        onLocationSelect={(results) =>
          setCityData({
            name: results[0].formatted_address,
            lat: results[0].geometry.location.lat(),
            lon: results[0].geometry.location.lng(),
          })
        }
      />

      <button onClick={handleFetchWeather}>Fetch Weather</button>
    </div>
  );
};

export default SearchWeather;
