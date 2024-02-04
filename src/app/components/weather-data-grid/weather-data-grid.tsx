import { CurrentWeather } from "../current-weather/current-weather";
import SearchWeather from "../search-weather/search-weather";
import style from "./weather-data-grid.module.scss";

export const WeatherDataGrid = () => {
  return (
    <div className={style.wrapper}>
      <SearchWeather />
      <CurrentWeather />
    </div>
  );
};
