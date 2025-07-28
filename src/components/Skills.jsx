import { motion } from 'framer-motion';

const skills = [
  { name: 'Flutter', svg: '/skills/flutter.svg' },
  { name: 'Python', svg: '/skills/python-4.svg' },
  { name: 'JavaScript', svg: '/skills/javascript-1.svg' },
  { name: 'React', svg: '/skills/react-2.svg' },
  { name: 'C#', svg: '/skills/c--4.svg' },
  { name: 'C++', svg: '/skills/c.svg' },
  { name: 'Dart', svg: '/skills/dart.svg' },
  { name: 'Unity', svg: '/skills/unity-technologies-logo.svg' },
  { name: 'HTML', svg: '/skills/html5-2.svg' },
  { name: 'CSS', svg: '/skills/css-3.svg' },
  { name: 'GitHub', svg: '/skills/github-icon-1.svg' },
];

const Skills = () => (
  <section id="skills" className="py-24 px-6 bg-black/95">
    <motion.h2
      className="text-3xl font-bold text-primary text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Skills
    </motion.h2>

    <motion.ul
      className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.05 }
        }
      }}
    >
      {skills.map(skill => (
        <motion.li
          key={skill.name}
          className="flex items-center gap-2 px-4 py-2 bg-primary-dark rounded-md text-sm text-purple-200 shadow"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        >
          <img
            src={skill.svg}
            alt={skill.name}
            className="w-14 h-14 md:w-12 md:h-12 object-contain"
            style={{ minWidth: '2rem', minHeight: '2rem' }}
          />
        </motion.li>
      ))}
    </motion.ul>
  </section>
);

export default Skills;
