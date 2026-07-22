import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Decorative background elements */}
      <div className="hero-decor" aria-hidden="true">
        <div className="hero-decor-dot hero-decor-dot-1" />
        <div className="hero-decor-dot hero-decor-dot-2" />
        <div className="hero-decor-dot hero-decor-dot-3" />
        <div className="hero-decor-line hero-decor-line-1" />
        <div className="hero-decor-line hero-decor-line-2" />
        <div className="hero-decor-glow" />
      </div>

      {/* Top bar */}
      <div className="hero-top-bar">
        <span className="hero-top-label">PORTFOLIO</span>
        <span className="hero-top-year">2024 – 2026</span>
      </div>

      {/* Main content */}
      <div className="hero-main">
        <div className="hero-left">
          <span className="hero-index">01</span>
          <span className="hero-left-line" />
        </div>
        <div className="hero-center">
          <h1 className="hero-name">LINTIAN</h1>
          <div className="hero-role-row">
            <span className="hero-role-text">UI Designer</span>
            <span className="hero-role-sep" />
            <span className="hero-role-text accent">AI Design</span>
          </div>
          <p className="hero-tagline">视觉设计 · 品牌系统 · 智能交互</p>
        </div>
        <div className="hero-right">
          <div className="hero-info-block">
            <span className="hero-info-label">SERVICE</span>
            <span className="hero-info-value">视觉设计</span>
            <span className="hero-info-value">品牌体系</span>
            <span className="hero-info-value">交互体验</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hero-bottom-bar">
        <span className="hero-bottom-label">SCROLL</span>
        <span className="hero-bottom-line" />
      </div>
    </section>
  );
}