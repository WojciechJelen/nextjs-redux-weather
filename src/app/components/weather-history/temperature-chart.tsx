"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { convertHourlyDataForChart } from "@/lib/features/weather/utils";
import { useAppSelector } from "@/lib/hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TemperatureChart: React.FC = () => {
  const { data, loading, error } = useAppSelector((state) => state.weather);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const chartData = convertHourlyDataForChart(data?.historicalWeather!);
  return (
    <div>
      <h2>Hourly Temperature Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default TemperatureChart;
