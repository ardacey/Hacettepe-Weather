import axios from 'axios';

const apiKey = process.env.PUBLIC_WEATHER_API_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5';

const makeWeatherApiCall = async (endpoint: string) => {
    const response = await axios.get(`${apiUrl}${endpoint}&appid=${apiKey}&units=metric`);
    return response.data;
  };
  
export const getCurrentWeatherData = async () => {
    const currentWeatherData = await makeWeatherApiCall(`/weather?lat=39.8674482&lon=32.7353845`);
    return currentWeatherData;
  };
  
export const getForecastWeatherData = async () => {
    const forecastWeatherData = await makeWeatherApiCall(`/forecast?lat=39.8674482&lon=32.7353845`);
    return forecastWeatherData;
  };
  