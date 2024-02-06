import {
  createSlice,
  type SerializedError,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { fetchWeatherByCity } from "./weatherThunks";
import { type FetchWeatherError, type CombinedWeatherData } from "./types";
import { initialState } from "./initialState";

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWeatherByCity.fulfilled,
        (state, action: PayloadAction<CombinedWeatherData>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        fetchWeatherByCity.rejected,
        (
          state,
          action: PayloadAction<
            FetchWeatherError | undefined,
            string,
            unknown,
            SerializedError
          >
        ) => {
          state.loading = false;
          state.error = action.payload ?? {
            message: "An unknown error occurred",
          };
        }
      );
  },
});

export const weatherReducer = weatherSlice.reducer;
