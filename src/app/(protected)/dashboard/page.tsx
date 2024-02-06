import style from "./page.module.scss";
import { WeatherDataGrid } from "@/app/components/weather-data-grid";

const DashboardPage = async () => {
  return (
    <div className={style.wrapper}>
      <WeatherDataGrid />
    </div>
  );
};
export default DashboardPage;
