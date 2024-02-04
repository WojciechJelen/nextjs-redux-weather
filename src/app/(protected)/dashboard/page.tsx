import { WeatherDataGrid } from "@/app/components/weather-data-grid";
import StoreProvider from "@/app/store-provider";
import { auth } from "@/auth";
import style from "./page.module.scss";
import { TemperatureChart } from "@/app/components/weather-history";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <StoreProvider user={session?.user ?? null}>
      <div className={style.wrapper}>
        <WeatherDataGrid />
        <TemperatureChart />
      </div>
    </StoreProvider>
  );
};
export default DashboardPage;
