import "./weatherStatus.css";

function weatherStatus({ isCelsius }: { isCelsius: boolean }) {
  const wind = 8;
  const sunrise = "8:38";
  const sunset = "38:38";
  const rainChance = 33;
  const minimumCelsius = -3;

  const convertToFahrenheit = (celsius: number) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  const minimum = isCelsius
    ? minimumCelsius
    : convertToFahrenheit(minimumCelsius);

  return (
    <div className="row status">
      <div className="col-md-4">
        <p>{wind}Km/h</p>
        <h3>Wind</h3>
      </div>
      <div className="col-md-4">
        <p>{minimum}°</p>
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
  );
}

export default weatherStatus;
