import "./weatherStatus.css";

interface WeatherStatusProps {
  currentWeather: any;
  isCelsius: boolean;
}

function weatherStatus({ isCelsius, currentWeather }: WeatherStatusProps) {
  const wind = currentWeather.current.wind_speed || 0;
  const sunriseTimestamp = currentWeather.current.sunrise;
  const sunsetTimestamp = currentWeather.current.sunset;
  const humidity = currentWeather.current.humidity;
  const visibility = currentWeather.current.visibility;
  const feelsLikeCelsius = currentWeather.current.feels_like;

    // Convert sunrise timestamp to Date
    const sunriseTime = new Date(sunriseTimestamp * 1000).toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })
    console.log(sunriseTime)

    // Convert sunset timestamp to Date
    const sunsetTime = new Date(sunsetTimestamp * 1000).toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit', 
      hour12: true 
  })

  const convertToFahrenheit = (celsius: number) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  const convertM_sToKm_m = wind * 3.6;



  const feelsLike = isCelsius
    ? feelsLikeCelsius
    : convertToFahrenheit(feelsLikeCelsius);

  const visibilityConvertToKm = visibility / 1000;

  const visibilityHandle =
    visibilityConvertToKm < 1
      ? "Fog"
      : visibilityConvertToKm > 1 && visibilityConvertToKm < 2
      ? "Mist"
      : visibilityConvertToKm > 2 && visibilityConvertToKm < 5
      ? "Haze"
      : "Good";

  return (
    <div className="row status">
      <div className="col-md-4">
        <p>{Math.round(convertM_sToKm_m)} km/h</p>
        <h3>Wind</h3>
      </div>
      <div className="col-md-4">
        <p>{Math.round(feelsLike)}°</p>
        <h3>Feels Like</h3>
      </div>
      <div className="col-md-4">
        <p>{visibilityHandle}</p>
        <h3>Visibility</h3>
      </div>
      <div className="col-md-4">
        <p>{sunriseTime}</p>
        <h3>Sunrise</h3>
      </div>
      <div className="col-md-4">
        <p>{sunsetTime}</p>
        <h3>Sunset</h3>
      </div>
      <div className="col-md-4">
        <p>{humidity} %</p>
        <h3>Humidity</h3>
      </div>
    </div>
  );
}

export default weatherStatus;
