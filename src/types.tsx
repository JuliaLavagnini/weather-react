export interface WeatherData {
  current: {
    dt: number;
    temp: number;
    sunset: number;
    sunrise: number;
    feels_like: number;
    visibility: number;
    humidity: number;
    wind_speed: number;
    weather: Array<{
      main: string;
      icon: string;
      description: string;
    }>;
  };
  hourly: Array<{
    dt: number;
    temp: number;
    weather: Array<{
      main: string;
      icon: string;
    }>;
  }>;
  daily: Array<{
    dt: number;
    temp: {
      day: number;
      min: number;
      max: number;
    };
    weather: Array<{
      main: string;
      icon: string;
    }>;
  }>;
}
