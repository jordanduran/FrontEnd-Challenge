import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WeatherForm = ({ onHandleChangeZipCode }) => {
  const [zipCode, setZipCode] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setZipCode(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onHandleChangeZipCode(zipCode);
  };

  return (
    <form className='weather-form' onSubmit={handleSubmit}>
      <label>Zip Code:</label>
      <div className='form-controls'>
        <input
          type='text'
          value={zipCode}
          placeholder='10036'
          onFocus={(event) => (event.target.placeholder = '')}
          onChange={handleChange}
        />
        <button className='weather-update-btn'>Update</button>
      </div>
    </form>
  );
};

WeatherForm.propTypes = {
  onHandleChangeZipCode: PropTypes.func.isRequired,
};

export default WeatherForm;
