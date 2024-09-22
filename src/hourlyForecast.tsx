import "./hourlyForecast.css";
import { WeatherData } from "./types";
import { getWeatherIcon } from './weatherIcons';

interface HourlyProps {
  hourlyWeather: WeatherData | null;
  isCelsius: boolean;
}

function HourlyForecast({ isCelsius, hourlyWeather }: HourlyProps) {
  const convertToFahrenheit = (celsius: number) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  

  return (
    <div className="hourly">
      <div className="row gap-0 column-gap-3">
        <h2>Today's Weather</h2>

        {hourlyWeather?.hourly.slice(0, 8).map((hourData, index) => {
          const hour = new Date(hourData.dt * 1000).getHours(); // Convert dt from seconds to hours
          const temperature = isCelsius
            ? hourData.temp
            : convertToFahrenheit(hourData.temp);
          const icon = getWeatherIcon(hourData.weather[0].icon, hourData.weather[0].main);


          return (
            <div className="col" key={index}>
              <h3>{hour}:00</h3>
              <img src={icon} alt={hourData.weather[0].main} />
              <p>{Math.round(temperature)}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HourlyForecast;
