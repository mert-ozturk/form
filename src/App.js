import React from 'react'
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Navbar from './components/Navbar'
const App = () => {
  return (
    
      <Router> 
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/form" element={<Form/>}/>
        </Routes>
      </Router>

   
  )
}

export default App