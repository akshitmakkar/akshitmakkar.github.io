import {
  SiPython, SiMysql, SiStreamlit, SiReact,
  SiDocker, SiGit, SiOpenai, SiPandas, SiScikitlearn,
  SiNumpy, SiJupyter, SiGithub,
} from 'react-icons/si'
import styles from './TechMarquee.module.css'

const techs = [
  { icon: SiPython, label: 'Python', color: '#3776AB' },
  { icon: SiMysql, label: 'SQL', color: '#4479A1' },
  { icon: SiStreamlit, label: 'Streamlit', color: '#FF4B4B' },
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiDocker, label: 'Docker', color: '#2496ED' },
  { icon: SiGit, label: 'Git', color: '#F05032' },
  { icon: SiOpenai, label: 'OpenAI API', color: '#10A37F' },
  { icon: SiPandas, label: 'Pandas', color: '#150458' },
  { icon: SiScikitlearn, label: 'scikit-learn', color: '#F7931E' },
  { icon: SiNumpy, label: 'NumPy', color: '#013243' },
  { icon: SiJupyter, label: 'Jupyter', color: '#F37626' },
  { icon: SiGithub, label: 'GitHub', color: '#ffffff' },
]

function TechItem({ icon: Icon, label, color }) {
  return (
    <div className={styles.item}>
      <Icon size={36} color={color} />
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default function TechMarquee() {
  const doubled = [...techs, ...techs]

  return (
    <div className={styles.wrapper}>
      <div className={styles.fadeMaskLeft} />
      <div className={styles.fadeMaskRight} />
      <div className={styles.track}>
        {doubled.map((tech, i) => (
          <TechItem key={i} {...tech} />
        ))}
      </div>
    </div>
  )
}
