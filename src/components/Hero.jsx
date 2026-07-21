import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-main-title" data-hero="title">
          <span className="hero-name">LINTIAN</span>
        </div>

        <div className="hero-sub-title" data-hero="subtitle">
          <span className="hero-role">UI Designer & AI Design</span>
        </div>

        <div className="hero-taglines" data-hero="taglines">
          <p className="hero-tagline">视觉设计 · 品牌系统 · 智能交互</p>
        </div>

        <div className="hero-actions" data-hero="actions">
          <a href="#projects" className="hero-cta-primary">查看作品</a>
          <a href="#contact" className="hero-cta-secondary">联系我</a>
        </div>

        <div className="hero-scroll-hint" data-hero="scroll">
          <span className="hero-scroll-text">SCROLL</span>
          <span className="hero-scroll-line" />
        </div>
      </div>
    </section>
  );
}
