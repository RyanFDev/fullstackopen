const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <label htmlFor="filter">Filter by name or number: </label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;