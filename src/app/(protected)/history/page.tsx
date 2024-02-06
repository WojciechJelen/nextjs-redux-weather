import style from "./page.module.scss";
import { TemperatureChart } from "@/app/components/weather-history";

const DashboardPage = async () => {
  return (
    <div className={style.wrapper}>
      <TemperatureChart />
    </div>
  );
};
export default DashboardPage;
