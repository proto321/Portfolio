import { styles } from "../assets/styles";

export default function Navbar() {
  return (
    <header className={styles.navbar.header}>
      <div className={styles.navbar.container}>
        <h1 className={styles.navbar.logo}>
          Portfolio<span className={styles.navbar.logoDot}>.</span>
        </h1>

        <nav className={styles.navbar.nav}>
        <a href="/" className={styles.navbar.link}>
            Home
          </a>
          <a href="#about" className={styles.navbar.link}>
            About
          </a>
          <a href="#skills" className={styles.navbar.link}>
            Skills
          </a>
          <a href="#projects" className={styles.navbar.link}>
            Projects
          </a>
          <a href="#contact" className={styles.navbar.link}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}