import { CityDto } from './CityDto';
import { ListForecastDto } from './ListForecastDto';

export interface WeatherWeekDto {
  city: CityDto;
  cnt: number;
  cod: string;
  list: ListForecastDto[];
  message: string;
}
