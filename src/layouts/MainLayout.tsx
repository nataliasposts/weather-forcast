import { ChangeEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import MainLayoutWrapper from './MainLayoutWrapper';
import Header from 'src/components/Header/Header';
import { useThunkAppDispatch } from 'src/store/redux-hooks/hooks';
import { fetchWeatherToday } from 'src/store/actions/fetchWeatherToday';
import { fetchWeatherWeek } from 'src/store/actions/fetchWeatherWeek';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  const [city, setCity] = useState<string>('Warsaw');
  const dispatch = useThunkAppDispatch();

  const fetchWeather = (chosenCity: string) => {
    dispatch(fetchWeatherToday(chosenCity))
      .then(() => {
        dispatch(fetchWeatherWeek(chosenCity));
      })
      .catch(() => {
        console.error(`Somethin went wrong`);
      });
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value.trim());
  }, []);

  const handleFetchClick = () => {
    if (city) {
      fetchWeather(city);
    }
  };

  return (
    <MainLayoutWrapper>
      <Header onChange={handleSearch} value={city ?? ''} onClick={handleFetchClick} />
      {children}
    </MainLayoutWrapper>
  );
};

export default MainLayout;
