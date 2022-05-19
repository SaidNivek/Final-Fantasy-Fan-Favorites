import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Loading from '../components/Loading'

function Login() {
    const[formData, setFormData] = useState({
        username: '',
        password: '',
    })
    // Deconstructs the formData object to not require us to use formData.username, formData.email, etc
    // Now we can just call the username and have it point to formData.username, for easier/simpler syntax
    const {username, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Get the data from the state using the useSelector function, which takes in a state
    // The only state we have right now is state.auth
    const {user, isLoading, isError, isSuccess, message} = useSelector( (state) => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/')
        }

        // will use the redux dispatch to call the reset function, which comes from the authSlice.js reducers to reset the data in localStorage
        dispatch(reset())

    }, [user, isSuccess, isError, message, navigate, dispatch])

    const handleChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const userData = {
            username, 
            password,
        }
        dispatch(login(userData))
    }

    if(isLoading) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <div className="container">
                <h2 classname="col-12 "><FaSignInAlt /> Login</h2>
                <p>Login to your account</p>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label" for="username">Username</label>
                        <input
                            type='text'
                            value={username}
                            id='username'
                            name='username'
                            placeholder='Please enter a username'
                            onChange={handleChange}
                            className="form-control"  
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" for="password">Password</label>
                        <input
                            type='text'
                            value={password}
                            id='password'
                            name='password'
                            placeholder='Please enter a password'
                            onChange={handleChange}
                            className="form-control"  
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block btn-info">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login