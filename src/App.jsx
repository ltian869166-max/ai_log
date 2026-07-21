import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import useAnimations from './hooks/useAnimations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
import './App.css';

function App() {
  useAnimations();

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">跳到主要内容</a>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

export default App;
