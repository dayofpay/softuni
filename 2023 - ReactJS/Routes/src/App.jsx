import {Routes,Route} from 'react-router-dom';
import Navigation from './components/Navigation'
// import './App.css'
import About from './components/About';
import Home from './components/Home';
import Swapi from './components/Swapi';

function App() {


  return (
    <>
    <Navigation />

    <Routes>
      <Route path='/' element={<Home />}>Home</Route>
      <Route path="/about" element={<About />}>About</Route>
      <Route path='/swapi' element={<Swapi />}>SWAPI</Route>
    </Routes>
    </>
  )
}

export default App
