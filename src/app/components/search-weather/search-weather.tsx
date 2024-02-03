"use client";

import { fetchWeatherByCity } from "@/lib/features/weather/weatherThunks";
import { useAppDispatch } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import { PlacesAutocomplete } from "../places-autocomplete/places-autocomplete";
import { Loader } from "@googlemaps/js-api-loader";

const SearchWeather = () => {
  const [city, setCity] = useState("");
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
    try {
      await dispatch(fetchWeatherByCity(city)).unwrap();
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
          setCity(results[0].address_components[0].long_name)
        }
      />

      <button onClick={handleFetchWeather}>Fetch Weather</button>
    </div>
  );
};

export default SearchWeather;
