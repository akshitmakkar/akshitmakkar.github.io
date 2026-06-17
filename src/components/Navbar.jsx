import { useState, useEffect } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    const id = href.replace('#', '')
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => handleNav('#home')}>
          AM
        </button>

        <div className={styles.links}>
          {links.map(({ label, href }) => (
            <button
              key={label}
              className={`${styles.link} ${active === href.replace('#', '') ? styles.active : ''}`}
              onClick={() => handleNav(href)}
            >
              {label}
            </button>
          ))}
        </div>

        <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
          <span className={styles.toggleTrack}>
            <span className={`${styles.toggleThumb} ${theme === 'dark' ? styles.right : styles.left}`} />
          </span>
          {theme === 'dark' ? <HiMoon size={16} /> : <HiSun size={16} />}
        </button>
      </div>
    </nav>
  )
}
