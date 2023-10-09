import React from 'react';
import { RootState } from 'src/store';
import { useAppSelector } from 'src/store/redux-hooks/hooks';
import StyledMainPage from './StyledMainPage';
import WeatherDetails from 'src/components/WeatherDetails/WeatherDetails';
import WetherWeekDetails from 'src/components/WeatherWeekDetails/WeatherWeekDetails';
import GeneralIcon from 'src/shared/GeneralIcon/GeneralIcon';
import { sadFace } from 'src/shared/GeneralIcon/icons.constants';

const MainPage: React.FC = () => {
  const weatherData = useAppSelector((state: RootState) => state.weatherToday.data);
  const weatherWeek = useAppSelector((state: RootState) => state.weatherWeek.data);

  return (
    <StyledMainPage>
      <div className="container">
        {weatherData && weatherWeek?.length ? (
          <div className="weather-wrapper">
            <WeatherDetails details={weatherData} />
            <WetherWeekDetails details={weatherWeek} />
          </div>
        ) : (
          <div className="error-wrapper">
            <GeneralIcon src={sadFace} width="50px" height="50px" className="error-icon" />
            <p className="error-text">This city was not found. Please write a correct city</p>
          </div>
        )}
      </div>
    </StyledMainPage>
  );
};

export default MainPage;
