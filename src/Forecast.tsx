import "./forecast.css";
import { WeatherData } from "./types";
import { getWeatherIcon } from "./weatherIcons";

interface ForecastProps {
  fiveDayForecast: WeatherData | null;
  isCelsius: boolean;
}

function Forecast({ isCelsius, fiveDayForecast }: ForecastProps) {
  const convertToFahrenheit = (celsius: number) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  return (
    <div className="forecast">
      <h2>Next 5 days</h2>

      {fiveDayForecast?.daily.slice(1, 6).map((forecastData, index) => {
        const day = new Date(forecastData.dt * 1000).toLocaleString("en-US", {
          weekday: "short",
        });

        const minTemp = isCelsius
          ? Math.round(forecastData.temp.min)
          : convertToFahrenheit(forecastData.temp.min);

        const maxTemp = isCelsius
          ? Math.round(forecastData.temp.max)
          : convertToFahrenheit(forecastData.temp.max);

        const icon = getWeatherIcon(
          forecastData.weather[0].icon,
          forecastData.weather[0].main
        );

        return (
          <div className="row" key={index}>
            <div className="col-3">
              <p>{day}</p>
            </div>
            <div className="col-3">
              <img src={icon} alt={forecastData.weather[0].main} />
            </div>
            <div className="col-3">
              <p>{minTemp}°</p>
              <h3>Min</h3>
            </div>
            <div className="col-3">
              <p>{maxTemp}°</p>
              <h3>Max</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;
