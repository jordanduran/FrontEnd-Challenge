import { Fragment, useState, useEffect } from 'react';
import WeatherForm from './components/WeatherForm';

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [currentZipCode, setCurrentZipCode] = useState('10036');

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${currentZipCode},us&appid=00ab9760d6984c9b493982a245485892`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  }, [currentZipCode]);

  const handleChangeZipCode = (enteredZipcode) => {
    if (currentZipCode !== enteredZipcode) {
      setCurrentZipCode(enteredZipcode);
    }
  };

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
      <p className='weather-main'>{weatherData.main.temp} &#176;</p>
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

export default App;
