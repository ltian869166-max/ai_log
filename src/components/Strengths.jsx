import { useEffect } from 'react'
import BorderGlow from './BorderGlow'
import './Strengths.css'
import { initScrollAnimations } from '../utils/scrollAnimation.js'

const strengths = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
      </svg>
    ),
    title: '全流程能力',
    desc: '从需求分析、视觉设计到开发落地，独立负责项目全流程。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: '规范意识',
    desc: '擅长建立设计规范和组件库，提升团队协作效率。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
    title: '跨端经验',
    desc: '覆盖PC、移动端、数据大屏等多端设计，保持一致性和效率。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: '持续学习',
    desc: '关注AI产品设计趋势，研究智能交互和用户体验。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    title: '多工具栈',
    desc: '精通Figma、Sketch、Adobe XD、PS、AI、Axure等工具。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: '信息架构',
    desc: '擅长复杂信息架构梳理和视觉降噪，提升信息传达效率。',
  },
]

export default function Strengths() {
  useEffect(() => {
    initScrollAnimations()
  }, [])

  return (
    <section id="strengths" className="strengths section">
      <div className="container">
        <div className="strengths-header">
          <span className="section-subtitle">My Specialties</span>
          <h2 data-animate className="section-title anim-clip-left anim-hidden">个人优势</h2>
          <p className="section-desc">
            多年设计与项目管理实践积累的核心能力
          </p>
        </div>

        <div data-animate data-stagger="0.1" className="strengths-grid anim-hidden">
          {strengths.map((item) => (
            <BorderGlow
              key={item.title}
              backgroundColor="transparent"
              borderRadius={12}
              glowRadius={24}
              glowColor="74 100 50"
              glowIntensity={0.6}
              edgeSensitivity={30}
              coneSpread={20}
              colors={['#CCFF00', '#a6d400', '#88cc00']}
              fillOpacity={0.25}
              className="strength-card anim-stagger-heavy anim-hidden"
            >
              <div className="strength-icon">{item.icon}</div>
              <h3 className="strength-title">{item.title}</h3>
              <p className="strength-desc">{item.desc}</p>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  )
}
