import './Skills.css';
import skillSphereImg from '../assets/skill-sphere.png';
import skillGridImg from '../assets/skill-grid.png';
import skillLayersImg from '../assets/skill-layers.png';
import skillFluidImg from '../assets/skill-fluid.png';
import skillBrandImg from '../assets/skill-brand.png';
import skillLearnImg from '../assets/skill-learn.png';

const skills = [
  {
    num: '01',
    tag: 'CORE',
    title: '全流程能力',
    shape: 'sphere',
    image: skillSphereImg,
    tags: [
      { text: '品牌识别系统梳理', color: 'white', rotate: -4 },
      { text: '视觉规范与延展模板', color: 'dark', rotate: 3 },
      { text: '统一多渠道传播质感', color: 'accent', rotate: -2 },
    ],
  },
  {
    num: '02',
    tag: 'SYSTEM',
    title: '规范意识',
    shape: 'grid',
    image: skillGridImg,
    tags: [
      { text: '品牌识别系统梳理', color: 'white', rotate: -4 },
      { text: '视觉规范与延展模板', color: 'dark', rotate: 3 },
      { text: '统一多渠道传播质感', color: 'accent', rotate: -2 },
    ],
  },
  {
    num: '03',
    tag: 'CORE',
    title: '跨端设计经验',
    shape: 'layers',
    image: skillLayersImg,
    tags: [
      { text: '品牌识别系统梳理', color: 'white', rotate: -4 },
      { text: '视觉规范与延展模板', color: 'dark', rotate: 3 },
      { text: '统一多渠道传播质感', color: 'accent', rotate: -2 },
    ],
  },
  {
    num: '04',
    tag: 'CORE',
    title: '用户界面设计',
    shape: 'fluid',
    image: skillFluidImg,
    tags: [
      { text: '品牌识别系统梳理', color: 'white', rotate: -4 },
      { text: '视觉规范与延展模板', color: 'dark', rotate: 3 },
      { text: '统一多渠道传播质感', color: 'accent', rotate: -2 },
    ],
  },
  {
    num: '05',
    tag: 'SYSTEM',
    title: '品牌视觉设计',
    shape: 'diamond',
    image: skillBrandImg,
    tags: [
      { text: '品牌识别系统梳理', color: 'white', rotate: -4 },
      { text: '视觉规范与延展模板', color: 'dark', rotate: 3 },
      { text: '统一多渠道传播质感', color: 'accent', rotate: -2 },
    ],
  },
  {
    num: '06',
    tag: 'GROWTH',
    title: '持续学习',
    shape: 'wave',
    image: skillLearnImg,
    tags: [
      { text: '品牌识别系统梳理', color: 'white', rotate: -4 },
      { text: '视觉规范与延展模板', color: 'dark', rotate: 3 },
      { text: '统一多渠道传播质感', color: 'accent', rotate: -2 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="container">
        <div className="skills-header">
          <div className="section-label">Expertise</div>
          <h2 className="section-title" id="skills-title">个人优势</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card skill-card-brand" data-shape={skill.shape}>
              <div className="skill-card-top">
                <span className="skill-num">{skill.num}</span>
                <span className="skill-tag">{skill.tag}</span>
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              {skill.image ? (
                <div className="skill-visual skill-visual-img" aria-hidden="true">
                  <img src={skill.image} alt="" />
                </div>
              ) : (
                <div className={skill-visual skill-visual-} aria-hidden="true" />
              )}
              <div className="skill-tags-staircase">
                {skill.tags.map((t, i) => (
                  <span
                    key={i}
                    className={skill-capsule skill-capsule-}
                    style={{ transform: otate(deg) }}
                  >
                    {t.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}