import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Routes>
        <Route path='/BookFlow' Component={App}></Route>
      </Routes>
    </Router>
  </div>
)
