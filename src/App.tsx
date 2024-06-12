import { useState } from 'react'
import Header from './components/About'
import Footer from './components/Footer'
import About from './components/About'
import Intro from './components/Intro'
import Projects from './components/Projects'
import './sass/style.sass'

function App() {
  

  return (
    <>
    <Intro />
    <About />
    <Projects />
    <Footer />
    </>
  )
}

export default App
