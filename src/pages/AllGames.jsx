import React from 'react'

const AllGames = (props) => {

    props.games.sort((a, b) => (a.number > b.number ? 1: -1))
    
    if(!props.games) {
        return <h2>Loading...</h2>
    } else {
        return (
            <section>
                {props.games.map(element => 
                <div>
                    <img src={element.logo} alt={element.name} />
                    <h1>{element.name}</h1>
                    <p>Likes: {element.likes}</p>
                </div>
            )}
            </section>
        );
    }
}

export default AllGames
