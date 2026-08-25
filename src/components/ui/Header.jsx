import styles from './Header.module.css';

export default function Header() {
  return (
   <header className={styles.header}>
      {/* Logo / Thương hiệu cá nhân */}
      <div className={styles.logo}>
        Trung<span className={styles.dot}>.</span>dev
      </div>

      {/* Menu điều hướng & Nút liên hệ */}
      <nav className={styles.nav}>
        <a href="#projects" className={styles.navLink}>Dự án</a>
    <a href="#contact" className={styles.contactBtn}>Liên hệ</a>
      </nav>
    </header>
  )
}