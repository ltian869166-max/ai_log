import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="container">
        <div className="navbar-left">
          <a href="#hero" className="navbar-logo">
            <span className="navbar-avatar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <span className="navbar-brand">LinT</span>
          </a>
        </div>

        <div className="navbar-center">
          <a href="#about" onClick={handleNavClick}>工作经历</a>
          <a href="#projects" onClick={handleNavClick}>精选作品</a>
          <a href="#skills" onClick={handleNavClick}>个人优势</a>
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
