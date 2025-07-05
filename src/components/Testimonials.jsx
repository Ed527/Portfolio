import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ama K.',
    role: 'Product Manager, Accra',
    quote: 'Edwin delivered an incredible AI chatbot for us in record time!'
  },
  {
    name: 'John D.',
    role: 'CTO, StartupX',
    quote: 'His Flutter expertise turned our MVP into a production‑ready app.'
  },
  {
    name: 'Grace N.',
    role: 'Data Scientist, Kumasi',
    quote: 'Working with Edwin on ML pipelines was a masterclass in clean code.'
  }
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 px-6">
    <motion.h2
      className="text-3xl font-bold text-primary text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Testimonials
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {testimonials.map((t, i) => (
        <motion.blockquote
          key={t.name}
          className="bg-primary-dark/25 border border-primary-dark backdrop-blur p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <p className="italic mb-4 text-purple-200">"{t.quote}"</p>
          <footer className="text-sm text-primary-light">
            — {t.name}, <span className="text-purple-400">{t.role}</span>
          </footer>
        </motion.blockquote>
      ))}
    </div>
  </section>
);

export default Testimonials;
