"use client";

import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import styles from "./current-weather.module.scss";

export const CurrentWeather = () => {
  const { data, loading, error } = useAppSelector((state) => state.weather);
  const { name, weather, main, wind } = data.currentWeather;
  const temperatureCelsius = (main.temp - 273.15).toFixed(1); // Convert Kelvin to Celsius

  if (weather.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.card}>
      <div>
        <h2 className={styles.title}>{name}</h2>
        <Image
          src={`http://openweathermap.org/img/wn/${weather[0]?.icon}.png`}
          alt={weather[0]?.description}
          className={styles.icon}
          width={100}
          height={100}
        />
        <p className={styles.temperature}>{temperatureCelsius}°C</p>
      </div>

      <div>
        <p className={styles.description}>{weather[0].description}</p>
        <div className={styles.details}>
          <p>Wind: {wind.speed} m/s</p>
          <p>Humidity: {main.humidity}%</p>
        </div>
      </div>
    </div>
  );
};
