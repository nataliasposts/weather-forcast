import { WeatherDateDto } from 'src/types/WeatherDataDto';
import StyledWeatherDetails from './StyledWeatherDetails';
import { weatherIcon } from 'src/shared/weatherIcon';
import GeneralIcon from 'src/shared/GeneralIcon/GeneralIcon';
import {
  calendar,
  humidity,
  location,
  moon,
  pressure,
  sun,
  temperature,
  wind
} from 'src/shared/GeneralIcon/icons.constants';
import { TextEnum } from 'src/types/enum/TextEnum';
import WeatherDetailItem from './WeatherDetailsItems/WeatherDetailItem';
import { formatTimestampToDate } from '../helpers/date';
import WeatherSunDetails from './WeatherDetailsItems/WeatherSunDetails';

type WeatherDeatilsProps = {
  details: WeatherDateDto | null;
};

const WeatherDetails: React.FC<WeatherDeatilsProps> = ({ details }: WeatherDeatilsProps) => {
  if (!details) {
    return null;
  }
  return details ? (
    <StyledWeatherDetails>
      <div className="weather-name">
        <div>
          <p className="weather-now">{TextEnum.NOW}</p>
          <div className="weather-temp-row">
            <p className="weather-temp">
              {Math.round(details?.main?.temp)} <sup>o</sup>C
            </p>
            {details.weather && details.weather.length > 0 && (
              <GeneralIcon src={weatherIcon(details?.weather[0].icon)} width="70px" height="70px" />
            )}
          </div>
        </div>
        <div className="weather-info">
          <div className="weather-info-row">
            <GeneralIcon src={calendar} />
            <p className="weather-date"> {formatTimestampToDate(details?.dt)}</p>
          </div>
          <div className="weather-info-row">
            <GeneralIcon src={location} />
            <p className="city-name">{details?.name}</p>
          </div>
        </div>
      </div>
      <div className="weather-details-wrapper">
        <p className="text-enum">{TextEnum.HIGHLIGHTS}</p>
        <div>
          <div className="weather-sun">
            <p className="text-enum">{TextEnum.SUN}</p>
            <div className="weather-sun-wrapper">
              <WeatherSunDetails
                icon={sun}
                title={TextEnum.SUNRISE}
                value={details?.sys?.sunrise}
              />
              <WeatherSunDetails icon={moon} title={TextEnum.SUNSET} value={details?.sys?.sunset} />
            </div>
          </div>
          <div className="weather-details-row">
            <WeatherDetailItem
              title={TextEnum.FEELS_LIKE}
              value={`${Math.round(details?.main?.feels_like)}°C`}
              icon={temperature}
            />
            <WeatherDetailItem
              title={TextEnum.WIND}
              value={`${Math.round(details?.wind?.speed)} km/h`}
              icon={wind}
            />
            <WeatherDetailItem
              title={TextEnum.HUMIDITY}
              value={`${Math.round(details?.main?.humidity)} %`}
              icon={humidity}
            />
            <WeatherDetailItem
              title={TextEnum.PRESSURE}
              value={`${Math.round(details?.main?.pressure)} m`}
              icon={pressure}
            />
          </div>
        </div>
      </div>
    </StyledWeatherDetails>
  ) : null;
};

export default WeatherDetails;
