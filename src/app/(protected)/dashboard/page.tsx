import { WeatherDataGrid } from "@/app/components/weather-data-grid";
import style from "./page.module.scss";

const DashboardPage = async () => {
  return (
    <div className={style.wrapper}>
      <WeatherDataGrid />
    </div>
  );
};
export default DashboardPage;
