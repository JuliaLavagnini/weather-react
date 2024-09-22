import "./weatherStatus.css";

interface WeatherStatusProps {
  currentWeather: any;
  isCelsius: boolean;
}

function weatherStatus({ isCelsius, currentWeather }: WeatherStatusProps) {
  const wind = currentWeather.current.wind_speed || 0;
  const sunriseTimestamp = currentWeather.current.sunrise;
  const sunsetTimestamp = currentWeather.current.sunset;
  const visibility = currentWeather.current.visibility;
  const feelsLikeCelsius = currentWeather.current.feels_like;

  let formattedSunrise = "";
  let formattedSunset = "";

  if (sunriseTimestamp && sunsetTimestamp) {
    // Convert sunrise timestamp to Date
    const sunriseDate = new Date(sunriseTimestamp * 1000);
    const sunriseHours = sunriseDate.getHours();
    const sunriseMinutes = sunriseDate.getMinutes();
    formattedSunrise = `${sunriseHours
      .toString()
      .padStart(2, "0")}:${sunriseMinutes.toString().padStart(2, "0")}`;

    // Convert sunset timestamp to Date
    const sunsetDate = new Date(sunsetTimestamp * 1000);
    const sunsetHours = sunsetDate.getHours();
    const sunsetMinutes = sunsetDate.getMinutes();
    formattedSunset = `${sunsetHours
      .toString()
      .padStart(2, "0")}:${sunsetMinutes.toString().padStart(2, "0")}`;
  } else {
    console.log(`Data not available`);
  }

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
        <p>{formattedSunrise}</p>
        <h3>Sunrise</h3>
      </div>
      <div className="col-md-4">
        <p>{formattedSunset}</p>
        <h3>Sunset</h3>
      </div>
      <div className="col-md-4">
        <p>{currentWeather && currentWeather.daily && currentWeather.daily.length > 0
                  ? isCelsius
                    ? `${Math.round(currentWeather.daily[0].temp.min)}°`
                    : `${convertToFahrenheit(currentWeather.daily[0].temp.min)}°`
                  : ""}</p>
        <h3>Min</h3>
      </div>
    </div>
  );
}

export default weatherStatus;
