import { styles } from "../assets/styles";
import { motion } from "framer-motion";


export default function Contact() {
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
    <section id="contact" className={styles.contact.section}>
      <p className={styles.contact.eyebrow}>Contact</p>

      <h2 className={styles.contact.title}>
        Let's build
        <br />
        something amazing.
      </h2>

      <p className={styles.contact.paragraph}>
        Have a project idea or looking for a developer? Feel free to reach
        out and let's create something exceptional together.
      </p>

      <p className={styles.contact.email}>idmy675@gmail.com</p>

      <p className={styles.contact.hint}>Click below to send an email</p>

      <a href="mailto:idmy675@gmail.com" className={styles.contact.button}>
        Get In Touch
      </a>
    </section>
    </motion.div>
  );
}