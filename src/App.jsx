import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-purple-100 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Testimonials />
      <Blog />
      <Contact />
      <footer className="text-center py-8 text-sm text-purple-400">
        © {new Date().getFullYear()} Edwin Bassina. 
      </footer>
    </div>
  );
}

export default App;
