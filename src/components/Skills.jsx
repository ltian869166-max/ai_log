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
    desc: '从需求分析到设计落地，独立完成全流程设计，覆盖产品从0到1的整个设计周期。',
    shape: 'sphere',
    image: skillSphereImg,
  },
  {
    num: '02',
    tag: 'SYSTEM',
    title: '规范意识',
    desc: '注重设计规范与标准化，统一品牌视觉体系，保持跨团队协作效率与一致性。',
    shape: 'grid',
    image: skillGridImg,
  },
  {
    num: '03',
    tag: 'CORE',
    title: '跨端设计经验',
    desc: '覆盖PC端、移动端、小程序、H5等多端设计，保持信息层级与交互体验一致性。',
    shape: 'layers',
    image: skillLayersImg,
  },
  {
    num: '04',
    tag: 'CORE',
    title: '用户界面设计',
    desc: '以用户行为为核心驱动产品体验，擅长C端产品体验设计与B端效率工具设计。',
    shape: 'fluid',
    image: skillFluidImg,
  },
  {
    num: '05',
    tag: 'SYSTEM',
    title: '品牌视觉设计',
    desc: '建立完整的品牌视觉识别系统，涵盖Logo规范、品牌色彩体系和视觉传达设计。',
    shape: 'diamond',
    image: skillBrandImg,
  },
  {
    num: '06',
    tag: 'GROWTH',
    title: '持续学习',
    desc: '关注AI产品设计与新兴技术趋势，持续记录设计思考，将学习成果转化为设计实践。',
    shape: 'wave',
    image: skillLearnImg,
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
            <div key={index} className="skill-card" data-shape={skill.shape}>
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
                <div className={`skill-visual skill-visual-${skill.shape}`} aria-hidden="true" />
              )}
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
