import { useState } from 'react'
import './App.css'

const Header = ({ text }) => <h1>{text}</h1>
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({ text, value }) => (
  <tr>
    <td><b>{text}:</b></td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  // Calculate the total, average and positive feedback
  const total = good + neutral + bad;
  const average = ((good - bad) / total).toFixed(1);
  const positive = ((good / total) * 100).toFixed(1) + ' %';


  // If no feedback has been given, return a message
  if (total === 0) {
    return <p><i>No feedback given</i></p>
  }

  // Otherwise return the statistics
  return (
    <table id="Statistics">
      <tbody>
        <StatisticLine text='Good' value={good} />
        <StatisticLine text='Neutral' value={neutral} />
        <StatisticLine text='Bad' value={bad} />
        <StatisticLine text='All' value={total} />
        <StatisticLine text='Average' value={average} />
        <StatisticLine text='Positive' value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Header text='Give Feedback' />
      <Button text='good' onClick={() => setGood(good + 1)} />
      <Button text='neutral' onClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' onClick={() => setBad(bad + 1)} />
      <Header text='Statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App