import { useState } from 'react';
import { fetchWeather } from './api';
import WeatherCard from './Components/WeatherCard';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const weather = await fetchWeather(city, setError);
      setWeather(weather);
    } catch (error) {
      setError ("City Not Found!");
    }
  };

  return (
    <div className="App">
      <h1 className="app-head">Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter City" value={city} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      {error ? (
        <p className='error'>{error}</p>
      ) : (
        <WeatherCard weather={weather} />
      )}
    </div>
  );
}

export default App;
