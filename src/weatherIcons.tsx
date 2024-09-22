export const getWeatherIcon = (icon: string, main: string) => {
  switch (main) {
    case "Snow":
      return "/assets/snow.gif";
    case "Rain":
      return "/assets/rain.gif";
    case "Thunderstorm":
      return "/assets/storm.gif";
    case "Drizzle":
      return "/assets/rain.gif";
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return "/assets/atmosphere.gif";
    case "Clear":
      return icon === "01d" ? "/assets/sunny.gif" : "/assets/night.gif";
    case "Clouds":
      return icon === "02d" || icon === "02n"
        ? "/assets/cloudy-day.gif"
        : "/assets/cloudy-night.gif";
    default:
      return "/assets/weather-forecast.gif"; // Default icon
  }
};
