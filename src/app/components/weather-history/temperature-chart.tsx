"use client";

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

import styles from "./temperature-chart.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const TemperatureChart: React.FC = () => {
  const { data, loading, error } = useAppSelector((state) => state.weather);

  const getContent = () => {
    if (loading) {
      return <div className={styles.message}>Loading...</div>;
    }

    if (error) {
      return (
        <div className={styles.errorMessage}>
          {`Can't fetch history data due to error.`}
        </div>
      );
    }

    if (!data?.historicalWeather) {
      return <div className={styles.message}>No data available</div>;
    }

    return <Line data={chartData} />;
  };

  const chartData = convertHourlyDataForChart(data?.historicalWeather);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Last 10 days average temperatures</h2>
      {getContent()}
    </div>
  );
};
