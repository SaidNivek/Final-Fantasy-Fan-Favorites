import React from 'react'
import { Link } from 'react-router-dom'

const AllGames = (props) => {

    props.games.sort((a, b) => (a.number > b.number ? 1: -1))
    
    if(!props.games) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div className="container">
                <div className="carousel-div">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-interval="true" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src={props.games[0].logo} alt={props.games[0].name} />                                
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Most-liked game in the series</h5>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                            <img src={props.games[1].logo} alt={props.games[1].name} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Least-liked game in the series</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                            <img src={props.games[2].logo} alt={props.games[2].name} />
                                <div className="carousel-caption d- d-md-block">
                                    <h5>Forgotten in the middle of the pack...</h5>                                    
                                </div>
                            </div>
                        </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
                <section>
                    {props.games.map(element => 
                    <div key={element._id}>
                        <Link to={`/game/${element._id}`} >
                                
                            <h2>{element.name}</h2>
                            <p>Likes: {element.likes}</p>
                        </Link>
                    </div>
                )}
                </section>
            </div>
        );
    }
}

export default AllGames
