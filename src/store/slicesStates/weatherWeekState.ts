import { ListForecastDto } from 'src/types/ListForecastDto';

export type WeatherWeekState = {
  error: string | null;
  loading: boolean;
  data: ListForecastDto[];
};
