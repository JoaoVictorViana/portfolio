import { TechCategory } from '@/types'

export const technologies: TechCategory[] = [
  {
    id: 'frontend',
    name: 'Front-End',
    icon: 'frontend',
    items: [
      { name: 'React / Next.js', level: 0.95 },
      { name: 'TypeScript', level: 0.88 },
      { name: 'JavaScript', level: 0.95 },
      { name: 'HTML / CSS', level: 0.92 },
    ],
  },
  {
    id: 'backend',
    name: 'Back-End',
    icon: 'backend',
    items: [
      { name: 'Node.js', level: 0.9 },
      { name: 'PHP / Laravel', level: 0.85 },
      { name: 'Zend Framework', level: 0.78 },
      { name: 'Java', level: 0.75 },
    ],
  },
  {
    id: 'database',
    name: 'Banco de Dados',
    icon: 'database',
    items: [
      { name: 'MySQL', level: 0.92 },
      { name: 'MongoDB', level: 0.8 },
      { name: 'Oracle DB', level: 0.7 },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    icon: 'devops',
    items: [
      { name: 'Docker', level: 0.85 },
      { name: 'Kubernetes', level: 0.75 },
      { name: 'AWS', level: 0.78 },
      { name: 'Azure DevOps', level: 0.72 },
    ],
  },
  {
    id: 'messaging',
    name: 'Mensageria & APIs',
    icon: 'messaging',
    items: [
      { name: 'REST APIs', level: 0.95 },
      { name: 'RabbitMQ', level: 0.8 },
      { name: 'Microserviços', level: 0.82 },
    ],
  },
  {
    id: 'cms',
    name: 'CMS & Plataformas',
    icon: 'cms',
    items: [
      { name: 'WordPress', level: 0.9 },
      { name: 'Moodle', level: 0.78 },
      { name: 'Liferay', level: 0.72 },
    ],
  },
]
