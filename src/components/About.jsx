import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
    <motion.h2
      className="text-3xl font-bold text-primary mb-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      About Me
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-10 items-center">
      <motion.img
        src="me.jpg"
        alt="Avatar"
        className="rounded-full w-60 mx-auto border-4 border-primary-light"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />

      <motion.div
        className="text-purple-300 leading-relaxed space-y-4"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>
          I'm Edwin Bassina, a B.Sc. Mathematics student at <strong>KNUST</strong>, Kumasi.
          My mission is to blend rigorous mathematical thinking with cutting‑edge software
          to build lovable, globally impactful apps.
        </p>
        <p>
          I specialise in <strong>Flutter/Dart</strong> for mobile, modern
          JavaScript frameworks for web, and <strong>Artificial Intelligence and Machine Learning</strong> and <strong>Python</strong>.
        </p>
        <p>
          When I'm not coding, you'll find me crafting tech solutions,
          mentoring peers, or diving into new research papers on AI and ML and Cybersecurity.
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
