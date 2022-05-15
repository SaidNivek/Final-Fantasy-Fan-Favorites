import './App.css'
// IMPORT COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'

// IMPORT PAGES
import Home from './pages/Home'
import Game from './pages/Game'

// IMPORT ROUTER NEEDS
import React from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
