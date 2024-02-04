export type WeatherDataType = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type FetchWeatherError = {
  message: string;
};

export type CombinedWeatherData = {
  currentWeather: WeatherDataType;
  historicalWeather: HourlyWeatherData;
};

export type CityData = {
  name: string;
  lat: number;
  lon: number;
};

export type HourlyWeatherData = {
  time: string[];
  temperature_2m: number[];
};

export type HistoricalTemperatureResponseDataType = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: HourlyWeatherData;
};

export type WeatherState = {
  data: CombinedWeatherData | null;
  loading: boolean;
  error: FetchWeatherError | null;
};
