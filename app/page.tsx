import Background from '@/components/Background';
import { getWeatherData } from '@/utils/WeatherApi';
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ForecastData {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}

export const revalidate = 10;
export const dynamic = 'force-dynamic';

export default async function Home() {

  const {currentWeatherData, forecastWeatherData} = await getWeatherData();

  const description = currentWeatherData.weather[0].description;

  const capitalizedWords = description.split(' ').map((word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  const capitalizedDescription = capitalizedWords.join(' ');

  const date = new Date();
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const showTime = hours + ':' + minutes;

  function formatForecastDate(dateString: string) {
    const forecastDate = new Date(dateString);
    return forecastDate.toLocaleDateString('en-EN', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  const renderForecastCard = (forecast: ForecastData) => (
    <Card className='w-[50%] md:w-[20%] mb-5 md:mb-0 text-sm md:text-base' key={forecast.dt}>
      <CardContent className='mt-5'>
        <p>{formatForecastDate(forecast.dt_txt)}</p>
        <p>{Math.round(forecast.main.temp)}° - {forecast.weather[0].description}</p>
        <p>Humidity: %{forecast.main.humidity}</p>
        <div>
          <Image 
          src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} 
          alt="Weather Icon" 
          width={100}
          height={100}
          style={{ width: '50%', height: 'auto' }}/>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <main className='bg-gradient-to-r from-[#243c5a] to-[#1700ab]'>
      <div className='hidden md:block'>
      <Background background={currentWeatherData.weather[0].icon}/>
      </div>
      <div className='relative mx-5 md:mx-10 py-5 opacity-80'>
        <Card>
          <CardContent className='text-center mt-5 text-5xl'>
            <p>Beytepe, Ankara, {showTime} GMT+03:00</p>
          </CardContent>
        </Card>
      </div>
      <div className='relative block md:flex flex-wrap justify-between mx-5 md:mx-10 mt-10 opacity-80'>
        <Card className='md:w-[30%] mb-5 md:mb-0'>
          <CardHeader>
            <CardTitle>{Math.round(currentWeatherData.main.temp)}°</CardTitle>
            <CardDescription>{capitalizedDescription}</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-wrap'>
            <div className='mr-10'>
              <p>Minimum Temperature: {Math.round(currentWeatherData.main.temp_min)}</p>
              <p>Maximum Temperature: {Math.round(currentWeatherData.main.temp_max)}</p>
              <p>Apparent Temperature: {Math.round(currentWeatherData.main.feels_like)}</p>
            </div>
            <div>
              <Image
              src={`https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`} 
              alt="Weather Icon"
              width={100}
              height={100}
              style={{ width: '100%', height: 'auto' }} />
            </div>
          </CardContent>
        </Card>

        <Card className='md:w-[30%] mb-5 md:mb-0'>
          <CardHeader>
            <CardTitle>Wind & Cloudiness</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p>Wind Speed: {currentWeatherData.wind.speed} meter/sec</p>
              <p>Wind Direction: {currentWeatherData.wind.deg} degrees</p>
              <p>Cloudiness: %{currentWeatherData.clouds.all}</p>
              <p>Pressure: {currentWeatherData.main.pressure} hPa</p>
              <p>Humidity: %{currentWeatherData.main.humidity}</p>
            </div>
          </CardContent>
        </Card>

        <Card className='md:w-[30%] mb-5 md:mb-0'>
          <CardHeader>
            <CardTitle>Rain & Snow</CardTitle>
          </CardHeader>
          <CardContent>
            {currentWeatherData.rain ? (
              <div>
                <p>Rain volume for the last 1 hour: ${currentWeatherData.rain['1h']} mm</p>
                <p>Rain volume for the last 3 hour: ${currentWeatherData.rain['3h']} mm</p>
              </div>
            ) : currentWeatherData.snow ? (
              <div>
                <p>Snow volume for the last 1 hour: ${currentWeatherData.snow['1h']} mm</p>
                <p>Snow volume for the last 3 hour: ${currentWeatherData.snow['3h']} mm</p>
              </div>
            ) : (
              <p>No rain & snow data available</p>
            )}
          </CardContent>
        </Card>
      </div>
      <div className='relative'>
       <Card className='w-[95%] flex flex-wrap mx-[2.5%] md:mx-10 mt-10 justify-center opacity-80 bg-transparent border-none'>
          {[
            forecastWeatherData.list[7],
            forecastWeatherData.list[15],
            forecastWeatherData.list[23],
            forecastWeatherData.list[31],
            forecastWeatherData.list[39],
          ].map(renderForecastCard)}  
        </Card>
      </div>
    </main>
  )
}