import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    // set a logout function that will log the user out and reset the state of auth
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    // set the create game page button if the user has the admin role
    let createGame = ''
    if(user) {
        if(user.role === 'admin') {
            createGame = (<Link to='/create'><button className="btn btn-info">Create Game Page</button></Link>)
        } else {
            createGame = (<></>)}
        }
    

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
                    <Link to="/about"><button className="btn btn-info">About</button></Link>
                    {createGame}
                    {user   ? (<button className="btn btn-info" onClick={onLogout}><FaSignOutAlt /> Logout</button>) 
                            : (<>
                                <Link to='/login'><button className="btn btn-info"><FaSignInAlt /> Login</button></Link>
                                <Link to='/register'><button className="btn btn-info"><FaUser /> Register</button></Link>
                            </>)}

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