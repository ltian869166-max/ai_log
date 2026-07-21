import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Strengths from './components/Strengths.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Strengths />
        <Contact />
      </main>
    </>
  )
}
