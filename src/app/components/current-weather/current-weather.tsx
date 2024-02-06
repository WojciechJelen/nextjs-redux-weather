"use client";

import Image from "next/image";
import styles from "./current-weather.module.scss";
import { useAppSelector } from "@/lib/hooks";

export const CurrentWeather = () => {
  const { data, error } = useAppSelector((state) => state.weather);
  const { name, weather, main, wind } = data.currentWeather;
  const temperatureCelsius = main.temp ? (main.temp - 273.15).toFixed(1) : "~"; // Convert Kelvin to Celsius

  if (error) {
    return (
      <div className={styles.card}>
        <div className={styles.error}>
          Unable to fetch weather data. Please try again later.
        </div>
      </div>
    );
  }

  if (!data || !data.currentWeather) {
    return (
      <div className={styles.card}>
        <div className={styles.error}>
          Weather data is currently unavailable.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div>
        <h2 className={styles.title}>{name}</h2>
        {weather[0]?.icon ? (
          <Image
            src={`http://openweathermap.org/img/wn/${weather[0]?.icon}.png`}
            alt={weather[0]?.description ?? "Weather icon"}
            className={styles.icon}
            width={100}
            height={100}
          />
        ) : (
          <div className={styles.iconPlaceholder}></div>
        )}
        <p className={styles.temperature}>{temperatureCelsius}°C</p>
      </div>

      <div>
        <p className={styles.description}>{weather[0]?.description ?? "N/A"}</p>
        <div className={styles.details}>
          <p>Wind: {wind?.speed ?? ""} m/s</p>
          <p>Humidity: {main?.humidity ?? ""}%</p>
        </div>
      </div>
    </div>
  );
};
