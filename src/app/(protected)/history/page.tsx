import { WeatherDataGrid } from "@/app/components/weather-data-grid";
import style from "./page.module.scss";
import { TemperatureChart } from "@/app/components/weather-history";
import { Suspense } from "react";

const DashboardPage = async () => {
  return (
    <div className={style.wrapper}>
      <TemperatureChart />
    </div>
  );
};
export default DashboardPage;
