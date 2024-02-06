import { CombinedWeatherData } from "../types";

export const mockCombinedWeatherData: CombinedWeatherData = {
  currentWeather: {
    coord: {
      lon: -0.1257,
      lat: 51.5085,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 289.55,
      feels_like: 289.15,
      temp_min: 288.71,
      temp_max: 290.37,
      pressure: 1023,
      humidity: 77,
    },
    visibility: 10000,
    wind: {
      speed: 1.54,
      deg: 140,
    },
    clouds: {
      all: 0,
    },
    dt: 1603187887,
    sys: {
      type: 1,
      id: 1414,
      country: "GB",
      sunrise: 1603161437,
      sunset: 1603199326,
    },
    timezone: 0,
    id: 2643743,
    name: "London",
    cod: 200,
  },
  historicalWeather: {
    time: ["2023-04-01T00:00", "2023-04-01T01:00", "2023-04-01T02:00"],
    temperature_2m: [283.15, 282.15, 281.15],
  },
};
