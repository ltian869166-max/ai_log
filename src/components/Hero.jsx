import { useEffect, useRef } from 'react'
import './Hero.css'

const projectCards = [
  { label: '甜点·蛋糕', color: '#ff6b8a' },
  { label: '卡通角色', color: '#6b5bff' },
  { label: '香水·美妆', color: '#4ade80' },
  { label: '暖光香水', color: '#fb923c' },
  { label: '城市景观', color: '#38bdf8' },
  { label: '室内·桌面', color: '#a78bfa' },
  { label: '数字积木', color: '#f472b6' },
  { label: '吉他·乐器', color: '#f87171' },
  { label: '粉色系列', color: '#e879f9' },
]

export default function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const taglineRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)

  // ---- Opening animation sequence ----
  useEffect(() => {
    const els = [
      { ref: titleRef, delay: 400, anim: 'stretch' },
      { ref: subtitleRef, delay: 800, anim: 'fadeUp' },
      { ref: taglineRef, delay: 1100, anim: 'fadeUp' },
      { ref: descRef, delay: 1400, anim: 'fadeUp' },
      { ref: ctaRef, delay: 1700, anim: 'fadeUp' },
    ]

    const timer = setTimeout(() => {
      els.forEach(({ ref, delay, anim }) => {
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.opacity = '1'
            ref.current.style.transform = 'translateY(0)'
            if (anim === 'stretch') {
              ref.current.style.transform = 'scale(1, 1)'
            }
          }
        }, delay)
      })
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (sel) => {
    document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <img src="/cover-bg.jpg" alt="background" className="hero-bg-img" />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content container">
        <div className="hero-title-group">
          <h1 ref={titleRef} className="hero-main-title">
            LINTIAN
            <span className="hero-stars">
              <span className="star-large">✦</span>
              <span className="star-small">✦</span>
            </span>
          </h1>
          <h2 ref={subtitleRef} className="hero-sub-title">PORTFOLIO</h2>
          <div className="hero-signature">lintian</div>

          <div ref={taglineRef} className="hero-tagline-group">
            <span>用视觉系统与 AI 工作流</span>
            <span>让品牌内容更快、更准、更有辨识度</span>
          </div>

          <p ref={descRef} className="hero-desc">
            UI / 视觉设计师 · 6年经验 · 专注B端C端产品界面与品牌视觉
          </p>

          <div ref={ctaRef} className="hero-actions">
            <a href="#experience" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('#experience') }}>
              工作经历
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}>
              联系我
            </a>
          </div>
        </div>

        <div className="hero-cards-section">
          <div className="hero-cards-track">
            {projectCards.map((card, i) => (
              <div key={i} className="hero-card" style={{ background: card.color }}>
                <span className="hero-card-label">{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
