import { useEffect, useState } from 'react';
import countriesService from './services/countries';
import weatherService from './services/weather';
import './App.css';

import CountryDetails from './components/CountryDetails';
import CountryList from './components/CountryList';
import Search from './components/Search';

function WeatherReport({ weather, capital }) {
  if (!weather || Object.keys(weather).length === 0) {
    return null;
  }

  return (
    <div className="card weather-report">
      <h2>Weather in {capital}</h2>
      <div className="weather-status flex gap-sm">
        <p className="flex-column">
          <b>Temperature</b>
          <span className="stats">{weather.main.temp}&deg;C</span>
        </p>
        <p className="flex-column">
          <b>Wind</b>
          <span className="stats flex gap-xs">
            {weather.wind.speed} m/s
            <div style={{ transform: `rotate(${weather.wind.deg}deg)` }}>
              &#8607;
            </div>
          </span>
        </p>
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
    </div>
  );
}

function App() {
  // State
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [weather, setWeather] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    countriesService
      .getAll()
      .then((initialCountries) => {
        console.log(initialCountries);
        setCountries(initialCountries);
      })
      .catch((error) => {
        alert(`Unexpected error: ${error.message}`);
      });
  }, []);

  // Filter countries by search term
  useEffect(() => {
    // No search term so no need to filter
    if (searchTerm === '') {
      setFilteredCountries([]);
      return;
    }
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filteredCountries);

    // If only one country is found, select it
    if (filteredCountries.length === 1) {
      setSelectedCountry(filteredCountries[0]);
    }
  }, [countries, searchTerm]);

  // Fetch weather data for selected country on selection
  useEffect(() => {
    if (!selectedCountry) {
      return;
    }
    const [lat, lon] = selectedCountry.latlng;
    weatherService
      .getWeather(lat, lon)
      .then((weather) => {
        console.log('weather', weather);
        setWeather(weather);
      })
      .catch((error) => {
        alert(`Failed to fetch weather data: ${error.message}`);
      });
  }, [selectedCountry]);

  // Countries have not been fetched yet
  if (countries.length === 0) {
    return <h1>Loading...</h1>;
  }
  // Render app once countries loaded
  return (
    <>
      <h1>Country Lookup</h1>

      {/* Search Input */}
      <Search
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Search Results */}
      <CountryList
        countries={filteredCountries}
        onSelect={setSearchTerm}
      />

      {/* Country Details */}
      <CountryDetails country={selectedCountry} />

      {/* Weather Report */}
      <WeatherReport
        weather={weather}
        capital={selectedCountry.capital}
      />
    </>
  );
}

export default App;
