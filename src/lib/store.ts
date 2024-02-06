import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "@/lib/features/auth/authSlice";
import { weatherReducer } from "@/lib/features/weather/weatherSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      weather: weatherReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
