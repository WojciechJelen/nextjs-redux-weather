import { WeatherDataGrid } from "@/app/components/weather-data-grid";
import { WeatherHistory } from "@/app/components/weather-history";
import StoreProvider from "@/app/store-provider";
import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <StoreProvider user={session?.user ?? null}>
      <WeatherDataGrid />
      <WeatherHistory />
    </StoreProvider>
  );
};
export default DashboardPage;
