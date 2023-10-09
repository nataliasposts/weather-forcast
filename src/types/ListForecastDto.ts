import { CloudsDto } from './weather/CloudsDto';
import { MainDto } from './weather/MainDto';
import { SysDto } from './weather/SysDto';
import { WeatherDto } from './weather/WeatherDto';
import { WindDto } from './weather/WindDto';

export interface ListForecastDto {
  clouds: CloudsDto;
  dt: number;
  dt_txt: string;
  main: MainDto;
  pop: number;
  sys: SysDto;
  visibility: number;
  weather: WeatherDto[];
  wind: WindDto;
}
