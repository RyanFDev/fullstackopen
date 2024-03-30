function CountryList({ countries, onSelect }) {
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
    <ul className="country-list">
      {countries.map((country) => (
        <li key={country.name.common}>
          <a
            onClick={() => {
              onSelect(country.name.common);
            }}
          >
            {country.name.common}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
