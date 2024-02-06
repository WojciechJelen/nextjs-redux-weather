import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../weatherSlice";
import { fetchWeatherByCity } from "../weatherThunks";
import { CombinedWeatherData, WeatherState } from "../types";
import { initialState } from "../initialState";
import { mockCombinedWeatherData } from "./mocks";

describe("weatherSlice reducer", () => {
  let store: ReturnType<typeof configureStore<WeatherState>>;

  beforeEach(() => {
    store = configureStore({ reducer: weatherReducer });
  });

  it("should handle initial state", () => {
    expect(store.getState()).toEqual(initialState);
  });

  it("should handle fetchWeatherByCity.pending", () => {
    store.dispatch({ type: fetchWeatherByCity.pending.type });
    const state = store.getState();
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it("should handle fetchWeatherByCity.fulfilled", () => {
    const mockWeatherData: CombinedWeatherData = mockCombinedWeatherData;
    store.dispatch({
      type: fetchWeatherByCity.fulfilled.type,
      payload: mockWeatherData,
    });
    const state = store.getState();
    expect(state.loading).toBe(false);
    expect(state.data).toEqual(mockWeatherData);
  });

  it("should handle fetchWeatherByCity.rejected", () => {
    const mockError = "An error occurred";
    store.dispatch({
      type: fetchWeatherByCity.rejected.type,
      payload: mockError,
    });
    const state = store.getState();
    expect(state.loading).toBe(false);
    expect(state.error).toEqual(mockError);
  });
});
