import { skillCategories } from "../data/skills";
import { styles } from "../assets/styles";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills.section}>
      <div className={styles.skills.header}>
        <div>
          <p className={styles.skills.eyebrow}>Skills</p>
          <h2 className={styles.skills.title}>Tech Stack</h2>
        </div>

        <p className={styles.skills.description}>
          A collection of technologies, programming languages, frameworks,
          and tools I use to design, develop, and deploy modern full-stack
          web applications.
        </p>
      </div>

      <div className="space-y-10 animate-pulse">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              {category.title}
            </h3>

            <div className={styles.skills.grid}>
              {category.skills.map((skill) => (
                <div key={skill} className={styles.skills.card}>
                  <h4 className={styles.skills.cardTitle}>{skill}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}