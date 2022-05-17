import React from 'react'
import AllGames from '../pages/AllGames';
import CreateGame from '../pages/CreateGame';
import ShowGame from '../pages/ShowGame';
import { Routes, Route } from 'react-router-dom'
import Loading from './Loading';
import NotFound from '../pages/NotFound';

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

    const addHeart = async(id, likes) => {
        likes++
        await fetch(props.URL + 'game/' + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"likes": likes})
        })
        props.getGameData()
    }
    
    
    if (!props.games) {
        return <Loading />
    } else {        
        return (
            <body className="all-games">
                <Routes>
                    <Route path='/*' element={<NotFound />} />
                    <Route path='/'
                        element={<AllGames 
                            URL={URL} 
                            games={props.games} 
                            setGames={props.setGames} 
                            getGameData={props.getGameData} 
                            addHeart={addHeart}
                            />} 
                    />
                    <Route path='/game/:id'
                        element={<ShowGame
                            URL={URL} 
                            games={props.games} 
                            setGames={props.setGames} 
                            getGameData={props.getGameData}
                            addHeart={addHeart} 
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
