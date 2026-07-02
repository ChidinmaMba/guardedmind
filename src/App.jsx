import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Approach from './components/Approach'
import Expect from './components/Expect'
import WhyChoose from './components/WhyChoose'
import Bio from './components/Bio'
import Insurance from './components/Insurance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <About />
        <Approach />
        <Expect />
        <WhyChoose />
        <Bio />
        <Insurance />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
