import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './component/Footer'
import Accordian from './component/Accordian'
import Menu from './component/Menu'
import HeroSection from './component/HeroSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Accordian />
      <Menu />
      <Footer />
    </div>
  )
}

export default App
