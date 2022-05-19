import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
    const[formData, setFormData] = useState({
        username: '',
        password: '',
        password2: '',
        email: ''
    })

    const {username, password, password2, email} = formData

    const handleChange = () => {

    }

  return (
    <>
        <div className="container">
            <h2 classname="col-12 "><FaUser /> Register</h2>
            <p>Please create an account</p>
        </div>
        <div className="container">
            <form>
                <div className="form-group">
                    <label className="label" for="name">Username</label>
                    <input
                        type='text'
                        value={username}
                        name='username'
                        placeholder='Please enter a username'
                        onChange={handleChange}
                        className="form-control"  
                    />
                </div>
                <div className="form-group">
                    <label className="label" for="name">Password</label>
                    <input
                        type='text'
                        value={password}
                        name='password'
                        placeholder='Please enter a password'
                        onChange={handleChange}
                        className="form-control"  
                    />
                </div>
                <div className="form-group">
                    <label className="label" for="name">Confirm Password</label>
                    <input
                        type='text'
                        value={password2}
                        name='password2'
                        placeholder='Please confirm password'
                        onChange={handleChange}
                        className="form-control"  
                    />
                </div>
                <div className="form-group">
                    <label className="label" for="name">Email</label>
                    <input
                        type='text'
                        value={email}
                        name='username'
                        placeholder='Please enter your email'
                        onChange={handleChange}
                        className="form-control"  
                    />
                </div>
            </form>
        </div>
    </>
  )
}

export default Register