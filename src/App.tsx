import Forecast from "./Forecast";
import Search from "./Search";
import WeatherStatus from "./weatherStatus";
import HourlyForecast from "./hourlyForecast";
import { useState, useEffect } from "react";
import { fetchCoordinates, fetchWeatherData } from "./api";
import "./App.css";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null); // State to handle errors
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const { lat, lon } = await fetchCoordinates(cityName); 
        const data = await fetchWeatherData(lat, lon);
        console.log(data);
        setWeatherData(data);
        setError(null);
      } catch (error) {
        setError('Could not fetch weather data. Please try again later.');
        console.error('Error fetching weather data:', error);
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
      <div className="row">
        <div className="col-md-10">
          <Search setCityName={setCityName} />
        </div>
        <div className="col-md-2">
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
            <div className="col">
              <h1>{cityName}</h1>
            </div>
            <div className="col">
              <p>{new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <div className="row title">
            <div className="col-md-3">
              <img src="src/assets/cloudy-day.gif" alt="icon" />
            </div>
            <div className="col-md-2">
              <p className="temperature">
                {weatherData && weatherData.current
                  ? isCelsius
                    ? `${Math.round(weatherData.current.temp)}°`
                    : `${convertToFahrenheit(weatherData.current.temp)}°`
                  : ""}
              </p>
              <p className="description">
                {weatherData && weatherData.current.weather
                  ? weatherData.current.weather[0].description
                  : ""}
              </p>
            </div>
            <div className="col-md-5">
              <WeatherStatus
                isCelsius={isCelsius}
                currentWeather={weatherData}
              />
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
