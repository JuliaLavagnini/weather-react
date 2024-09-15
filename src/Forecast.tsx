import "./forecast.css";

function Forecast({ isCelsius }: { isCelsius: boolean }) {
  const minimumCelsius = 10;
  const maximumCelsius = 24;

  const convertToFahrenheit = (celsius: number) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  const minimum = isCelsius
    ? minimumCelsius
    : convertToFahrenheit(minimumCelsius);

  const maximum = isCelsius
    ? maximumCelsius
    : convertToFahrenheit(maximumCelsius);

  return (
    <div className="forecast" id="forecast">
      <h2>Next 5 days</h2>
      <div className="row">
        <div className="col">
          <p>Monday</p>
        </div>
        <div className="col">
          <img src="src/assets/storm.png" alt="storm" />
        </div>
        <div className="col">
          <p>{minimum}°</p>
          <h3>Min</h3>
        </div>
        <div className="col">
          <p>{maximum}°</p>
          <h3>Max</h3>
        </div>
        <div className="col">
          <p>100%</p>
          <h3>Rain</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>Monday</p>
        </div>
        <div className="col">
          <img src="src/assets/storm.png" alt="storm" />
        </div>
        <div className="col">
          <p>{minimum}°</p>
          <h3>Min</h3>
        </div>
        <div className="col">
          <p>{maximum}°</p>
          <h3>Max</h3>
        </div>
        <div className="col">
          <p>100%</p>
          <h3>Rain</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>Monday</p>
        </div>
        <div className="col">
          <img src="src/assets/storm.png" alt="storm" />
        </div>
        <div className="col">
          <p>{minimum}°</p>
          <h3>Min</h3>
        </div>
        <div className="col">
          <p>{maximum}°</p>
          <h3>Max</h3>
        </div>
        <div className="col">
          <p>100%</p>
          <h3>Rain</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>Monday</p>
        </div>
        <div className="col">
          <img src="src/assets/storm.png" alt="storm" />
        </div>
        <div className="col">
          <p>{minimum}°</p>
          <h3>Min</h3>
        </div>
        <div className="col">
          <p>{maximum}°</p>
          <h3>Max</h3>
        </div>
        <div className="col">
          <p>100%</p>
          <h3>Rain</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>Monday</p>
        </div>
        <div className="col">
          <img src="src/assets/storm.png" alt="storm" />
        </div>
        <div className="col">
          <p>{minimum}°</p>
          <h3>Min</h3>
        </div>
        <div className="col">
          <p>{maximum}°</p>
          <h3>Max</h3>
        </div>
        <div className="col">
          <p>100%</p>
          <h3>Rain</h3>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
