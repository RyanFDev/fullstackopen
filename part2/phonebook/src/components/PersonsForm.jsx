

const PersonsForm = ({
  name,
  onNameChange,
  number,
  onNumberChange,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={onNameChange} />
      </div>
      <div>
        <label htmlFor="number">Number: </label>
        <input value={number} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonsForm;
