export const getWeatherData = async () => {
    const apiKey = process.env.PUBLIC_WEATHER_API_KEY;
    const apiUrl = 'https://api.openweathermap.org/data/2.5';
  
    const makeWeatherApiCall = async (endpoint: string) => {
      const response = await fetch(`${apiUrl}${endpoint}&appid=${apiKey}&units=metric`);
      return response.json();
    };
  
    const getCurrentWeatherData = async () => {
      const currentWeatherData = await makeWeatherApiCall(`/weather?lat=39.8674482&lon=32.7353845`);
      return currentWeatherData;
    };
  
    const getForecastWeatherData = async () => {
      const forecastWeatherData = await makeWeatherApiCall(`/forecast?lat=39.8674482&lon=32.7353845`);
      return forecastWeatherData;
    };
  
    const [currentWeatherData, forecastWeatherData] = await Promise.all([
      getCurrentWeatherData(),
      getForecastWeatherData(),
    ]);
  
    return { currentWeatherData, forecastWeatherData };
  };