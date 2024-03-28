import { useState } from 'react'

const App = () => {
  // State
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  // Filter persons by name or number
  const personsToShow = persons.filter(person => {
    return person.name.toLowerCase().includes(filter.toLowerCase()) || person.number.includes(filter)
  })

  const addListing = (event) => {
    event.preventDefault()
    // Validation
    if (newName === '') {
      alert('Please enter a name.')
      return
    }
    if (newNumber === '') {
      alert('Please enter a number.')
      return
    }
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} has already been added.`)
      return
    }

    // Add new person
    const person = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    setPersons(persons.concat(person))

    // Reset form
    setNewName('')
    setNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      filter by name or number: <input value={filter} onChange={handleFilterChange} />
      <h2>Add a new listing</h2>
      <form onSubmit={addListing}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {personsToShow.map(person => 
            <Listing key={person.id} person={person} />
          )}
        </tbody>
      </table>
    </div>
  )
}

const Listing = ({ person }) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
    </tr>
  )
}

export default App