import "./hourlyForecast.css";
import { WeatherData } from "./types";

interface HourlyProps {
  hourlyWeather: WeatherData | null;
  isCelsius: boolean;
}

function HourlyForecast({ isCelsius, hourlyWeather }: HourlyProps) {
  const convertToFahrenheit = (celsius: number) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  const getWeatherIcon = (icon: string, main: string) => {
    switch (main) {
      case "Snow":
        return "src/assets/snow.gif";
      case "Rain":
        return "src/assets/rain.gif";
      case "Thunderstorm":
        return "src/assets/storm.gif";
      case "Drizzle":
        return "src/assets/rain.gif";
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        return "src/assets/atmosphere.gif";
      case "Clear":
        return icon === "01d" ? "src/assets/sunny.gif" : "src/assets/night.gif";
      case "Clouds":
        return icon === "02d" || icon === "02n"
          ? "src/assets/cloudy-day.gif"
          : "src/assets/cloudy-night.gif";
      case "Clouds":
        return icon === "03d" || icon === "03n"
          ? "src/assets/clouds.gif"
          : "src/assets/clouds.gif";
      case "Clouds":
        return icon === "04d" || icon === "04n"
          ? "src/assets/clouds.gif"
          : "src/assets/clouds.gif";
      default:
        return "src/assets/weather-forecast.gif"; // Default icon
    }
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
