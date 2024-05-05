import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/signup" 
            element={<Signup />} 
          />
          <Route 
            path="/login" 
            element={<Login />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  )
}

export default App