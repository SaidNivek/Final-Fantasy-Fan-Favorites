import './styles/combined.css'
import {useState, useEffect} from 'react'
// IMPORT COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'

// IMPORT PAGES
import Main from './components/Main'

// IMPORT ROUTER NEEDS
import React from 'react'

function App() {

  const URL = "https://final-fantasy-fan-favorites.herokuapp.com/"

  const [games, setGames] = useState(null)

  // Function for the API call for games' data
  const getGameData = () => {
    // Fetch all the games from our Heroku URL
    fetch(URL + "game")
    .then(response => response.json())
    .then(result => setGames(result))
  }

  // Make an initial call for the data, so it only happens once
  useEffect(() => getGameData(), [])

  return (
    <>
      <Header 
        URL={URL} 
        games={games} 
        setGames={setGames} 
        getGameData={getGameData} 
      />

        <Main 
          URL={URL} 
          games={games} 
          setGames={setGames} 
          getGameData={getGameData} 
        />
      <Footer />
    </>
  )
}

export default App
