import React from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
    

     <BrowserRouter>
  
      <div className='container'>
      <Header/>
    
  
<Routes>
  <Route path="/" element={<Dashboard/>}/>
  <Route path="/about" element={<About/>}/>


  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>


</Routes>
      </div>


     <Footer/>

      </BrowserRouter>  
        </>
  )
}

export default App
