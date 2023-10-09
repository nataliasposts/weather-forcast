import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WeatherTodayState } from '../slicesStates/weatherTodayState';
import { WeatherDateDto } from 'src/types/WeatherDataDto';
import { fetchWeatherToday } from '../actions/fetchWeatherToday';

const initialState: WeatherTodayState = {
  data: <WeatherDateDto>{},
  loading: false,
  error: null
};

export type DispatchError = {
  errorMessage: string;
};

const weatherTodaySlice = createSlice({
  name: 'weatherToday',
  initialState,
  reducers: {
    getWeatherToday: (state, action: PayloadAction<WeatherDateDto>) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherToday.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchWeatherToday.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(fetchWeatherToday.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ? action.error.message : null;
    });
  }
});

export const { getWeatherToday } = weatherTodaySlice.actions;
export default weatherTodaySlice.reducer;
