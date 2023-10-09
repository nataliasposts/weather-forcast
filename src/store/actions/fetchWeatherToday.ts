import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import http, { API_KEY } from 'src/helper';
import { WeatherAction } from 'src/types/enum/actionEnum/WeatherActionEnum';

export const fetchWeatherToday = createAsyncThunk(
  WeatherAction.GET_WEATHER_TODAY,
  async (city: string) => {
    try {
      const response = await http.get(
        `weather?q=${city}&limit=1&appid=${API_KEY}&units=metric&lang=en`
      );
      return response.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.status === 404) {
        toast.error(`The city "${city}" was not found`, {
          position: 'top-left'
        });
      }
    }
  }
);
