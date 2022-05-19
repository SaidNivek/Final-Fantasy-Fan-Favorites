import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import CarouselComp from '../components/CarouselComp'
import { useSelector } from 'react-redux'


const AllGames = (props) => {
    // get the user from the redux state
    const {user} = useSelector((state) => state.auth)

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
                            {/* If no user, cannot heart any games.  If user logged in, can heart games.  */}
                            {user ? (<>
                                        <p>Hearts: {element.likes}</p>
                                        <div className="grow">
                                            <i className="fa-solid fa-heart-circle-plus fa-xl" onClick={() => props.addHeart(element._id, element.likes)}></i>                             
                                        </div>    
                                    </>
                            ) : (<p>Hearts: {element.likes}</p>)}
                        </div>
                    )}
                    </div>
                </section>
            </div>
        );
    }
}

export default AllGames
