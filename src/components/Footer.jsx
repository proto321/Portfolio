import { styles } from "../assets/styles";

export default function Footer() {
  return (
    <footer className={styles.footer.footer}>
      <div className={styles.footer.container}>
        <p>© 2026 Harsh Sahu — All Rights Reserved</p>

        <div className={styles.footer.linkRow}>
          <a
            href="https://github.com/proto321"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer.link}
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/harsh-sahu-09aa80249/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer.link}
          >
            LinkedIn
          </a>

          <a
            href="mailto:idmy675@gmail.com"
            className={styles.footer.link}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}