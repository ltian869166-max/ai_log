import { useState, useRef } from 'react';
import './Projects.css';

const categories = [
  'ȫ��',
  '���ݴ���',
  '�Ӿ���Ʒ',
  'ͼ�����',
  '�罻',
  '��Ϸ',
  '�ƶ���',
  'PC��',
  'ƽ��Ʒ���Ӿ����',
];

const projects = [
  {
    id: 1,
    category: '���ݴ���',
    title: 'BI���ؼ�����ݴ���',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['���ݿ��ӻ�', 'ʵʱ���', '�澯ϵͳ'],
  },
  {
    id: 2,
    category: '���ݴ���',
    title: '�ǻ۳�����Ӫ����',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    tags: ['��������', '3D��ͼ', 'ʵʱ����'],
  },
  {
    id: 3,
    category: '�Ӿ���Ʒ',
    title: 'Ʒ���Ӿ�ʶ��ϵͳ',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    tags: ['VI���', 'Ʒ�ƹ淶', '�Ӿ�����'],
  },
  {
    id: 4,
    category: '�Ӿ���Ʒ',
    title: 'AI��Ʒ�Ӿ�̽��',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['AI���', '�����Ӿ�', '���̽��'],
  },
  {
    id: 5,
    category: 'ͼ�����',
    title: '��ҵ��ͼ���80+',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    tags: ['ͼ��ϵͳ', '�����', '��ƹ淶'],
  },
  {
    id: 6,
    category: 'ͼ�����',
    title: '3Dͼ����̽��',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    tags: ['3Dͼ��', '������', '�Ӿ�ʵ��'],
  },
  {
    id: 7,
    category: '�罻',
    title: 'PERFECT RUN �˶�����',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    tags: ['�������', '�罻����', '�˶�����'],
  },
  {
    id: 8,
    category: '�罻',
    title: '�ѿ����罻ƽ̨',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    tags: ['�罻ƽ̨', '�û�����', '�������'],
  },
  {
    id: 9,
    category: '��Ϸ',
    title: '��Ϸ����App���',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80',
    tags: ['��ϷUI', '��������', '����ϵͳ'],
  },
  {
    id: 10,
    category: '��Ϸ',
    title: '������ϷH5�',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b6f?w=800&q=80',
    tags: ['H5��Ϸ', '����', '����ת��'],
  },
  {
    id: 11,
    category: '�ƶ���',
    title: '�Ʋ��˶�����App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    tags: ['App���', '���ݿ��ӻ�', '�˶�����'],
  },
  {
    id: 12,
    category: '�ƶ���',
    title: '��Դ��ҵЭ��App',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80',
    tags: ['��ҵЭ��', '�ƶ���', 'ͨѶ����'],
  },
  {
    id: 13,
    category: 'PC��',
    title: '��Ͷ����Ϣƽ̨',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['B�˲�Ʒ', '��Ϣ����', '����ƽ̨'],
  },
  {
    id: 14,
    category: 'PC��',
    title: '��ѶͨЭ��ƽ̨',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    tags: ['��ҵͨѶ', '�������', '������'],
  },
  {
    id: 15,
    category: 'ƽ��Ʒ���Ӿ����',
    title: 'Ʒ�ƺ���������ϵͳ',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    tags: ['�������', 'Ʒ������', '�Ӿ�ϵͳ'],
  },
  {
    id: 16,
    category: 'ƽ��Ʒ���Ӿ����',
    title: 'Logo������Ʒ������',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    tags: ['Logo���', 'Ʒ������', '�Ӿ�ʶ��'],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('ȫ��');
  const gridRef = useRef(null);

  const filteredProjects = activeCategory === 'ȫ��'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects-header">
          <div className="section-label">Selected Works</div>
          <h2 className="section-title" id="projects-title">��ѡ��Ŀ</div>
        </h2>

        {/* Category Filter */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
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
              data-animate-project=""

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
