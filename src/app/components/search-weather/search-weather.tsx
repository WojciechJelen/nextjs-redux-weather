"use client";

import { fetchWeatherByCity } from "@/lib/features/weather/weatherThunks";
import { useAppDispatch } from "@/lib/hooks";
import React, { useCallback, useEffect, useState } from "react";
import { PlacesAutocomplete } from "../places-autocomplete/places-autocomplete";
import { Loader } from "@googlemaps/js-api-loader";
import { getLatLng } from "use-places-autocomplete";
import styles from "./search-weather.module.scss";

const SearchWeather = () => {
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

  const handleSelect = useCallback(
    async (results: google.maps.GeocoderResult[]) => {
      if (!results.length) return;
      const { lat, lng } = getLatLng(results[0]);

      try {
        await dispatch(
          fetchWeatherByCity({
            lat,
            lon: lng,
            name: results[0].address_components[0].long_name,
          })
        ).unwrap();
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch]
  );

  if (!googleApisLoaded) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <PlacesAutocomplete onLocationSelect={handleSelect} />
    </div>
  );
};

export default SearchWeather;
