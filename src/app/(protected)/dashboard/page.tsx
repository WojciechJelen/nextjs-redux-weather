import { WeatherDataGrid } from "@/app/components/weather-data-grid";
import StoreProvider from "@/app/store-provider";
import { auth } from "@/auth";
import style from "./page.module.scss";
import { TemperatureChart } from "@/app/components/weather-history";
import { Suspense } from "react";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <StoreProvider user={session?.user ?? null}>
      <div className={style.wrapper}>
        <Suspense fallback={<p>Loading feed...</p>}>
          <WeatherDataGrid />
        </Suspense>
        <Suspense fallback={<p>Loading weather...</p>}>
          <TemperatureChart />
        </Suspense>
      </div>
    </StoreProvider>
  );
};
export default DashboardPage;
