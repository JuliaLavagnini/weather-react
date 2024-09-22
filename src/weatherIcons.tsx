export const getWeatherIcon = (icon: string, main: string) => {
  switch (main) {
    case "Snow":
      return "src/assets/snow.gif";
    case "Rain":
      return "src/assets/rain.gif";
    case "Thunderstorm":
      return "src/assets/storm.gif";
    case "Drizzle":
      return "src/assets/rain.gif";
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return "src/assets/atmosphere.gif";
    case "Clear":
      return icon === "01d" ? "src/assets/sunny.gif" : "src/assets/night.gif";
    case "Clouds":
      return icon === "02d" || icon === "02n"
        ? "src/assets/cloudy-day.gif"
        : "src/assets/cloudy-night.gif";
    default:
      return "src/assets/weather-forecast.gif"; // Default icon
  }
};
