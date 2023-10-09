import { configureStore } from '@reduxjs/toolkit';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import weatherTodaySlice from './slices/weatherTodaySlice';
import '../styles/index.css';
import weatherWeekSlice from './slices/weatherWeekSlice';

const middlewares = [thunk];

export const store = configureStore({
  reducer: {
    weatherToday: weatherTodaySlice,
    weatherWeek: weatherWeekSlice
  },
  middleware: middlewares
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
