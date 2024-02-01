"use client";

import { useAppSelector } from "@/lib/hooks";

export const WeatherDataGrid = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div>
      Weather Data Grid
      <div>{JSON.stringify(user)}</div>
      <div>WeatherDataGrid</div>
    </div>
  );
};
