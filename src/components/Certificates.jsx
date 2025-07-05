import { motion } from 'framer-motion';

const certs = [
  {
    title: 'HP Cybersecurity Certification',
    year: '2025',
    img: '/certs/hpcybercert.jpg',
  },
  {
    title: 'Zaptek Mobile App Development Certification',
    year: '2025',
    img: '/certs/Zaptekcert.jpg',
  },
  {
    title: 'HP AI Certification',
    year: '2025',
    img: '/certs/hpaicert.jpg',
  },
  {
    title: 'Thrive Africa Front-End Software Developer Certification',
    year: '2025',
    img: '/images/certs/aws-cloud.png',
  },
];

const Certificates = () => (
  <section id="certificates" className="py-24 px-6 bg-black/95">
    <motion.h2
      className="text-3xl font-bold text-primary text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Certificates
    </motion.h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {certs.map((c, i) => (
        <motion.div
          key={c.title}
          className="border border-primary-dark rounded-lg p-6 bg-primary-dark/25 backdrop-blur flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <img
            src={c.img}
            alt={c.title}
            className="mb-4 rounded shadow"
            style={{ width: '110%', maxWidth: '360px', height: 'auto', maxHeight: '200px', objectFit: 'contain', background: '#222' }}
            onError={e => { e.target.onerror = null; e.target.src = '/images/certs/placeholder.png'; }}
          />
          <h3 className="text-lg font-semibold text-primary-light text-center">{c.title}</h3>
          <p className="text-sm text-purple-300 mt-2">{c.year}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Certificates;
