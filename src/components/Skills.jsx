import { skillCategories } from "../data/skills";
import { styles } from "../assets/styles";
import { motion } from "framer-motion";


export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
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

      <div className="space-y-10">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              {category.title}
            </h3>

            <div className={styles.skills.grid}>
              {/* {category.skills.map((skill) => (
                <div key={skill} className={styles.skills.card}> */}
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className={styles.skills.card}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                  >
                  <h4 className={styles.skills.cardTitle}>{skill}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    </motion.div>
  );
}