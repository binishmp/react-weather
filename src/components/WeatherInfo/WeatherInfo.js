import React from 'react';
import { useSelector } from 'react-redux';
import WeatherCurrentInfo from '../WeatherCurrentInfo/WeatherCurrentInfo';
import WeatherForecast from '../WeatherForecast/WeatherForecast';
import WeatherLocationInfo from '../WeatherLocationInfo/WeatherLocationInfo';
import './WeatherInfo.css';

const WeatherInfo = () => {
  const weatherData = useSelector((state) => state.weather.weatherInfo);
  return (
    weatherData && 
    <div className='weatherInfo'>
      <div className='weatherInfo__top'>
        <WeatherLocationInfo location={weatherData.location}/>
        <WeatherCurrentInfo current={weatherData.current} />
        </div>
        <WeatherForecast forecast={weatherData.forecast} />
    </div>
  )
}

export default WeatherInfo;
export const MemoizedWeatherInfo = React.memo(WeatherInfo);