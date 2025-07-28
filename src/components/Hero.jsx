import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-primary-light">
          <Typewriter
              words={[
                "Hi, I'm Edwin Bassina",
              ]}
              loop={1}             // 0 = infinite loop; set to 1 for single run
              cursor              // show cursor
              cursorStyle="|"     
              typeSpeed={70}      // ms per character
              deleteSpeed={0}    // ms per character deletion
              delaySpeed={2000}   // ms before deleting
            />
        </h1>
        <p className="text-lg mt-4 text-purple-400">
          Math Student • Flutter & AI Enthusiast • Full‑Stack Developer
        </p>
        <a
          href="#projects"
          className="inline-block mt-8 px-8 py-3 bg-primary hover:bg-primary-light rounded-full text-white font-medium transition"
        >
          Explore My Work
        </a>
      </motion.div>

      {/* Animated Blobs */}
      <motion.div
        className="absolute w-[260px] h-[260px] bg-primary opacity-20 rounded-full filter blur-3xl top-[-80px] left-[-80px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[280px] h-[280px] bg-primary-light opacity-10 rounded-full filter blur-3xl bottom-[-80px] right-[-60px]"
        animate={{ scale: [1, 0.9, 1], x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default Hero;
