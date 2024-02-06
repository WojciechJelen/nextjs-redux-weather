import { type Metadata } from "next";
import style from "./page.module.scss";
import { TemperatureChart } from "@/app/components/weather-history";

export const metadata: Metadata = {
  title: "Weather App - Last 10 days temperature history",
  description: "This page shows the last 10 days temperature history.",
};

const DashboardPage = async () => {
  return (
    <div className={style.wrapper}>
      <TemperatureChart />
    </div>
  );
};
export default DashboardPage;
