import axios from "axios";
import { WeatherData } from './types';

const API_KEY = "cabdbda40038ba7d1165b953b1c7bd6c"; // Replace with your OpenWeather API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/onecall";

export async function fetchCoordinates(cityName: string) {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch coordinates");
  }
  const data = await response.json();
  if (data.length === 0) {
    throw new Error("City not found");
  }
  return { lat: data[0].lat, lon: data[0].lon };
}

export const fetchWeatherData = async (
  lat: number,
  lon: number
): Promise<WeatherData> => {
  const response = await axios.get(
    `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  return response.data;
};