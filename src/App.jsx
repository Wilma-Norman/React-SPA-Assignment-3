import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import About from './Components/About'
import Skate from './Components/Skate'

function App() {
  const [active, setActive] = useState("Home"); 
  return (
    <>
      <Header />
      <Navigation navActive={active} navaSetActive={setActive}/>       
      {active === "Home" && <Home />} 
      {active === "About" && <About />}
      {active === "Skate" && <Skate />}
      <Footer />
    </>
  )
}

export default App
