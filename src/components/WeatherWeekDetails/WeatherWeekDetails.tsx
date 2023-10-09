import React from 'react';
import { ListForecastDto } from 'src/types/ListForecastDto';
import StyledWeatherWeekDetails from './StyledWeatherWeekDetails';
import GeneralIcon from 'src/shared/GeneralIcon/GeneralIcon';
import { weatherIcon } from 'src/shared/weatherIcon';
import { formatTimestampToShortDate, formatTimestateToHour } from '../helpers/date';

type WeatherWeekDetailsProps = {
  details: ListForecastDto[] | null;
};

const WeatherWeekDetails: React.FC<WeatherWeekDetailsProps> = ({ details }) => {
  if (!details) return null;

  const showWeatherFiveDays = (days: ListForecastDto[]) => {
    const fiveDaysInfo: ListForecastDto[] = [];
    const addedDates: Set<string> = new Set();

    for (const day of days) {
      const date = day.dt_txt.split(' ')[0];

      if (fiveDaysInfo.length >= 5) break;

      if (day.dt_txt.includes('12:00:00') && !addedDates.has(date)) {
        fiveDaysInfo.push(day);
        addedDates.add(date);
      }
    }

    return fiveDaysInfo;
  };

  return (
    <StyledWeatherWeekDetails>
      <div className="weather-week-wrapper">
        {showWeatherFiveDays(details).map((w) => (
          <div className="weather-week-details" key={w.dt}>
            <p className="week-details-text">{formatTimestateToHour(w?.dt)}</p>
            <p className="week-details-text">{formatTimestampToShortDate(w?.dt)}</p>
            {w.weather && w.weather.length > 0 && (
              <GeneralIcon src={weatherIcon(w?.weather[0].icon)} className="icon" />
            )}
            <p className="week-details-text text">
              {Math.round(w?.main?.temp)}
              <sup>o</sup>C
            </p>
          </div>
        ))}
      </div>
    </StyledWeatherWeekDetails>
  );
};

export default WeatherWeekDetails;
