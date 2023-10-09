import { createAsyncThunk } from '@reduxjs/toolkit';
import http, { API_KEY } from 'src/helper';
import { WeatherAction } from 'src/types/enum/actionEnum/WeatherActionEnum';

export const fetchWeatherWeek = createAsyncThunk(
  WeatherAction.GET_WEATHER_WEEK,
  async (city: string) => {
    try {
      const response = await http.get(
        `forecast?q=${city}&limit=1&appid=${API_KEY}&units=metric&lang=en`
      );
      return response.data.list;
    } catch (error) {
      return console.error('error in fetch weather week');
    }
  }
);
