import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Background */}
      <div className="contact-bg">
        <div className="contact-bg-glow contact-bg-glow-1" />
        <div className="contact-bg-glow contact-bg-glow-2" />
      </div>

      <div className="container contact-container">
        <div className="contact-split">
          {/* Left: Text */}
          <div className="contact-left">
            <div className="contact-top">
              <div className="contact-label">联系方式</div>
              <h2 className="contact-title">
                THANKS FOR<br />
                WATCHING
              </h2>
              <p className="contact-visual-highlight">
                <span className="visual-accent">VISUAL</span> PORTFOLIO
              </p>
            </div>
            <div className="contact-bottom">
              <div className="contact-badge">期待你的面试</div>
            </div>
          </div>

          {/* Right: Glass card */}
          <div className="contact-right">
            <div className="contact-glass-card">
              <h3 className="glass-card-title">
                <span className="glass-card-accent">C</span>ONT<span className="glass-card-accent">A</span>CT
              </h3>
              <div className="glass-card-divider" />
              <div className="glass-card-items">
                <div className="glass-card-item">
                  <div className="glass-card-item-label">手机</div>
                  <div className="glass-card-item-value">13636029463</div>
                </div>
                <div className="glass-card-item">
                  <div className="glass-card-item-label">微信</div>
                  <div className="glass-card-item-value">lintian_design</div>
                </div>
                <div className="glass-card-item">
                  <div className="glass-card-item-label">邮箱</div>
                  <div className="glass-card-item-value">1017309544@qq.com</div>
                </div>
              </div>
              <div className="glass-card-divider" />
              <div className="glass-card-footer">
                <a href="mailto:1017309544@qq.com" className="glass-card-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  发送邮件
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <p>&copy; 2026 林甜. All rights reserved.</p>
      </div>
    </section>
  );
}
