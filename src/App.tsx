import Forecast from "./Forecast";
import Search from "./Search";
import WeatherStatus from "./weatherStatus";
import HourlyForecast from "./hourlyForecast";
import { useState, useEffect } from "react";
import { fetchCoordinates, fetchWeatherData } from "./api";
import { getWeatherIcon } from "./weatherIcons";
import "./App.css";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const { lat, lon } = await fetchCoordinates(cityName);
        const data = await fetchWeatherData(lat, lon);
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (cityName) {
      getWeatherData();
    }
  }, [cityName]);

  const handleUnitChange = (unit: string) => {
    setIsCelsius(unit === "Celsius");
  };

  const convertToFahrenheit = (celsius: number) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  return (
    <div className="weather-app">
      <div className="row search">
        <div className="col-md-10 col-sm-9 col-8">
          <Search setCityName={setCityName} />
        </div>
        <div className="col-md-2 col-sm-3 col-4 d-flex justify-content-center">
          <button
            className="btn btn-dark"
            onClick={() => handleUnitChange("Celsius")}
          >
            °C
          </button>
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => handleUnitChange("Fahrenheit")}
          >
            °F
          </button>
        </div>
      </div>

      {weatherData && cityName ? (
        <>
          <div className="row city pb-3">
        <div className="col-md-12 col-sm-12 col-12">
              <h1>
                <span className="small-weight">Right now in</span> {cityName}
              </h1>
            </div>
            <div className="col-md-6 pt-2">
              <p className="description">
                {weatherData && weatherData.current.weather
                  ? weatherData.current.weather[0].description
                  : ""}
              </p>
            </div>
          </div>
          <div className="row title">
        <div className="col-md-3 col-sm-6 col-6">
          {weatherData && weatherData.current && weatherData.current.weather ? (
                <img
                  src={getWeatherIcon(
                    weatherData.current.weather[0].icon,
                    weatherData.current.weather[0].main
                  )}
                  alt={weatherData.current.weather[0].main}
                />
              ) : (
                ""
              )}
            </div>
        <div className="col-md-4 col-sm-6 col-6">
              <p className="temperature">
                {weatherData && weatherData.current
                  ? isCelsius
                    ? `${Math.round(weatherData.current.temp)}°`
                    : `${convertToFahrenheit(weatherData.current.temp)}°`
                  : ""}
                <span className="opacity"> | </span>
                <span className="minus">
                  {weatherData &&
                  weatherData.daily &&
                  weatherData.daily.length > 0
                    ? isCelsius
                      ? `${Math.round(weatherData.daily[0].temp.min)}°`
                      : `${convertToFahrenheit(weatherData.daily[0].temp.min)}°`
                    : ""}
                </span>
              </p>
            </div>
        <div className="col-md-5 col-sm-0">
          <WeatherStatus isCelsius={isCelsius} currentWeather={weatherData} />
            </div>
          </div>
          <div className="row">
            <HourlyForecast isCelsius={isCelsius} hourlyWeather={weatherData} />
          </div>
          <div className="row">
            <Forecast isCelsius={isCelsius} fiveDayForecast={weatherData} />
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
    </div>
  );
}

export default App;
