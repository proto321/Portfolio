import { styles } from "../assets/styles";


export default function Hero() {
  return (
    <section className={styles.hero.section}>
      <div className={styles.hero.grid}>
        {/* Left */}
        <div>
          <div className={styles.hero.badge}>
            <div className={styles.hero.badgeDot}></div>
            Available for freelance work
          </div>

          <h1 className={styles.hero.title}>
            Building
            <br />
            modern web
            <br />
            applications.
          </h1>

          <p className={styles.hero.paragraph}>
            Full Stack Developer and Computer Science Engineering student passionate
            about building responsive, scalable, and user-focused web applications
            using React, Node.js, PHP, MySQL, and modern frontend technologies.
          </p>

          <div className={styles.hero.buttonRow}>
            <a href="#projects" className={styles.hero.primaryBtn}>
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.hero.secondaryBtn}

            >
              View Resume
            </a>
            
          </div>
        </div>

        {/* Right */}
        <div className={styles.hero.rightWrapper}>
          <div className={styles.hero.glow}></div>

          <div className={styles.hero.card}>
            <div className={styles.hero.cardInner}>
              <div className="text-center">
                <div className={styles.hero.avatarRing}>
                  {/* <div className={styles.hero.avatarInner}></div> */}
                  <img
                    src="/profile.jpeg"
                    alt="Harsh Sahu"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <h2 className={styles.hero.cardTitle}>Harsh Sahu</h2>

                <p className={styles.hero.cardSubtitle}>
                  Full Stack Developer • React • Node.js
                </p>

              {/* links  */}
              <div className={styles.hero.socialRow}>
                <a
                  href="https://github.com/proto321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.hero.socialLink}
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/harsh-sahu-09aa80249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.hero.socialLink}
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:idmy675@gmail.com"
                  className={styles.hero.socialLink}
                >
                  Email
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    
  );
}