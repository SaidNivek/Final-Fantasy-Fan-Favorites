import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Router>
        <React.StrictMode>
          <Provider store={store}>        
            <App />
          </Provider>
        </React.StrictMode>
      </Router>
      <ToastContainer />
    </>
)


