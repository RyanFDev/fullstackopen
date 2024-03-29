const Listing = ({ person, onDelete }) => {
  return (
    <tr>
      {/* 
        I'm not sure if this is the best place to add the person.id 
        or if I should have done it in my Listings.jsx? 
        I feel this is a case of "lifting state up" but I'm not sure.
        My confusion stems from your notes app example where Note.jsx
        only receives the toggleImportant function reference and the id
        is set in the App.jsx file.
      */}
      <td><button onClick={() => onDelete(person.id)} style={{ zoom: '0.75', background: 'red', color: 'white' }}>&times;</button></td>
      <td>{person.name}</td>
      <td>{person.number}</td>
    </tr>
  )
}

export default Listing