"use client";

import { fetchWeatherByCity } from "@/lib/features/weather/weatherThunks";
import { useAppDispatch } from "@/lib/hooks";
import React, { useCallback, useEffect, useState } from "react";
import { PlacesAutocomplete } from "../places-autocomplete/places-autocomplete";
import { Loader } from "@googlemaps/js-api-loader";
import { CityData } from "@/lib/features/weather/types";
import styles from "./search-weather.module.scss";

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

  const handleFetchWeather = useCallback(async () => {
    if (!cityData) return;

    try {
      await dispatch(fetchWeatherByCity(cityData)).unwrap();
    } catch (error) {
      console.error(error);
    }
  }, [cityData, dispatch]);

  if (!googleApisLoaded) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <PlacesAutocomplete
        onLocationSelect={(results) =>
          setCityData({
            name: results[0].address_components[0].long_name,
            lat: results[0].geometry.location.lat(),
            lon: results[0].geometry.location.lng(),
          })
        }
      />

      <button
        className={styles.fetchWeatherButton}
        onClick={handleFetchWeather}
      >
        Fetch Weather
      </button>
    </div>
  );
};

export default SearchWeather;
