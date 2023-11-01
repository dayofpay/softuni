import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import movies from './assets/movies'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>
        Dynamic React Application
      </h1>

      <MovieList headingText="Movie List" movieList={movies} secondaryText="Secondary Text"/>
     </div>
    </>
  )
}

export default App
