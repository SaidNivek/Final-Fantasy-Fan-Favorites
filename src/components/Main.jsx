import React from 'react'
import AllGames from '../pages/AllGames';
import { Routes, Route } from 'react-router-dom'

const Main = (props) => {
    
    
    if (!props.games) {
        return <h1>Loading...</h1>
    } else {        
        return (
            <Routes>
                <Route path='/'
                element={<AllGames 
                    URL={URL} 
                    games={props.games} 
                    setGames={props.setGames} 
                    getGameData={props.getGameData} 
                        />} />
            </Routes>
        );
    }   
}

export default Main
