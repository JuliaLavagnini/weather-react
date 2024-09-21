import Forecast from "./Forecast";
import Search from "./Search";
import WeatherStatus from "./weatherStatus";
import HourlyForecast from "./hourlyForecast";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const date = "Sunday";

  const fetchWeatherData = async (city: string) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3499ef150985eccadd080ff408a018df&units=metric`
      );
      setWeatherData(response.data); // Update state with the fetched data
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData(cityName); // Fetch data for the current cityName
  }, [cityName]);

  const [isCelsius, setIsCelsius] = useState(true);

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

      {cityName ? (
        <>
          <div className="row city pb-3">
            <div className="col">
              <h1>{cityName}</h1>
            </div>
            <div className="col">
              <p>{date}</p>
            </div>
          </div>
          <div className="row title">
            <div className="col-md-3">
              <img src="src/assets/cloudy-day.gif" alt="icon" />
            </div>
            <div className="col-md-2">
              <p className="temperature">
                {weatherData && weatherData.main
                  ? isCelsius
                    ? `${Math.round(weatherData.main.temp)}°`
                    : `${convertToFahrenheit(weatherData.main.temp)}°`
                  : ""}
              </p>
              <p className="description">
                {weatherData && weatherData.weather
                  ? weatherData.weather[0].description
                  : ""}
              </p>
            </div>
            <div className="col-md-5">
              <WeatherStatus isCelsius={isCelsius} weatherData={weatherData} />
            </div>
          </div>
          <div className="row">
            <HourlyForecast isCelsius={isCelsius} weatherData={weatherData} />
          </div>
          <div className="row">
            <Forecast isCelsius={isCelsius} weatherData={weatherData} />
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
