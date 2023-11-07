import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LogIn from './Pages/Log-in.jsx'
import signUpUser from './Pages/Sign-up/UserFields.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route path='/BookFlow-Login' component={LogIn}></Route>
      <Route path='/BookFlow-Signup' component={signUpUser}></Route>
    </Router>
  </div>
)
