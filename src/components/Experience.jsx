import { useEffect } from 'react'
import './Experience.css'
import { initScrollAnimations } from '../utils/scrollAnimation.js'

const stats = [
  { value: '6+', label: '年设计经验' },
  { value: '80+', label: '页面设计量' },
  { value: '30+', label: '项目落地' },
  { value: '4', label: '年行业深耕' },
]

const contactInfo = [
  { icon: '✉', label: 'Email', value: '1017309544@qq.com' },
  { icon: '📞', label: 'Phone', value: '13636029463' },
  { icon: '📍', label: 'Location', value: '武汉市洪山区' },
]

export default function Experience() {
  useEffect(() => {
    initScrollAnimations()
  }, [])

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="experience-header">
          <span className="section-subtitle">About Me</span>
          <h2 data-animate className="section-title anim-clip-left anim-hidden">个人经历</h2>
        </div>

        <div className="experience-grid">
          <div data-animate className="experience-avatar anim-zoom-in anim-hidden">
            <div className="avatar-frame">
              <div className="avatar-placeholder">
                <span>LT</span>
              </div>
            </div>
            <div className="avatar-glow" />
          </div>

          <div data-animate data-stagger="0.14" className="experience-info anim-hidden">
            <p className="experience-intro anim-stagger-item anim-hidden">
              你好，我是林甜，UI/视觉设计师，现居武汉。
              6年经验，专注B端和C端产品界面及品牌视觉系统的构建。
              具备从需求分析到视觉设计落地的全流程能力，
              擅长复杂信息架构梳理和视觉规范搭建。
            </p>
            <p className="experience-intro anim-stagger-item anim-hidden">
              关注AI产品设计趋势，研究智能交互和用户体验的持续创新。
              希望用设计为产品与用户创造真正的价值。
            </p>

            <div className="contact-list">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-item anim-stagger-item anim-hidden">
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-animate data-stagger="0.1" className="experience-stats anim-hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card anim-stagger-heavy anim-hidden">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}