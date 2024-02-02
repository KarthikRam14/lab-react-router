import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Contact from './Component/Contact'
import About from './Component/About'
import Form from './Component/Form'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path='/help' element={<Form/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
