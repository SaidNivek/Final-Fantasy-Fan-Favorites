import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
// useSelector is used to use something from the react state
// if we want to dispatch a function from the reducer, we need to useDispatch
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Loading from '../components/Loading'

function Register() {
    const[formData, setFormData] = useState({
        username: '',
        password: '',
        password2: '',
        email: ''
    })
    // Deconstructs the formData object to not require us to use formData.username, formData.email, etc
    // Now we can just call the username and have it point to formData.username, for easier/simpler syntax
    const {username, password, password2, email} = formData

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

        if(password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                username, 
                email, 
                password
            }
            // Disptaching the user data, using the register function from authService.js
            dispatch(register(userData))
        }
    }

    if(isLoading) {
        return <Loading />
    }
    return (
        <>
            <div className="container">
                <h2 className="col-12 "><FaUser /> Register</h2>
                <p>Please create an account</p>
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
                        <label className="label" for="password2">Confirm Password</label>
                        <input
                            type='text'
                            value={password2}
                            id='password2'
                            name='password2'
                            placeholder='Please confirm password'
                            onChange={handleChange}
                            className="form-control"  
                        />
                    </div>
                    <div className="form-group">
                        <label className="label" for="email">Email</label>
                        <input
                            type='text'
                            value={email}
                            id='email'
                            name='email'
                            placeholder='Please enter your email'
                            onChange={handleChange}
                            className="form-control"  
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-info">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register