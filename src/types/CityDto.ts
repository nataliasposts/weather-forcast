import { GetForecastPayload } from './GetForecastPayload';

export interface CityDto {
  coord: GetForecastPayload;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}
