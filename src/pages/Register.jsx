import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

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

    const handleChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

  return (
    <>
        <div className="container">
            <h2 classname="col-12 "><FaUser /> Register</h2>
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
                    <button type="submit" className="btn btn-block btn-info">Submit</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Register