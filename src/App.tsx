import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Header/>
      <Intro/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
