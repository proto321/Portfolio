import { styles } from "../assets/styles";

export default function About() {
  return (
    <section id="about" className={styles.about.section}>
      <div className={styles.about.grid}>
        <div>
          <p className={styles.about.eyebrow}>About Me</p>

          <h2 className={styles.about.title}>
            Developing scalable full-stack solutions with modern technologies.
          </h2>
        </div>

        <div>
        <p className={styles.about.paragraph}>
          I'm a Computer Science Engineering student with a strong interest in
          full-stack web development. I enjoy building responsive user interfaces,
          developing secure backend systems, and designing efficient databases.
          My primary stack includes React, Node.js, PHP, MySQL, Tailwind CSS, and
          JavaScript. I'm always eager to learn new technologies and solve
          real-world problems through software.
        </p>

        <div className={styles.about.statsGrid}>
            <div className={styles.about.statCard}>
              <h3 className={styles.about.statNumberCyan}>6+</h3>
              <p className={styles.about.statLabel}>Full-Stack Projects</p>
            </div>

            <div className={styles.about.statCard}>
              <h3 className={styles.about.statNumberPurple}>10+</h3>
              <p className={styles.about.statLabel}>Technologies Learned</p>
            </div>

            <div className={styles.about.statCard}>
              <h3 className={styles.about.statNumberCyan}>100%</h3>
              <p className={styles.about.statLabel}>Responsive Design</p>
            </div>

            <div className={styles.about.statCard}>
              <h3 className={styles.about.statNumberPurple}>∞</h3>
              <p className={styles.about.statLabel}>Learning Mindset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}