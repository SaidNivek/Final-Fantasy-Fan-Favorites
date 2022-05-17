import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import CarouselComp from '../components/CarouselComp'

const AllGames = (props) => {

    props.games.sort((a, b) => (a.number > b.number ? 1: -1))
    
    if(!props.games) {
        return <Loading />
    } else {
        return (
            <div className="container">
                <CarouselComp games={props.games}/>                
                <section>
                    <div className="row">
                        {props.games.map(element => 
                        <div className="col-sm" key={element._id}>
                            <Link to={`/game/${element._id}`} >
                                    
                                <h2>{element.name}</h2>
                            </Link>
                                <p>Hearts: {element.likes}</p>
                                <i className="fa-solid fa-heart-circle-plus fa-xl grow"></i>                             
                        </div>
                    )}
                    </div>
                </section>
            </div>
        );
    }
}

export default AllGames
