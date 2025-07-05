import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <motion.h2
      className="text-3xl font-bold text-primary text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Contact
    </motion.h2>

    <motion.form
      action="https://formspree.io/f/yourID"
      method="POST"
      className="max-w-lg mx-auto grid gap-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="rounded-md px-4 py-3 bg-primary-dark/30 backdrop-blur text-purple-100 placeholder-purple-400 focus:outline-none border border-primary-dark"
      />
      <input
        type="email"
        name="_replyto"
        placeholder="Email"
        required
        className="rounded-md px-4 py-3 bg-primary-dark/30 backdrop-blur text-purple-100 placeholder-purple-400 focus:outline-none border border-primary-dark"
      />
      <textarea
        name="message"
        rows="4"
        placeholder="Project details…"
        className="rounded-md px-4 py-3 bg-primary-dark/30 backdrop-blur text-purple-100 placeholder-purple-400 focus:outline-none border border-primary-dark resize-none"
      ></textarea>
      <button
        type="submit"
        className="bg-primary hover:bg-primary-light transition px-6 py-3 rounded-full text-white font-medium"
      >
        Send Message
      </button>
    </motion.form>
  </section>
);

export default Contact;
