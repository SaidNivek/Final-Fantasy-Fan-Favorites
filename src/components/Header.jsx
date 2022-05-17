import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    if(props.games){
        const dropdownButtons = props.games.map(element => {
            return (
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to={`/game/${element._id}`} className="dropdown-item">{element.name}</Link>
        </div>
            )
    })

    console.log(dropdownButtons)
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
                    <div class="dropdown">
                        <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Games
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {props.games.map(element => {
                                return (
                                    <div className="dropdown-item" >
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

