import { useState } from 'react'
import './App.css'

const Header = ({ text }) => <h1>{text}</h1>
const Anecdote = ({ text, points }) => (
  <>
    <h3>{text}</h3>
    <p>Has {points} votes</p>
  </>
)
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  // Function to generate a random index
  const randomIndex = (arr) => Math.floor(Math.random() * arr.length)
  // Function to generate a random anecdote
  const randomAnecdote = (init) => {
    let newIndex = randomIndex(anecdotes);
    // Make sure the new index is different from the current one
    while (!init && newIndex === selected) {
      newIndex = randomIndex(anecdotes);
    }
    return newIndex;
  }

  const [selected, setSelected] = useState(randomAnecdote(true))
  // Create an array of points with the same length as the anecdotes array
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const mostLikedIndex = points.reduce((maxIndex, currentValue, currentIndex) => {
    if (currentValue > points[maxIndex]) {
      return currentIndex;
    } else {
      return maxIndex;
    }
  }, 0);

  const handleVote = (selected) => {
    const pointsCopy = [...points];
    pointsCopy[selected] += 1;
    setPoints(pointsCopy);
  }

  return (
    <div>
      <Header text='Random Anecdote' />
      <Anecdote text={anecdotes[selected]} points={points[selected]} />
      <Button text='Vote' onClick={() => {handleVote(selected)} } />
      <Button text='Anecdote Me' onClick={() => setSelected(randomAnecdote())} />
      <Header text="Most Liked Anecdote" />
      <Anecdote text={anecdotes[mostLikedIndex]} points={points[mostLikedIndex]} />
    </div>
  )
}

export default App