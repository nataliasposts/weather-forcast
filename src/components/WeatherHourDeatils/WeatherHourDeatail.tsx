import moment from 'moment';
import StyledWeatherHourDetails from './StyledWeatherHourDetails';
import { ListForecastDto } from 'src/types/ListForecastDto';
import GeneralIcon from 'src/shared/GeneralIcon/GeneralIcon';
import { weatherIcon } from 'src/shared/weatherIcon';

type WeatherHourDetailsProps = {
  details: ListForecastDto[] | null;
};

const WeatherHourDeatails = ({ details }: WeatherHourDetailsProps) => {
  if (!details) return null;

  const today = moment().format('YYYY-MM-DD');
  const getTodaysForecast = (days: ListForecastDto[]) => {
    return days.filter((day) => day.dt_txt.includes(today));
  };

  return (
    <StyledWeatherHourDetails>
      {getTodaysForecast(details).map((w) => {
        return (
          <div key={w.dt} className="weather-hour-details">
            <GeneralIcon src={weatherIcon(w.weather[0].icon)} />
            <p>{moment(w.dt * 1000 - 3 * 3600 * 1000).format('HH:mm')}</p>
            <p>
              {Math.round(w.main.temp)}
              <sup>o</sup>C
            </p>
          </div>
        );
      })}
    </StyledWeatherHourDetails>
  );
};

export default WeatherHourDeatails;
