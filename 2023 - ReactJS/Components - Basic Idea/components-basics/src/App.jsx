import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import movies from './assets/movies'
import Heading from './components/TestHeading'
import Timer from './components/Timer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Heading>Dynamic React Application</Heading>
      <Timer startTime={5} endTime={10}/>
      <MovieList headingText="Movie List" movieList={movies} secondaryText="Secondary Text"/>
     </div>
    </>
  )
}

export default App
