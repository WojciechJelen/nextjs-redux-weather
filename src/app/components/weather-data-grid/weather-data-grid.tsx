import { CurrentWeather } from "../current-weather/current-weather";
import style from "./weather-data-grid.module.scss";

export const WeatherDataGrid = () => {
  return (
    <div className={style.wrapper}>
      <CurrentWeather />
    </div>
  );
};
