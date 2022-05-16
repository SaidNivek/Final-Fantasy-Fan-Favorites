import React from 'react'
import { Link } from 'react-router-dom'

const AllGames = (props) => {

    props.games.sort((a, b) => (a.number > b.number ? 1: -1))
    
    if(!props.games) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div className="container all-games">
                <section>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                        {props.games.map(element => {
                            return (
                                <div className="carousel-item active" data-bs-interval="5000">
                                    <img src={element.logo} className="d-block w-100" alt={element.name} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Most-liked game in the series</h5>
                                    </div>
                                </div>
                            )
                        })}                         
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
                </section>
                <section>
                    {props.games.map(element => 
                    <div key={element._id}>
                        <Link to={`/game/${element._id}`} >    
                            <img src={element.logo} alt={element.name} />
                            <h1>{element.name}</h1>
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
