import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LogIn from './Pages/Log-in.jsx'
import passwordField from './Pages/Sign-up/UserField-pw.jsx'
import signUpUser from './Pages/Sign-up/UserFields.jsx'
import userHomePage from './Pages/User-instance/User-Landing.jsx'
import UserCategory from './Pages/User-instance/User-Category.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route path='/' component={LogIn} exact></Route>
      <Route path='/BookFlow-Signup' component={signUpUser}></Route>
      <Route path='/BookFlow-Password' component={passwordField}></Route>
      <Route path='/BookFlow-userInstance' component={userHomePage}></Route>
      <Route path='/BookFlow-userCategory' component={UserCategory}></Route>
    </Router>
  </div>
)
