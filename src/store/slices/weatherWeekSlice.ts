import { WeatherWeekState } from '../slicesStates/weatherWeekState';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchWeatherWeek } from '../actions/fetchWeatherWeek';
import { ListForecastDto } from 'src/types/ListForecastDto';

const initialState: WeatherWeekState = {
  data: [],
  loading: false,
  error: null
};

export type DispatchError = {
  errorMessage: string;
};

const weatherWeekSlice = createSlice({
  name: 'weatherWeek',
  initialState,
  reducers: {
    getWeatherWeek: (state, action: PayloadAction<ListForecastDto[]>) => {
      state.data = action.payload;
    },
    getWeatherHours: (state, action: PayloadAction<ListForecastDto[]>) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherWeek.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchWeatherWeek.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(fetchWeatherWeek.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const { getWeatherWeek, getWeatherHours } = weatherWeekSlice.actions;
export default weatherWeekSlice.reducer;
