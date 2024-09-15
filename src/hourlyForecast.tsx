import "./hourlyForecast.css";

function hourlyForecast({ isCelsius }: { isCelsius: boolean }) {
  const temperatureCelsius = 30;

  const convertToFahrenheit = (celsius: number) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  const temperature = isCelsius
    ? temperatureCelsius
    : convertToFahrenheit(temperatureCelsius);

  return (
    <div className="hourly">
      <div className="row gap-0 column-gap-3">
        <h2>Today's Weather</h2>
        <div className="col">
          <h3>3:00</h3>
          <img src="src/assets/clouds.png" alt="cloudy" />
          <p>{temperature}°</p>
        </div>
        <div className="col">
          <h3>4:00</h3>
          <img src="src/assets/clouds.png" alt="cloudy" />
          <p>{temperature}°</p>
        </div>
        <div className="col">
          <h3>5:00</h3>
          <img src="src/assets/clouds.png" alt="cloudy" />
          <p>{temperature}°</p>
        </div>
        <div className="col">
          <h3>6:00</h3>
          <img src="src/assets/clouds.png" alt="cloudy" />
          <p>{temperature}°</p>
        </div>
        <div className="col">
          <h3>7:00</h3>
          <img src="src/assets/clouds.png" alt="cloudy" />
          <p>{temperature}°</p>
        </div>
        <div className="col">
          <h3>8:00</h3>
          <img src="src/assets/clouds.png" alt="cloudy" />
          <p>{temperature}°</p>
        </div>
        <div className="col">
          <h3>9:00</h3>
          <img src="src/assets/clouds.png" alt="cloudy" />
          <p>{temperature}°</p>
        </div>
        <div className="col">
          <h3>10:00</h3>
          <img src="src/assets/clouds.png" alt="cloudy" />
          <p>{temperature}°</p>
        </div>
      </div>
    </div>
  );
}

export default hourlyForecast;
