import { WeatherDateDto } from 'src/types/WeatherDataDto';

export type WeatherTodayState = {
  error: string | null;
  loading: boolean;
  data: WeatherDateDto;
};
