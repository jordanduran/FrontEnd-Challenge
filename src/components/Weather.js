import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [currentZipCode, setCurrentZipCode] = useState('10036');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?zip=${currentZipCode},us&appid=${process.env.REACT_APP_API_KEY}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [currentZipCode]);

  const handleChangeZipCode = (enteredZipcode) =>
    setCurrentZipCode(enteredZipcode);

  const weatherOutput = Object.keys(weatherData).length && (
    <Fragment>
      <div className='weather-header'>
        <h1 className='weather-city'>{weatherData.name}</h1>
        <img
          className='weather-icon'
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].main}
        />
      </div>
      <p className='weather-description'>
        {weatherData.weather[0].description}
      </p>
      <p className='weather-main'>
        {weatherData.main.temp} <span className='degree-symbol'>&#176;</span>
      </p>
      <div className='weather-temps'>
        <p>{weatherData.main.temp_min} &#176;</p>
        <p>{weatherData.main.temp_max} &#176;</p>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <div className='container'>{weatherOutput}</div>
      <div className='weather-form-container'>
        <WeatherForm onHandleChangeZipCode={handleChangeZipCode} />
      </div>
    </Fragment>
  );
};

export default Weather;
