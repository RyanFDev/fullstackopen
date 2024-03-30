import { useEffect, useState } from 'react';
import countriesService from './services/countries';
import './App.css';

function Search({ value, onChange }) {
  return (
    <input
      type="text"
      className="search"
      placeholder="Search for a country..."
      value={value}
      onChange={onChange}
    />
  );
}

function CountryList({ countries }) {
  // Don't show list if there is only one country
  if (countries.length === 1) {
    return null;
  }
  // No countries found
  if (countries.length === 0) {
    return <p>No countries found.</p>;
  }
  // Too many countries found
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  // Show list of countries
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cioc}>{country.name.common}</li>
      ))}
    </ul>
  );
}

function CountryDetails({ country }) {
  if (!country || Object.keys(country).length === 0) {
    return null;
  }
  return (
    <div className="card">
      <div className="country-details">
        <div className="country-title">
          <img
            src={country.flags.png}
            alt={`${country.name.common} Flag`}
            className="flag"
          />
          <h2>{country.name.common}</h2>
        </div>
        <table>
          <tbody>
            <tr>
              <td>Population:</td>
              <td>{country.population}</td>
            </tr>
            <tr>
              <td>Region:</td>
              <td>{country.region}</td>
            </tr>
            <tr>
              <td>Capital:</td>
              <td>{country.capital}</td>
            </tr>
            <tr className="languages">
              <td>Languages:</td>
              <td>
                <ul>
                  {Object.values(country.languages).map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function App() {
  // State
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  if (countries.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Country Lookup</h1>
      {/* Search Input */}
      <Search
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Search Results */}
      <CountryList countries={filteredCountries} />

      {/* Country Details */}
      <CountryDetails country={selectedCountry} />
    </>
  );
}

export default App;
