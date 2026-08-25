import { projectsData } from '../../data/projectsData';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projectsContainer} id="projects">
      <h2 className={styles.sectionTitle}>
        Các dự án <span className={styles.highlightText}>Tiêu biểu</span>
      </h2>

      <div className={styles.grid}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.card}>
            <div>
              <div className={styles.cardHeader}>
                <span className={styles.categoryTag}>{project.category}</span>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
            </div>

            <div className={styles.techList}>
              {project.techStack.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}