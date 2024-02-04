import { useAppSelector } from "@/lib/hooks";

export const DisplayWeatherData = () => {
  const { data, loading, error } = useAppSelector((state) => state.weather);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Weather Data</h1>
      <div>{JSON.stringify(data?.currentWeather)}</div>
    </div>
  );
};
