import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading';

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
        })
    }
  
    useEffect(() => setGames(), [props.games, leastLikedGame])

    if (mostLikedGame && leastLikedGame) {    
        return (
            <div className="carousel-div">
                <Carousel variant="dark" className="carousel" interval="2500">
                    <Carousel.Item>
                        <Link to={`game/${mostLikedGame._id}`}>
                            <img
                            className="d-block w-100"
                            src={mostLikedGame.logo}
                            alt={mostLikedGame.name}
                            />
                            <Carousel.Caption className="carousel-caption">
                                <p>Most Hearts</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to={`game/${leastLikedGame._id}`}>
                                <img
                                className="d-block w-100"
                                src={leastLikedGame.logo}
                                alt={leastLikedGame.name}
                                />
                                <Carousel.Caption className="carousel-caption">
                                    <p>Least Hearts</p>
                                </Carousel.Caption>
                            </Link>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    } else {
        return <Loading />
    }
}

export default CarouselComp;
