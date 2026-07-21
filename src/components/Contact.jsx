import { useEffect } from 'react'
import './Contact.css'
import { initScrollAnimations } from '../utils/scrollAnimation.js'

export default function Contact() {
  useEffect(() => {
    initScrollAnimations()
  }, [])

  return (
    <section id="contact" className="contact">
      <div className="contact-canvas">
        <div className="contact-grid-lines" />
        <div className="contact-glow-left" />
        <div className="contact-glow-right" />
      </div>

      <div className="contact-content container">
        <div className="contact-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 data-animate className="section-title anim-clip-left anim-hidden">联系我</h2>
        </div>

        <div className="contact-body">
          <p data-animate className="contact-message anim-slide-up-heavy anim-hidden">
            如果你有合作的想法或想法，或者只是想打个招呼，欢迎联系。
            期待与你交流设计、产品和用户体验的无限可能。
          </p>

          <div data-animate data-stagger="0.12" className="contact-methods anim-hidden">
            <a href="mailto:1017309544@qq.com" className="contact-method anim-stagger-heavy anim-hidden">
              <div className="method-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              </div>
              <div>
                <span className="method-label">Email</span>
                <span className="method-value">1017309544@qq.com</span>
              </div>
            </a>

            <a href="tel:13636029463" className="contact-method anim-stagger-heavy anim-hidden">
              <div className="method-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <span className="method-label">Phone</span>
                <span className="method-value">13636029463</span>
              </div>
            </a>

            <div className="contact-method anim-stagger-heavy anim-hidden">
              <div className="method-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <span className="method-label">Location</span>
                <span className="method-value">武汉市洪山区</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <div className="contact-divider" />
          <div className="contact-bottom">
            <span className="contact-copyright">&copy; 2026 林甜</span>
            <span className="contact-role">UI / 视觉设计师</span>
          </div>
        </div>
      </div>
    </section>
  )
}