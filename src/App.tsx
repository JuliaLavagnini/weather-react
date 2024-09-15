import Forecast from "./Forecast";
import Search from "./Search";
import WeatherDetail from "./weatherDetail";
import HourlyForecast from "./hourlyForecast";
import "./App.css";

function App() {
  const cityName = "London";
  const description = "Partly Cloudy";
  const temperature = 10;
  const date = "Sunday";
  return (
    <div className="weather-app">
      <div className="row">
        <div className="col-md-10">
          <Search />
        </div>
        <div className="col-md-2">
          <div className="btn btn-dark cel active">°C</div>
          <div className="btn btn-outline-dark ms-2 fah">°F</div>
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
      <div className="row">
        <div className="col-md-3">
          <video id="banner-video" autoPlay muted playsInline loop>
            <source src="src/assets/cloudy-day.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-md-2">
          <p className="temperature">{temperature}°</p>
          <p className="description">{description}</p>
        </div>
        <div className="col-md-5">
          <WeatherDetail />
        </div>
      </div>
      <div className="row">
        <HourlyForecast />
      </div>
      <div className="row">
        <Forecast />
      </div>
    </div>
  );
}

export default App;
