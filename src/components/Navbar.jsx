import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
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
          <a href="#about">工作经历</a>
          <a href="#projects">精选作品</a>
          <a href="#skills">个人优势</a>
        </div>

        <div className="navbar-right">
          <a href="#contact" className="navbar-cta">联系我</a>
        </div>
      </div>
    </nav>
  );
}
