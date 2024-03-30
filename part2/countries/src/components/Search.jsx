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

export default Search;
