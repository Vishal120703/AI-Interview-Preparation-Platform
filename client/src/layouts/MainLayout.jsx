import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from "../components/Features";
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default MainLayout