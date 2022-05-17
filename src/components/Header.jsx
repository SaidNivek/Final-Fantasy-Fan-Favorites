import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    // Sort the list to go in numerical order, even if the database is not
    if(props.games) {
        props.games.sort((a, b) => (a.number > b.number ? 1: -1))
    }
    
    if (!props.games) {
        return <></>
    } else {
        return (
            <header>
                <nav className="navbar navbar-dark">
                    <Link className="navbar-brand" to="/"><h1>Final Fantasy Fan Favorites</h1></Link>
                    <Link to='/create'><button className="btn btn-info">Create Game Page</button></Link>
                    {/* Game dropdown menu starts here */}
                    <div className="dropdown">
                        <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Games
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {props.games.map(element => {
                                return (
                                    <div key={element._id} className="dropdown-item" >
                                        <Link to={`/game/${element._id}`} className="dropdown-item">{element.name}</Link>
                                    </div>
                            )})}
                        </div>
                    </div> {/* Game dropdown menu ends here */}
                </nav>
            </header>
        )
    }
}

export default Header