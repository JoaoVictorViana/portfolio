import { ExperienceItem } from '@/types'

export const experiences: ExperienceItem[] = [
  {
    id: 'unimed',
    company: 'Unimed Rio Preto',
    role: 'Senior Full-Stack Developer',
    period: 'jan/2026 - presente',
    description:
      'Desenvolvendo arquiteturas escaláveis e microserviços com foco em alta disponibilidade e performance. Implementação de soluções cloud-native com Kubernetes e Azure DevOps.',
    tags: ['Java', 'Node.js', 'React', 'Kubernetes', 'Azure DevOps'],
    isActive: true,
  },
  {
    id: 'tecla-t',
    company: 'Tecla T',
    role: 'Full-Stack Developer Pleno',
    period: 'mai/2023 - jan/2026',
    location: 'Fortaleza, CE',
    description:
      'Atuação em plataformas educacionais e sistemas administrativos complexos. Desenvolvimento de arquitetura de microserviços com RabbitMQ e integração de múltiplas tecnologias.',
    tags: ['PHP', 'Node.js', 'Next.js', 'RabbitMQ', 'MySQL', 'MongoDB', 'Moodle', 'Liferay'],
  },
  {
    id: 'quikdev',
    company: 'QuikDev',
    role: 'Full-Stack / Front-end',
    period: 'set/2021 - fev/2024',
    description:
      'Desenvolvimento de sistemas imobiliários robustos e plataformas de monitoramento em tempo real. Especializações em TypeScript e React.',
    tags: ['PHP', 'Zend Framework', 'Next.js', 'TypeScript'],
  },
  {
    id: 'sm-places',
    company: 'SM Places',
    role: 'Front-end Pleno',
    period: 'jul/2022 - jun/2023',
    description:
      'Desenvolvimento de interfaces modernas e performáticas. Implementação de componentes reutilizáveis com padrões de design avançados.',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    id: 'apiki',
    company: 'Apiki WordPress',
    role: 'Back-end',
    period: 'mai/2020 - jun/2022',
    description:
      'Desenvolvimento backend especializado em plataformas WordPress e Liferay. Implementação de plugins customizados e otimização de performance.',
    tags: ['WordPress', 'PHP', 'React', 'MySQL', 'Liferay'],
  },
  {
    id: 'ifce',
    company: 'IFCE',
    role: 'Full-Stack',
    period: 'out/2019 - mai/2021',
    description:
      'Desenvolvimento de aplicações web completas para instituição de educação. Trabalho com stack PHP/Laravel e React.',
    tags: ['Laravel', 'React', 'PHP'],
  },
  {
    id: 'liceu',
    company: 'Liceu Municipal de Maracanaú',
    role: 'Monitor de Robótica',
    period: 'mai/2019 - dez/2019',
    description:
      'Orientação de estudantes em programação e robótica educacional. Desenvolvimento de projetos práticos e mentoria técnica.',
    tags: ['Educação', 'Robótica', 'Programação'],
  },
]
