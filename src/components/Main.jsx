import React from 'react'
import AllGames from '../pages/AllGames';
import CreateGame from '../pages/CreateGame';
import ShowGame from '../pages/ShowGame';
import { Routes, Route } from 'react-router-dom'

const Main = (props) => {

    const createGame = async (game) => {
        // make post request to create a Game
        await fetch(props.URL + "game", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(game)
        })
        // Update the game data when passing it in
        props.getGameData()
    }
    
    
    if (!props.games) {
        return <h1>Loading...</h1>
    } else {        
        return (
            <body className="all-games">
                <Routes>
                    <Route path='/'
                        element={<AllGames 
                            URL={URL} 
                            games={props.games} 
                            setGames={props.setGames} 
                            getGameData={props.getGameData} 
                            />} 
                    />
                    <Route path='/game/:id'
                        element={<ShowGame
                            URL={URL} 
                            games={props.games} 
                            setGames={props.setGames} 
                            getGameData={props.getGameData} 
                        />} 
                    />
                    <Route path='/create'
                        element={<CreateGame 
                            createGame={createGame}
                            URL={props.URL}    
                            />} 
                    />

                </Routes>
            </body>
        );
    }   
}

export default Main
