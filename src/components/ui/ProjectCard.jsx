import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, category }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.category}>{category}</p>
    </div>
  )
}