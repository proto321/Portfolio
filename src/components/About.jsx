import { styles } from "../assets/styles";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

const stats = [
  {
    number: "6+",
    label: "Full-Stack Projects",
    color: styles.about.statNumberCyan,
  },
  {
    number: "10+",
    label: "Technologies Learned",
    color: styles.about.statNumberPurple,
  },
  {
    number: "100%",
    label: "Responsive Design",
    color: styles.about.statNumberCyan,
  },
  {
    number: "∞",
    label: "Learning Mindset",
    color: styles.about.statNumberPurple,
  },
];

const quickFacts = [
  {
    icon: <FaMapMarkerAlt />,
    text: "India",
  },
  {
    icon: <FaGraduationCap />,
    text: "B.Tech Computer Science Engineering",
  },
  {
    icon: <FaLaptopCode />,
    text: "Full-Stack Web Developer",
  },
  {
    icon: <FaRocket />,
    text: "Always Learning New Technologies",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about.section}>
      <div className={styles.about.grid}>
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className={styles.about.eyebrow}>About Me</p>

          <h2 className={styles.about.title}>
            Developing scalable full-stack solutions with modern technologies.
          </h2>
        </motion.div>

        

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className={styles.about.paragraph}>
            I'm a Computer Science Engineering student passionate about creating
            modern, scalable web applications. I enjoy transforming ideas into
            responsive user interfaces, building secure backend systems, and
            designing efficient databases. My core technologies include React,
            Node.js, PHP, MySQL, Tailwind CSS, and JavaScript. I'm continuously
            learning new technologies and love solving real-world problems
            through clean and maintainable code.
          </p>
          {/* Quick Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-10">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                }}
              >
                <span className="text-cyan-400 text-lg">{fact.icon}</span>
                <span className="text-gray-300">{fact.text}</span>
              </motion.div>
            ))}
          </div>

          

          {/* Stats */}
          <div className={styles.about.statsGrid}>
            {stats.map((item, index) => (
              <motion.div
                key={index}
                className={styles.about.statCard}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.04,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <h3 className={item.color}>{item.number}</h3>

                <p className={styles.about.statLabel}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}