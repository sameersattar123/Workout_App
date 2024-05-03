import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'

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
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  )
}

export default App