import GeneralIcon from 'src/shared/GeneralIcon/GeneralIcon';

type WeatherDetailItemProps = {
  title: string;
  value: string | number;
  icon: any;
};

const WeatherDetailItem: React.FC<WeatherDetailItemProps> = ({ title, value, icon }) => (
  <div className="weather-details">
    <p className="text-enum">{title}</p>
    <div className="weather-sun-row">
      <p className="weather-details-text">{value}</p>
      <GeneralIcon src={icon} className="icon" />
    </div>
  </div>
);

export default WeatherDetailItem;
