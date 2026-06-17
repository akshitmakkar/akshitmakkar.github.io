import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiPython, SiStreamlit, SiOpenai, SiReact, SiDocker } from 'react-icons/si'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'CR Analyzer',
    description:
      'A data pipeline that analyzes code reviews using NLP techniques and OpenAI\'s API to surface patterns, trends, and actionable insights from engineering team feedback.',
    tags: [
      { icon: SiPython, label: 'Python' },
      { icon: SiOpenai, label: 'OpenAI API' },
      { icon: SiStreamlit, label: 'Streamlit' },
    ],
    github: 'https://github.com/akshitmakkar/cr-analyzer',
    live: null,
    accent: '#a855f7',
  },
  {
    title: 'Netflix Data App',
    description:
      'An interactive dashboard for exploring and visualizing Netflix content data, featuring filtering, trend analysis, and genre breakdowns built with Streamlit.',
    tags: [
      { icon: SiPython, label: 'Python' },
      { icon: SiStreamlit, label: 'Streamlit' },
    ],
    github: 'https://github.com/akshitmakkar/netflix-app',
    live: null,
    accent: '#e50914',
  },
  {
    title: 'Portfolio Website',
    description:
      'This site! A modern React portfolio with dark/light mode, animated tech marquee, and responsive design — deployed to GitHub Pages.',
    tags: [
      { icon: SiReact, label: 'React' },
      { icon: SiDocker, label: 'Docker' },
    ],
    github: 'https://github.com/akshitmakkar/akshitmakkar.github.io',
    live: 'https://akshitmakkar.github.io',
    accent: '#61dafb',
  },
]

function ProjectCard({ title, description, tags, github, live, accent }) {
  return (
    <div className={styles.card}>
      <div className={styles.accentBar} style={{ background: accent }} />
      <div className={styles.inner}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.tags}>
          {tags.map(({ icon: Icon, label }) => (
            <span key={label} className={styles.tag}>
              <Icon size={13} />
              {label}
            </span>
          ))}
        </div>
        <div className={styles.actions}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
              <FaGithub size={15} />
              Code
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className={`${styles.actionBtn} ${styles.live}`}>
              <FaExternalLinkAlt size={13} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">
          projects <span>.</span>
        </h2>
        <div className={styles.grid}>
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
