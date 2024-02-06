import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeatherByCity } from "./weatherThunks";
import { CombinedWeatherData } from "./types";
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
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default weatherSlice.reducer;
