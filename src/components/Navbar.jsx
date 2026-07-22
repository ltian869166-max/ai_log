import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'contact'];
    const handleScrollSpy = () => {
      const scrollY = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav role="navigation" aria-label="主导航" className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="container">
        <div className="navbar-left">
          <a href="#hero" className="navbar-logo">
            <span className="navbar-brand">LinT</span>
          </a>
        </div>

        <div className="navbar-center">
          <a href="#about" onClick={handleNavClick} className={activeSection === "about" ? "active" : ""}>工作经历</a>
          <a href="#projects" onClick={handleNavClick} className={activeSection === "projects" ? "active" : ""}>精选作品</a>
          <a href="#skills" onClick={handleNavClick} className={activeSection === "skills" ? "active" : ""}>个人优势</a>
        </div>

        <div className="navbar-right">
          <a href="#contact" className="navbar-cta" onClick={handleNavClick}>联系我</a>
          <button
            className={`navbar-hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <div className={`navbar-mobile${menuOpen ? ' open' : ''}`}>
        <a href="#about" className="navbar-mobile-link" onClick={handleNavClick}>工作经历</a>
        <a href="#projects" className="navbar-mobile-link" onClick={handleNavClick}>精选作品</a>
        <a href="#skills" className="navbar-mobile-link" onClick={handleNavClick}>个人优势</a>
        <a href="#contact" className="navbar-mobile-link" onClick={handleNavClick}>联系我</a>
      </div>
    </nav>
  );
}
