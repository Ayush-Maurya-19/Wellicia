import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import BookingPage from './components/BookingPage'
import BlogPage from './components/BlogPage'
import UpperFooter from './components/UpperFooter'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Experience />
    <Services/>
    <WhyChooseUs/>
    <BookingPage/>
    <BlogPage/>
    <UpperFooter/>
    <Footer/>
    </>
  )
}

export default App
