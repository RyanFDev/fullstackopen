import Listing from "./Listing";

const Listings = ({ persons }) => {
  return (
    <table>
      <tbody>
        {persons.map(person => 
          <Listing key={person.id} person={person} />
        )}
      </tbody>
    </table>
  )
} 

export default Listings;