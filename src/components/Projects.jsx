import { useEffect } from 'react';
import BorderGlow from './BorderGlow';
import './Projects.css';
import { initScrollAnimations } from '../utils/scrollAnimation.js';

const projects = [
  {
    title: '数据大屏',
    subtitle: '施工管理数据可视化',
    desc: '远程监控工地施工现场的数据可视化系统，保障施工安全和管理安全。',
    gradient: 'linear-gradient(135deg, #0a1628, #0d2137)',
    accent: '#00BCD4',
    tags: ['数据大屏', '可视化', '预警系统'],
  },
  {
    title: '智慧工地',
    subtitle: '招投标信息平台',
    desc: '面向中小企业的招标、投标、企业信息咨询平台，数据驱动使用便捷高效。',
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    accent: '#7C4DFF',
    tags: ['B端', 'PC+移动', '信息化'],
  },
  {
    title: '视觉作品',
    subtitle: '品牌视觉设计',
    desc: '迭代公司Logo和品牌视觉系统，统一线上线下物料的品牌形象。',
    gradient: 'linear-gradient(135deg, #1a2332, #0f1923)',
    accent: '#448AFF',
    tags: ['品牌', '视觉系统', 'VI'],
  },
  {
    title: '图标设计',
    subtitle: 'UI图标组件库',
    desc: '建立组件库和模板化工作流，提升团队出图效率。',
    gradient: 'linear-gradient(135deg, #0d2137, #1a3a4a)',
    accent: '#4FC3F7',
    tags: ['图标', '组件库', '设计系统'],
  },
  {
    title: '社交应用',
    subtitle: '社交互动平台',
    desc: '设计活动H5小程序，通过优化转化链路，提升用户参与活动率。',
    gradient: 'linear-gradient(135deg, #1a1a2e, #2d1b3d)',
    accent: '#E040FB',
    tags: ['社交', 'H5', '增长'],
  },
  {
    title: '游戏界面',
    subtitle: '游戏UI/UX设计',
    desc: '为移动端游戏设计沉浸式界面体验，提升用户留存和付费转化。',
    gradient: 'linear-gradient(135deg, #1a1a2e, #1e3a2e)',
    accent: '#69F0AE',
    tags: ['游戏', 'UI', '交互'],
  },
  {
    title: '移动端',
    subtitle: 'APP/小程序设计',
    desc: '负责公司旗下微信小程序、APP、网页端及活动H5的视觉设计和风格定义。',
    gradient: 'linear-gradient(135deg, #0d2137, #1a3a4a)',
    accent: '#4FC3F7',
    tags: ['移动端', 'APP', '小程序'],
  },
  {
    title: '平面品牌',
    subtitle: '品牌视觉设计',
    desc: '配合运营团队完成平面物料、表情包、插画、活动背景墙等视觉支持。',
    gradient: 'linear-gradient(135deg, #1a2332, #0f1923)',
    accent: '#FF6D00',
    tags: ['平面', '品牌', '视觉'],
  },
];

export default function Projects() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects-header">
          <span className="section-subtitle">Featured Projects</span>
          <h2 data-animate className="section-title anim-clip-left anim-hidden">精选项目</h2>
          <p className="section-desc">
            从数据大屏到品牌视觉，跨越多个行业的设计实践
          </p>
        </div>

        <div data-animate data-stagger="0.18" className="projects-grid anim-hidden">
          {projects.map((project, index) => (
            <BorderGlow
              key={project.title}
              className="project-card anim-stagger-heavy anim-hidden anim-img-reveal-wrapper"
              backgroundColor="transparent"
              borderRadius={12}
              glowRadius={24}
              glowColor="74 100 50"
              glowIntensity={0.6}
              edgeSensitivity={30}
              coneSpread={20}
              colors={['#CCFF00', '#a6d400', '#88cc00']}
              fillOpacity={0.25}
            >
              <div
                style={{
                  background: project.gradient,
                  '--card-accent': project.accent,
                  minHeight: '420px',
                  borderRadius: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <div className="project-card-bg">
                  <div
                    className="project-card-pattern"
                    style={{
                      background: 'radial-gradient(circle at 20% 50%, ' + project.accent + '15, transparent 50%),' +
                        'radial-gradient(circle at 80% 20%, ' + project.accent + '08, transparent 40%)',
                    }}
                  />
                  <div className="project-card-shapes">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="project-shape"
                        style={{
                          background: project.accent,
                          opacity: 0.04 + i * 0.02,
                          width: (120 + i * 40) + 'px',
                          height: (120 + i * 40) + 'px',
                          top: (20 + i * 15) + '%',
                          right: (10 + i * 8) + '%',
                          animationDelay: (i * 0.5) + 's',
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="project-card-content">
                  <span className="project-number">0{index + 1}</span>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-cta">
                    <span>了解详情</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}