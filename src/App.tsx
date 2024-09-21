import Forecast from "./Forecast";
import Search from "./Search";
import WeatherStatus from "./weatherStatus";
import HourlyForecast from "./hourlyForecast";
import { useState } from "react";
import "./App.css";

function App() {
  const cityName = "London";
  const description = "Partly Cloudy";
  const temperatureCelsius = 10;
  const date = "Sunday";

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
          <Search />
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
            {isCelsius
              ? `${temperatureCelsius}°`
              : `${convertToFahrenheit(temperatureCelsius)}°`}
          </p>
          <p className="description">{description}</p>
        </div>
        <div className="col-md-5">
          <WeatherStatus isCelsius={isCelsius} />
        </div>
      </div>
      <div className="row">
        <HourlyForecast isCelsius={isCelsius}/>
      </div>
      <div className="row">
        <Forecast isCelsius={isCelsius}/>
      </div>
    </div>
  );
}

export default App;
