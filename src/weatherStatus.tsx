import "./weatherStatus.css";

interface WeatherStatusProps {
  weatherData: any;
  isCelsius: boolean;
}

function weatherStatus({ isCelsius, weatherData }: WeatherStatusProps) {
  const wind = weatherData?.wind?.speed || 0;
  const sunriseTimestamp = weatherData?.sys?.sunrise;
  const sunsetTimestamp = weatherData?.sys?.sunset;
  const visibility = weatherData?.visibility;
  const minimumCelsius = weatherData?.main?.temp_min;
  const feelsLikeCelsius = weatherData?.main?.feels_like;

  let formattedSunrise = '';
  let formattedSunset = '';


  if (sunriseTimestamp && sunsetTimestamp) {
  // Convert sunrise timestamp to Date
  const sunriseDate = new Date(sunriseTimestamp * 1000); // Convert seconds to milliseconds
  const sunriseHours = sunriseDate.getHours();
  const sunriseMinutes = sunriseDate.getMinutes();
  formattedSunrise = `${sunriseHours.toString().padStart(2, '0')}:${sunriseMinutes.toString().padStart(2, '0')}`;

  // Convert sunset timestamp to Date
  const sunsetDate = new Date(sunsetTimestamp * 1000);
  const sunsetHours = sunsetDate.getHours();
  const sunsetMinutes = sunsetDate.getMinutes();
  formattedSunset = `${sunsetHours.toString().padStart(2, '0')}:${sunsetMinutes.toString().padStart(2, '0')}`;

  console.log(`Data not available`);
} 






  const convertToFahrenheit = (celsius: number) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  const convertM_sToKm_m = wind * 3.6;

  const minimum = isCelsius
    ? minimumCelsius
    : convertToFahrenheit(minimumCelsius);

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
        <p>{Math.round(minimum)}°</p>
        <h3>Min</h3>
      </div>
    </div>
  );
}

export default weatherStatus;
