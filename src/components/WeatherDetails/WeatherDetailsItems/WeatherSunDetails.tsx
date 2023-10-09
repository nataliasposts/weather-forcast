import GeneralIcon from 'src/shared/GeneralIcon/GeneralIcon';
import { formatTimestampToTime } from '../../helpers/date';

type WeatherSunDetailsProps = {
  title: string;
  value: number;
  icon: string;
};

const WeatherSunDetails: React.FC<WeatherSunDetailsProps> = ({
  icon,
  title,
  value
}: WeatherSunDetailsProps) => (
  <div className="weather-sun-row">
    <GeneralIcon src={icon} className="sun-icon" />
    <p className="weather-text">
      <span className="text">{title}</span>
      {formatTimestampToTime(value)}
    </p>
  </div>
);

export default WeatherSunDetails;
