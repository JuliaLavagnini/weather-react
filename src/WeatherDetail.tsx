import "./weather.css";
function WeatherDetail() {
  const wind = 8;
  const sunrise = "8:38";
  const sunset = "38:38";
  const rainChance = 33;
  const feelsLike = 33;
  const minimum = -3;
  return (
    <div className="weather-info">
      <div className="row status">
        <div className="col-md-4">
          <p>{wind}Km/h</p>
          <h3>Wind</h3>
        </div>
        <div className="col-md-4">
          <p>{feelsLike}°</p>
          <h3>Feels Like</h3>
        </div>
        <div className="col-md-4">
          <p>{rainChance}%</p>
          <h3>Rain</h3>
        </div>
        <div className="col-md-4">
          <p>{sunrise}</p>
          <h3>Sunrise</h3>
        </div>
        <div className="col-md-4">
          <p>{sunset}</p>
          <h3>Sunset</h3>
        </div>
        <div className="col-md-4">
          <p>{minimum}°</p>
          <h3>Min</h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetail;
