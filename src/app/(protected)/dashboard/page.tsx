import { type Metadata } from "next";
import style from "./page.module.scss";
import { WeatherDataGrid } from "@/app/components/weather-data-grid";

export const metadata: Metadata = {
  title: "Current Weather Dashboard",
  description: "This page shows the current weather data.",
};

const DashboardPage = async () => {
  return (
    <div className={style.wrapper}>
      <WeatherDataGrid />
    </div>
  );
};
export default DashboardPage;
