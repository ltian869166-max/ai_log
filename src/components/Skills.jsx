import './Skills.css';
import BorderGlow from './BorderGlow';

const skills = [
  {
    title: '全流程能力',
    desc: '从需求分析、视觉设计到开发落地，独立负责项目全流程，确保设计从概念到交付的高质量呈现。',
    icon: 'M20.59 4.59l2.82 2.82-12 12L4 18v-2.82l12-12zM16 2l4 4',
  },
  {
    title: '规范意识',
    desc: '擅长建立设计规范和组件库，统一品牌视觉体系，提升团队协作效率和设计输出的一致性。',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 7h10v10H7V7z',
  },
  {
    title: '跨端设计经验',
    desc: '覆盖PC端、移动端、数据大屏等多端设计场景，具备复杂信息架构梳理和多端一致性把控能力。',
    icon: 'M12 2a10 10 0 1 0 10 10h-10V2z',
  },
  {
    title: '用户界面设计',
    desc: '以用户为中心的设计方法论，专注B端C端产品界面设计，打造直觉化、高效的数字产品体验。',
    icon: 'M3 13h18M3 7h18M3 3h18M3 17h18M3 21h18',
  },
  {
    title: '品牌视觉设计',
    desc: '构建完整品牌视觉识别系统，涵盖Logo规范、品牌色彩体系、字体规范及线上线下物料设计。',
    icon: 'M12 2l9 9-9 9-9-9 9-9z',
  },
  {
    title: '持续学习',
    desc: '关注AI产品设计趋势，研究智能交互和用户体验，将新技术融入设计工作流，保持创新活力。',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <div className="section-label">Expertise</div>
          <div className="section-title">个人优势</div>
          <p className="section-subtitle">
            从全流程能力到持续学习，用设计的专业度与广度，为每个项目带来独特的价值。
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <BorderGlow
              key={index}
              borderRadius={10}
              backgroundColor="#121216"
              glowColor="80 100 50"
              colors={['#CCFF00', '#00d4ff', '#7b2ff7']}
              edgeSensitivity={30}
              glowRadius={24}
              glowIntensity={0.6}
              fillOpacity={0.3}
            >
              <div className="skill-card">
                <div className="skill-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={skill.icon} />
                  </svg>
                </div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-desc">{skill.desc}</p>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
