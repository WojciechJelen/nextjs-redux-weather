import { HourlyWeatherData } from "./types";

export const convertHourlyDataForChart = (hourlyData: HourlyWeatherData) => {
  return {
    labels: hourlyData.time.map((time) => new Date(time).toLocaleTimeString()),
    datasets: [
      {
        label: "Temperature (°C)",
        data: hourlyData.temperature_2m,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
};
