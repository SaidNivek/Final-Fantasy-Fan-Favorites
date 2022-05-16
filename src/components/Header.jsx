import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <Link to="/"><h1>Final Fantasy Fan Favorites</h1></Link>
            <Link to='/create'><button className="btn btn-info">Create Game Page</button></Link>
        </header>
    )
}

export default Header

