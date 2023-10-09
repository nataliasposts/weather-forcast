import React from 'react';
import { RootState } from 'src/store';
import { useAppSelector } from 'src/store/redux-hooks/hooks';
import StyledMainPage from './StyledMainPage';
import WeatherDetails from 'src/components/WeatherDetails/WeatherDetails';
import WetherWeekDetails from 'src/components/WeatherWeekDetails/WeatherWeekDetails';

const MainPage: React.FC = () => {
  const weatherData = useAppSelector((state: RootState) => state.weatherToday.data);
  const weatherWeek = useAppSelector((state: RootState) => state.weatherWeek.data);
  const weatherDataLoading = useAppSelector((state: RootState) => state.weatherToday.loading);
  const weatherWeekLoading = useAppSelector((state: RootState) => state.weatherWeek.loading);
  const isLoading = weatherDataLoading || weatherWeekLoading;

  return (
    <StyledMainPage>
      <div className="container">
        {isLoading ? (
          <p className="error-text">Loading..</p>
        ) : (
          <div className="weather-wrapper">
            <WeatherDetails details={weatherData} />
            <WetherWeekDetails details={weatherWeek} />
          </div>
        )}
      </div>
    </StyledMainPage>
  );
};

export default MainPage;
