export interface WeatherData {
  current: {
    dt: number;
    temp: number;
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
