import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* ===== Section Title ===== */}
        <div className="about-title-area about-header">
          <div className="about-title-row">
            <h2 className="about-main-title">WORK EXPERIENCE</h2>
            <span className="about-title-arrow">↘</span>
          </div>
          <p className="about-title-sub">个人经历</p>
        </div>

        {/* ===== Main Content: Left-Right Split ===== */}
        <div className="about-content-split">

          {/* --- Left: Character Card --- */}
          <div className="about-character-card" data-animate-about="card">
            <div className="about-character-img">
              <img src="/src/assets/about-character.webp" alt="LinT Character" className="about-character-img-src" loading="lazy" />
            </div>
            <div className="about-character-tag">UI design &amp; AI Design</div>
          </div>

          {/* --- Right: Personal Info --- */}
          <div className="about-personal-info" data-animate-about="info">
            <span className="about-info-label">ABOUT ME</span>
            <h3 className="about-info-name">Hi, I am LINTIAN!</h3>
            <p className="about-info-bio">
              6年UI设计经验，专注B端C端产品界面和品牌视觉系统。具备从需求分析到设计落地的全流程能力，擅长复杂信息架构梳理和视觉规范搭建。关注AI产品设计趋势，对智能交互和用户体验有持续研究。希望加入贵司，发挥设计价值。
            </p>

            <div className="about-info-grid">
              <div className="about-info-cell">
                <span className="about-cell-label">当前身份</span>
                <span className="about-cell-value">UI design &amp; AI Design</span>
              </div>
              <div className="about-info-cell">
                <span className="about-cell-label">服务方向</span>
                <span className="about-cell-value">Brand / AI / B端/C端</span>
              </div>
              <div className="about-info-cell">
                <span className="about-cell-label">手机</span>
                <span className="about-cell-value">13636029463</span>
              </div>
              <div className="about-info-cell">
                <span className="about-cell-label">邮箱</span>
                <span className="about-cell-value">1017309544@qq.com</span>
              </div>
            </div>

            <div className="about-stats-row">
              <div className="about-stat-block" data-animate-about="stat">
                <span className="about-stat-num">8+</span>
                <span className="about-stat-lbl">设计经验</span>
              </div>
              <div className="about-stat-block" data-animate-about="stat">
                <span className="about-stat-num">30+</span>
                <span className="about-stat-lbl">项目落地</span>
              </div>
              <div className="about-stat-block" data-animate-about="stat">
                <span className="about-stat-num">500+</span>
                <span className="about-stat-lbl">视觉页面</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Timeline Section ===== */}
        <div className="about-timeline-header">
          <span className="about-tl-label-left">CAREER PATH</span>
          <span className="about-tl-label-right">工作经历</span>
        </div>

        <div className="about-timeline">
          <div className="about-tl-nodes-row">
            {/* Node 1 */}
            <div className="about-tl-node-col" data-animate-about="tl">
              <div className="about-tl-node-marker">✦</div>
              <div className="about-tl-node-card">
                <span className="about-tl-date">2022.1 – 至今</span>
                <h4 className="about-tl-company">时代地智科技股份有限公司</h4>
                <span className="about-tl-role-tag">UI 设计师 / 视觉设计负责人</span>
                <p className="about-tl-desc">
                  负责公司B端C端产品界面设计及品牌视觉，主导多个核心项目的UI规范搭建和迭代优化。
                  迭代公司Logo和品牌视觉系统，统一线上线下物料（海报、手册、展板）的品牌形象；优化设计流程，建立组件库和模板化工作流，提升团队出图效率。
                </p>
              </div>
            </div>

            {/* Node 2 */}
            <div className="about-tl-node-col" data-animate-about="tl">
              <div className="about-tl-node-marker">✦</div>
              <div className="about-tl-node-card">
                <span className="about-tl-date">2018.12 – 2022.1</span>
                <h4 className="about-tl-company">智慧工匠科技有限公司</h4>
                <span className="about-tl-role-tag">UI 设计师</span>
                <p className="about-tl-desc">
                  负责公司旗下微信小程序、APP、网页端及活动H5的视觉设计和风格定义，覆盖C端用户增长和转化场景。
                  设计活动H5小程序，通过优化转化链路，提升用户参与活动率；配合运营团队完成平面物料、表情包、插画、活动背景墙等视觉支持，保证品牌调性统一。
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
