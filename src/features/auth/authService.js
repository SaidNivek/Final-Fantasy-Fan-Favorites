import axios from 'axios'

// Making http request and sending the data back, setting th edata in local storage
const API_URL = 'https://final-fantasy-fan-favorites.herokuapp.com/user/'
// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register, 
    logout, 
    login
}

export default authService