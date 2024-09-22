export const getWeatherIcon = (icon: string, main: string) => {
  switch (main) {
    case "Snow":
      return "public/assets/snow.gif";
    case "Rain":
      return "public/assets/rain.gif";
    case "Thunderstorm":
      return "public/assets/storm.gif";
    case "Drizzle":
      return "public/assets/rain.gif";
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return "public/assets/atmosphere.gif";
    case "Clear":
      return icon === "01d" ? "public/assets/sunny.gif" : "public/assets/night.gif";
    case "Clouds":
      return icon === "02d" || icon === "02n"
        ? "public/assets/cloudy-day.gif"
        : "public/assets/cloudy-night.gif";
    default:
      return "public/assets/weather-forecast.gif"; // Default icon
  }
};
