import { FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.copy}>
          © 2025 <span className={styles.accent}>Akshit Makkar</span>
        </span>
        <div className={styles.links}>
          <a href="https://linkedin.com/in/akshitmakkar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={18} />
          </a>
          <a href="https://github.com/akshitmakkar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
