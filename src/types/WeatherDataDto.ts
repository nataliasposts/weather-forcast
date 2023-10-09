import { GetForecastPayload } from './GetForecastPayload';
import { CloudsDto } from './weather/CloudsDto';
import { MainDto } from './weather/MainDto';
import { SysDto } from './weather/SysDto';
import { WeatherDto } from './weather/WeatherDto';
import { WindDto } from './weather/WindDto';

export interface WeatherDateDto {
  coord: GetForecastPayload;
  weather: WeatherDto[];
  base: string;
  main: MainDto;
  visibility: number;
  wind: WindDto;
  clouds: CloudsDto;
  dt: number;
  sys: SysDto;
  id: number;
  name: string;
  cod: number;
}
