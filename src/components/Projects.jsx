import { useState, useRef } from 'react';
import './Projects.css';

const categories = [
  '全部',
  '数据大屏',
  '视觉作品',
  '图标设计',
  '社交',
  '游戏',
  '移动端',
  'PC端',
  '平面品牌视觉设计',
];

const projects = [
  {
    id: 1,
    category: '数据大屏',
    title: 'BI工地监控数据大屏',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['数据可视化', '实时监控', '告警系统'],
  },
  {
    id: 2,
    category: '数据大屏',
    title: '智慧城市运营中心',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    tags: ['城市数据', '3D地图', '实时大屏'],
  },
  {
    id: 3,
    category: '视觉作品',
    title: '品牌视觉识别系统',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    tags: ['VI设计', '品牌规范', '视觉语言'],
  },
  {
    id: 4,
    category: '视觉作品',
    title: 'AI产品视觉探索',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['AI设计', '概念视觉', '风格探索'],
  },
  {
    id: 5,
    category: '图标设计',
    title: '企业级图标库80+',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    tags: ['图标系统', '组件库', '设计规范'],
  },
  {
    id: 6,
    category: '图标设计',
    title: '3D图标风格探索',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    tags: ['3D图标', '立体风格', '视觉实验'],
  },
  {
    id: 7,
    category: '社交',
    title: 'PERFECT RUN 运动社区',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    tags: ['社区设计', '社交互动', '运动健康'],
  },
  {
    id: 8,
    category: '社交',
    title: '脱口秀社交平台',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    tags: ['社交平台', '用户体验', '互动设计'],
  },
  {
    id: 9,
    category: '游戏',
    title: '游戏社区App设计',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80',
    tags: ['游戏UI', '社区互动', '赛事系统'],
  },
  {
    id: 10,
    category: '游戏',
    title: '闯关游戏H5活动',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b6f?w=800&q=80',
    tags: ['H5游戏', '活动设计', '增长转化'],
  },
  {
    id: 11,
    category: '移动端',
    title: '计步运动健身App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    tags: ['App设计', '数据可视化', '运动健康'],
  },
  {
    id: 12,
    category: '移动端',
    title: '能源行业协作App',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80',
    tags: ['企业协作', '移动端', '通讯工具'],
  },
  {
    id: 13,
    category: 'PC端',
    title: '招投标信息平台',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['B端产品', '信息检索', '数据平台'],
  },
  {
    id: 14,
    category: 'PC端',
    title: '井讯通协作平台',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    tags: ['企业通讯', '任务管理', '跨端设计'],
  },
  {
    id: 15,
    category: '平面品牌视觉设计',
    title: '品牌海报与物料系统',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    tags: ['海报设计', '品牌物料', '视觉系统'],
  },
  {
    id: 16,
    category: '平面品牌视觉设计',
    title: 'Logo迭代与品牌升级',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    tags: ['Logo设计', '品牌升级', '视觉识别'],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const gridRef = useRef(null);

  const filteredProjects = activeCategory === '全部'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div className="section-label">Selected Works</div>
          <div className="section-title">精选项目</div>
        </div>

        {/* Category Filter */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={ilter-btn }
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="project-grid" ref={gridRef}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
             data-animate-project
              style={{ '--delay': `${index * 0.08}s` }}
           >
              <div className="project-card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-card-overlay">
                  <div className="project-card-category">{project.category}</div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <div className="project-card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
