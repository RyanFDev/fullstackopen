import Listing from "./Listing";

const Listings = ({ persons, onDelete }) => {
  return (
    <table>
      <tbody>
        {persons.map(person => 
          <Listing
            key={person.id}
            person={person} 
            onDelete={onDelete}
          />
        )}
      </tbody>
    </table>
  )
} 

export default Listings;