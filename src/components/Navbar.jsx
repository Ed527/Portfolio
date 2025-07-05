import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    'Home',
    'About',
    'Skills',
    'Projects',
    'Certificates',
    'Testimonials',
    'Blog',
    'Contact'
  ];
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('dark', dark);
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem('dark');
    if (saved !== null) setDark(saved === 'true');
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur border-b border-primary-dark">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
        <a href="#home" className="text-primary text-2xl font-bold">
          Edwin<span className="text-primary-light">.</span>
        </a>

        <div className="hidden lg:flex gap-6">
          {links.map(link => (
            <a
              key={link}
              href={'#' + link.toLowerCase()}
              className="text-purple-300 hover:text-primary-light transition"
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 text-xl text-primary-light hover:text-primary transition"
            aria-label="Theme toggle"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="lg:hidden overflow-hidden bg-black/90 backdrop-blur"
          >
            <div className="px-6 pb-4 flex flex-col gap-4">
              {links.map(link => (
                <a
                  key={link}
                  href={'#' + link.toLowerCase()}
                  className="text-purple-300 hover:text-primary-light transition"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              ))}
              <button
                onClick={() => { setDark(!dark); setOpen(false); }}
                className="text-left text-purple-300 hover:text-primary-light transition"
              >
                {dark ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
