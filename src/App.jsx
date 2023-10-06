import { useState } from 'react'
import axios from 'axios'
import HomePage from './pages/HomePage'
import MyNavbar from './component/Navbar'
import Footer from './component/Footer'



function App() {
  return (
  <div className="body" style={{height:"100vh"}}>
    <MyNavbar/>
    <HomePage/>
    <Footer/>
  </div>
    )
}

export default App
