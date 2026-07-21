import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: '工作经历', href: '#experience' },
  { label: '精选作品', href: '#projects' },
  { label: '个人优势', href: '#strengths' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (sel) => {
    document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={'navbar' + (scrolled ? ' scrolled' : '')}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}>
          <svg className="logo-avatar" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="7" r="3.5" fill="#050505" opacity="0.8" />
            <path d="M3 15.5c0-3.5 2.5-6 6-6s6 2.5 6 6" stroke="#050505" strokeWidth="1.2" fill="none" opacity="0.8" />
          </svg>
          <span className="logo-text">LinT</span>
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="nav-cta"
          onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
        >
          联系我
        </a>
      </div>
    </nav>
  );
}
