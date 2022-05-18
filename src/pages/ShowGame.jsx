import React from 'react'
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const ShowGame = (props) => {
    const { id } = useParams()
    // Look for the game that matches the id that is passed to the useParams() functionality
    const game = props.games.find(person => person._id === id)
    if(!game) {
        return <NotFound />
    } else {
        return (
            <>
                <main className="container show-game-div">
                    <img className="img-fluid" src={game.logo} alt={game.name} />
                    <h2><strong>{game.name}</strong></h2>
                    <div className="row">
                        <h3 className="col">Hearts: {game.likes}</h3>
                        <div className="grow col">
                            <i className="fa-solid fa-heart-circle-plus fa-xl " onClick={() => props.addHeart(game._id, game.likes)}></i>                             
                        </div>
                    </div>
                    <h4>{game.summary}</h4>
                    <h3><strong>Heroes:</strong></h3>
                    <div className="row row-cols-2">
                        {game.heroes.map(element => {
                            return (<h4 className="col">{element}</h4>)
                        })}
                    </div>
                    <h3><strong>Villains:</strong></h3>
                    <div className="row row-cols-2">
                        {game.villains.map(element => {
                            return (<h4 className="col">{element}</h4>)
                        })}
                    </div>
                    <h3><strong>Original Console:</strong></h3>
                    <h4>{game.release_system}</h4>
                    <h3><strong>Original Release Date:</strong></h3>
                    <h4>{game.release_date}</h4>                
                </main>
            </>
        );
    }
}

export default ShowGame
