import './App.css'
import MovieCard from './components/MovieCard.jsx'

function App() {
  return (
    // <> this is a fragment which allows to have multiple same level elements acting like a parent element
    <>
      <div>
        <h1>ey son work smart!</h1>
      </div>
      <div>
        <h2>you will win</h2>
      </div>
      <Text properties="VEMS"/>
      <Text properties="My school"></Text>
      {/* this is how you insert a component in react */}
      <MovieCard movie={{title: "Star War", release_date: "2020"}}/>
    </>
  )
}

function Text({properties}) {
  return (
    <div>
      <h1>Text Component</h1>
      <p>{properties}</p>
    </div>
  )
}

export default App
