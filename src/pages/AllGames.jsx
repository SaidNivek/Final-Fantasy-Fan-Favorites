import React from 'react'

const AllGames = (props) => {
    
    if(!props.games) {
        return <h2>Loading...</h2>
    } else {
        return (
            <section>
                <img src={props.games[0].logo} alt={props.games[0].name} />
                <h1>{props.games[0].name}</h1>
            </section>
        );
    }
}

export default AllGames
