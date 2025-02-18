import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Navbar from './views/Navbar'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Dashboard from './views/Dashboard'


function App() {
  return (
    <Router>
      <Navbar />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App