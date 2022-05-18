import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react'

const CarouselComp = (props) => {

    const [mostLikedGame, setMostLikedGame] = useState({})
    const [leastLikedGame, setLeastLikedGame] = useState({})
    let mostLikes = 0
    let leastLikes = 1
    const setGames = () => {
        props.games.forEach(game => {  
            if (game.likes > mostLikes) {
                mostLikes = game.likes
                setMostLikedGame(game)                
            }
            if (game.likes < leastLikes) {
                leastLikes = game.likes
                setLeastLikedGame(game)
            }
            // console.log(game)
            // console.log(mostLikedGame)
            // console.log(leastLikedGame)
        })
    }
  
    useEffect(() => setGames(), [props.games, leastLikedGame])

    if (mostLikedGame) {    
        return (
            <div className="carousel-div">
                <Carousel variant="dark" className="carousel" interval="2500">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={mostLikedGame.logo}
                        alt={props.games[5].name}
                        />
                        <Carousel.Caption className="carousel-caption">
                        <p>Most Hearts</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={leastLikedGame.logo}
                        alt={props.games[6].name}
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p>Least Hearts</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default CarouselComp;
