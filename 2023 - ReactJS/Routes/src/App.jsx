import {Routes,Route} from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './components/Navigation'
import './App.css'
import About from './components/About';
import Home from './components/Home';

function App() {


  return (
    <>
    <Navigation />

    <Routes>
      <Route path='/' element={<Home />}>Home</Route>
      <Route path="/about" element={<About />}>About</Route>
    </Routes>
    </>
  )
}

export default App
