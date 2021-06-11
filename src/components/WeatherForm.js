import { useState } from 'react';
import PropTypes from 'prop-types';

const WeatherForm = ({ onHandleChangeZipCode }) => {
  const [zipCode, setZipCode] = useState('');

  const handleChange = (event) => setZipCode(event.target.value);

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
          minLength='5'
          maxLength='5'
          placeholder='10036'
          value={zipCode}
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
