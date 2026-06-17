import { FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from './Home.module.css'
import profilePic from '../assets/profile.jpg'

export default function Home() {
  return (
    <section id="home" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className={styles.greeting}>hi, i'm</p>
          <h1 className={styles.name}>
            akshit <span className={styles.accent}>makkar</span>
          </h1>
          <p className={styles.subtitle}>
            Data Science @ <span className={styles.accent}>UIUC</span>
          </p>
          <p className={styles.bio}>
            Passionate about building data-driven solutions and turning raw data into meaningful insights.
            I love working at the intersection of machine learning and software engineering.
          </p>
          <div className={styles.links}>
            <a
              href="https://linkedin.com/in/akshitmakkar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/akshitmakkar"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.linkBtn} ${styles.ghost}`}
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.photoRing}>
            <img src={profilePic} alt="Akshit Makkar" className={styles.photo} />
          </div>
          <div className={styles.photoGlow} />
        </div>
      </div>
    </section>
  )
}
