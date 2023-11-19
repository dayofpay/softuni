import {Routes,Route} from 'react-router-dom';
import Navigation from './components/Navigation'
// import './App.css'
import About from './components/About';
import Home from './components/Home';
import Swapi from './components/Swapi';
import Pricing from './components/Pricing';
import Details from './components/Details';
import Error404 from './components/Errors/404';

function App() {


  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />}>Home</Route>
      <Route path="/about" element={<About />}>About</Route>
      <Route path='/swapi' element={<Swapi />}>SWAPI</Route>
      <Route path='/pricing' element={<Pricing />}>Pricing</Route>
      <Route path='/character/:name' element={<Details />}>Details</Route>
      <Route path='*' element={<Error404 />}></Route>
    </Routes>
    </>
  )
}

export default App
