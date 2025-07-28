import { motion } from 'framer-motion';

const projectData = [
  {
    title: 'Smart Tutor',
    desc: 'AI‑powered Flutter app designed to help student study and boost understanding by hidering any distractions, providing soothing music to create a cool atmosphere for learning and standardized quizzes to boost memory retention',
    link: '#'
  },
  {
    title: 'FaithFlow',
    desc: 'Cross‑platform devotional & worship app with playlist builder.',
    link: '#'
  },
  {
    title: 'AI Math Tutor',
    desc: 'Secure offline‑first vault with AES‑256 encryption & biometrics.',
    link: '#'
  },
  {
    title: 'AI Chatbot Suite',
    desc: 'OpenAI‑powered chatbot API + Flutter front‑end, Railway CI/CD.',
    link: '#'
  }
];

const Projects = () => (
  <section id="projects" className="py-24 px-6">
    <motion.h2
      className="text-3xl font-bold text-primary text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Projects
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {projectData.map((p, i) => (
        <motion.article
          key={p.title}
          className="bg-primary-dark/30 backdrop-blur rounded-xl p-6 border border-primary-dark shadow-lg flex flex-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <h3 className="text-xl font-semibold text-primary-light mb-2">{p.title}</h3>
          <p className="text-purple-300 flex-1">{p.desc}</p>
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-primary-light hover:text-primary transition self-start"
          >
            Coming&nbsp;Soon 
          </a>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Projects;
