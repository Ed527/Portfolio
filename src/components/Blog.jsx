import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Deep Dive into Flutter State Management',
    date: 'May 15, 2025',
    excerpt: 'Explore Provider, Riverpod, and Bloc patterns with code examples and performance tips.',
    link: '#'
  },
  {
    title: 'Demystifying Transformers in Plain English',
    date: 'Apr 22, 2025',
    excerpt: 'A beginner‑friendly guide to attention mechanisms, with animations and PyTorch snippets.',
    link: '#'
  },
  {
    title: 'Building Secure REST APIs with FastAPI',
    date: 'Mar 12, 2025',
    excerpt: 'JWT auth, CORS, testing, and deployment on Railway—all in one practical tutorial.',
    link: '#'
  }
];

const Blog = () => (
  <section id="blog" className="py-24 px-6 bg-black/95">
    <motion.h2
      className="text-3xl font-bold text-primary text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Blog
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {posts.map((post, i) => (
        <motion.article
          key={post.title}
          className="prose prose-invert bg-primary-dark/20 border border-primary-dark p-6 rounded-lg backdrop-blur"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <h3><a href={post.link}>{post.title}</a></h3>
          <p className="text-sm text-purple-400">{post.date}</p>
          <p>{post.excerpt}</p>
          <a href={post.link} className="text-primary-light hover:underline">Read&nbsp;More →</a>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Blog;
