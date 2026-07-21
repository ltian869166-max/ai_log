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
    title: 'ȫ��������',
    desc: '������������Ӿ���Ƶ�������أ�����������Ŀȫ���̣�ȷ����ƴӸ�������ĸ��������֡�',
    shape: 'sphere',
    image: skillSphereImg,
  },
  {
    num: '02',
    tag: 'SYSTEM',
    title: '�淶��ʶ',
    desc: '�ó�������ƹ淶������⣬ͳһƷ���Ӿ���ϵ�������Ŷ�Э��Ч�ʺ���������һ���ԡ�',
    shape: 'grid',
    image: skillGridImg,
  },
  {
    num: '03',
    tag: 'CORE',
    title: '�����ƾ���',
    desc: '����PC�ˡ��ƶ��ˡ����ݴ����ȶ����Ƴ������߱�������Ϣ�ܹ�����Ͷ��һ���԰ѿ�������',
    shape: 'layers',
    image: skillLayersImg,
  },
  {
    num: '04',
    tag: 'CORE',
    title: '�û��������?,
    desc: '���û�Ϊ���ĵ���Ʒ����ۣ�רעB��C�˲�Ʒ������ƣ�����ֱ��������Ч�����ֲ�Ʒ����?,
    shape: 'fluid',
    image: skillFluidImg,
  },
  {
    num: '05',
    tag: 'SYSTEM',
    title: 'Ʒ���Ӿ����?,
    desc: '��������Ʒ���Ӿ�ʶ��ϵͳ������Logo�淶��Ʒ��ɫ����ϵ������淶����������������ơ�',
    shape: 'diamond',
    image: skillBrandImg,
  },
  {
    num: '06',
    tag: 'GROWTH',
    title: '����ѧϰ',
    desc: '��עAI��Ʒ������ƣ��о����ܽ������û����飬���¼���������ƹ����������ִ��»�����',
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
          <h2 className="section-title" id="skills-title">��������</h2>
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
