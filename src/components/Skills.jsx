import './Skills.css';
import {
  PenTool,
  LayoutGrid,
  MonitorSmartphone,
  Layout,
  Diamond,
  Lightbulb,
} from 'lucide-react';

const skills = [
  {
    title: '全流程能力',
    desc: '从需求分析、视觉设计到开发落地，独立负责项目全流程，确保设计从概念到交付的高质量呈现。',
    icon: PenTool,
  },
  {
    title: '规范意识',
    desc: '擅长建立设计规范和组件库，统一品牌视觉体系，提升团队协作效率和设计输出的一致性。',
    icon: LayoutGrid,
  },
  {
    title: '跨端设计经验',
    desc: '覆盖PC端、移动端、数据大屏等多端设计场景，具备复杂信息架构梳理和多端一致性把控能力。',
    icon: MonitorSmartphone,
  },
  {
    title: '用户界面设计',
    desc: '以用户为中心的设计方法论，专注B端C端产品界面设计，打造直觉化、高效的数字产品体验。',
    icon: Layout,
  },
  {
    title: '品牌视觉设计',
    desc: '构建完整品牌视觉识别系统，涵盖Logo规范、品牌色彩体系、字体规范及线上线下物料设计。',
    icon: Diamond,
  },
  {
    title: '持续学习',
    desc: '关注AI产品设计趋势，研究智能交互和用户体验，将新技术融入设计工作流，保持创新活力。',
    icon: Lightbulb,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="container">
        <div className="skills-header">
          <div className="section-label">Expertise</div>
          <h2 className="section-title" id="skills-title">个人优势</h2>
          <p className="section-subtitle">
            从全流程能力到持续学习，用设计的专业度与广度，为每个项目带来独特的价值。
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <IconComponent size={22} strokeWidth={1.5} />
                </div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-desc">{skill.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}