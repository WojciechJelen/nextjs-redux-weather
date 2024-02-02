import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeatherByCity } from "./weatherThunks";
import { WeatherState } from "./types";

// const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
// const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Create an asynchronous thunk for fetching weather data by city name
// export const fetchWeatherByCity = createAsyncThunk(
//   "weather/fetchWeatherByCity",
//   async (city: string, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `${BASE_URL}?q=${city}&appid=${API_KEY}`
//       );
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );

export const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

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
        (state, action: PayloadAction<any>) => {
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

export const {} = weatherSlice.actions;
export default weatherSlice.reducer;
