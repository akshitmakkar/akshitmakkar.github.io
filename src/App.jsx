import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TechMarquee from './components/TechMarquee'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Home />
        <TechMarquee />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
