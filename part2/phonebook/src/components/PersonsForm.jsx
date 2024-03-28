

const PersonsForm = ({
  name,
  handleNameChange,
  number,
  handleNumberChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="number">Number: </label>
        <input value={number} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonsForm;
