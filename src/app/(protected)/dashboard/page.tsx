import { WeatherDataGrid } from "@/app/components/weather-data-grid";
import StoreProvider from "@/app/store-provider";
import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <StoreProvider user={session?.user ?? null}>
      <h1>Dashboard</h1>
      <WeatherDataGrid />
    </StoreProvider>
  );
};
export default DashboardPage;
