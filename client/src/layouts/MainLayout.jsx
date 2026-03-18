import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from "../components/Features";

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
    </div>
  )
}

export default MainLayout