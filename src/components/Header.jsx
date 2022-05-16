import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            Final Fantasy Fan Favorites
            <br></br>
            <Link to='/create'><button>Create Game Page</button></Link>
        </header>
    )
}

export default Header

