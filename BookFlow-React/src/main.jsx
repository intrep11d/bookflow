import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LogIn from './Pages/Log-in.jsx'
import userStaff from './Pages/Sign-up/UserStaff.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route path='/BookFlow-Login' component={LogIn}></Route>
      <Route path='/BookFlow-UserStaff' component={userStaff}></Route>
    </Router>
  </div>
)
