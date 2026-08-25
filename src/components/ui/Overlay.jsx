import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import styles from './Overlay.module.css';
import Contact from './Contact';

export default function Overlay() {
  return (
    <div className={styles.overlayWrapper}>
      <Header />
      
      <div className={styles.contentArea}>
        <Hero />
      </div>
      <Projects />

      <Contact />
    </div>
  )
}