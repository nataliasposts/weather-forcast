import moment from 'moment';
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

type WeatherDeatilsProps = {
  details: WeatherDateDto | null;
};

const WeatherDetails: React.FC<WeatherDeatilsProps> = ({ details }: WeatherDeatilsProps) => {
  return details ? (
    <StyledWeatherDetails>
      <div className="weather-name">
        <div>
          <p className="weather-now">{TextEnum.NOW}</p>
          <div className="weather-temp-row">
            <p className="weather-temp">
              {Math.round(details?.main?.temp)} <sup>o</sup>C
            </p>
            <GeneralIcon src={weatherIcon(details.weather[0].icon)} width="70px" height="70px" />
          </div>
        </div>
        <div className="weather-info">
          <div className="weather-info-row">
            <GeneralIcon src={calendar} />
            <p className="weather-date"> {moment(details?.dt * 1000).format('DD.MM.YYYY')}</p>
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
              <div className="weather-sun-row">
                <GeneralIcon src={sun} className="sun-icon" />
                <p className="weather-text">
                  <span className="text"> {TextEnum.SUNRISE}</span>
                  {moment(details?.sys?.sunrise * 1000).format('HH:mm')}
                </p>
              </div>
              <div className="weather-sun-row">
                <GeneralIcon src={moon} className="sun-icon" />
                <p className="weather-text">
                  <span className="text">{TextEnum.SUNSET}</span>
                  {moment(details?.sys?.sunset * 1000).format('HH:mm')}
                </p>
              </div>
            </div>
          </div>
          <div className="weather-details-row">
            <div className="weather-details">
              <p className="text-enum">{TextEnum.FEELS_LIKE}</p>
              <div className="weather-sun-row">
                <p className="weather-details-text">
                  {Math.round(details?.main?.feels_like)} <sup>o</sup>C
                </p>
                <GeneralIcon src={temperature} className="icon" />
              </div>
            </div>
            <div className="weather-details">
              <p className="text-enum">{TextEnum.WIND}</p>
              <div className="weather-sun-row">
                <p className="weather-details-text">{Math.round(details?.wind?.speed)} km/h</p>
                <GeneralIcon src={wind} className="icon" />
              </div>
            </div>
            <div className="weather-details">
              <p className="text-enum">{TextEnum.HUMIDITY}</p>
              <div className="weather-sun-row">
                <p className="weather-details-text">{Math.round(details?.main?.humidity)} %</p>
                <GeneralIcon src={humidity} className="icon" />
              </div>
            </div>
            <div className="weather-details">
              <p className="text-enum">{TextEnum.PRESSURE}</p>
              <div className="weather-sun-row">
                <p className="weather-details-text">{Math.round(details?.main?.pressure)} m</p>
                <GeneralIcon src={pressure} className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWeatherDetails>
  ) : null;
};

export default WeatherDetails;
