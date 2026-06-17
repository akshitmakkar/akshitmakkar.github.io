import { HiLocationMarker, HiCalendar } from 'react-icons/hi'
import styles from './Experience.module.css'

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'DFX Intel',
    location: 'Remote',
    period: 'May 2025 – Present',
    logo: 'DFX',
    color: '#a855f7',
    bullets: [
      'Built data pipelines and analytical models to support decision-making workflows.',
      'Collaborated with cross-functional teams to identify key data insights.',
      'Developed dashboards and visualizations to communicate findings.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Springer Capital',
    location: 'Remote',
    period: 'Jan 2025 – Apr 2025',
    logo: 'SC',
    color: '#06b6d4',
    bullets: [
      'Analyzed financial datasets to surface trends and investment signals.',
      'Automated reporting workflows using Python and SQL.',
      'Produced executive-level summaries from complex quantitative analysis.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Tandem',
    location: 'Remote',
    period: 'Summer 2024',
    logo: 'TM',
    color: '#f59e0b',
    bullets: [
      'Contributed to full-stack development on the core product.',
      'Collaborated on feature development and bug fixes.',
      'Details coming soon.',
    ],
  },
  {
    role: 'Data Science Member',
    company: 'UIUC Data Science Club',
    location: 'Champaign, IL',
    period: 'Aug 2023 – Present',
    logo: 'DS',
    color: '#10b981',
    bullets: [
      'Participated in project teams solving real-world data problems.',
      'Explored machine learning and data analysis techniques.',
      'Presented findings and models to club members and faculty.',
    ],
  },
]

function ExperienceCard({ role, company, location, period, logo, color, bullets }) {
  return (
    <div className={styles.card}>
      <div className={styles.logoBox} style={{ background: `${color}18`, borderColor: `${color}40` }}>
        <span className={styles.logoText} style={{ color }}>{logo}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.role}>{role}</h3>
            <p className={styles.company}>{company}</p>
          </div>
        </div>
        <div className={styles.meta}>
          <span className={styles.metaTag}>
            <HiLocationMarker size={12} />
            {location}
          </span>
          <span className={styles.metaTag}>
            <HiCalendar size={12} />
            {period}
          </span>
        </div>
        <ul className={styles.bullets}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">
          experience <span>.</span>
        </h2>
        <div className={styles.grid}>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
