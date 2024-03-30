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

export default CountryDetails;
