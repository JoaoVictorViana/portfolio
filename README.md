# Portfólio Next.js - João Victor Duarte

Um portfólio profissional moderno para Senior Full-Stack Developer, construído com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

## Estrutura do Projeto

```
portfolio-nextjs/
├── public/                          # Arquivos estáticos
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout com metadata
│   │   ├── page.tsx                # Página principal
│   │   └── globals.css             # Estilos globais
│   ├── components/
│   │   ├── ui/                     # Componentes reutilizáveis
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Tag.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   └── ProgressBar.tsx
│   │   ├── layout/                 # Componentes de layout
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── CustomCursor.tsx
│   │   └── sections/               # Seções principais
│   │       ├── Hero/
│   │       ├── About/
│   │       ├── Experience/
│   │       ├── Technologies/
│   │       └── Contact/
│   ├── hooks/                      # Hooks customizados
│   │   ├── useTyping.ts
│   │   ├── useTilt.ts
│   │   ├── useMagnetic.ts
│   │   ├── useCounter.ts
│   │   └── useIntersection.ts
│   ├── data/                       # Dados da aplicação
│   │   ├── experience.ts
│   │   ├── technologies.ts
│   │   ├── certifications.ts
│   │   ├── stats.ts
│   │   └── contact.ts
│   ├── lib/                        # Utilidades
│   │   └── cn.ts
│   └── types/                      # Tipos TypeScript
│       └── index.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.ts
└── .gitignore
```

## Instalação

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Setup

1. Navegar até o diretório do projeto:
```bash
cd portfolio-nextjs
```

2. Instalar dependências:
```bash
npm install
```

Se houver conflitos:
```bash
npm install --legacy-peer-deps
```

3. Executar em desenvolvimento:
```bash
npm run dev
```

4. Acessar em `http://localhost:3000`

## Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Build para produção
npm start        # Inicia o servidor de produção
npm run lint     # Executa linter
```

## Funcionalidades

### Interatividade
- Cursor customizado com efeito de lag (dot + ring)
- Navbar com blur e transição ao scroll
- Barra de progresso de scroll no topo
- Efeito typing animado no Hero
- Efeito tilt 3D nos cards
- Botões com efeito magnético
- Contadores animados nas estatísticas
- Barras de progresso animadas
- Observador de interseção para entradas de seção

### Design
- Tema dark com paleta navy/blue/cyan
- Gradientes sofisticados
- Animações fluidas com Framer Motion
- Responsividade completa
- Tipografia profissional (Inter + JetBrains Mono)

### Seções
1. **Hero**: Apresentação com efeito typing e visualização SVG animada
2. **About**: Biografia profissional com lista de certificações
3. **Experience**: 7 experiências profissionais em cards interativos
4. **Technologies**: 6 categorias de tecnologias com barras de progresso
5. **Contact**: 3 formas de contato com efeito magnético

### SEO
- Metadata completa (title, description, keywords)
- Open Graph tags para redes sociais
- Twitter Card tags
- Canonical URL
- robots.txt compatible

## Tecnologias

### Frontend
- **Next.js 14**: React framework com App Router
- **React 18**: Biblioteca UI
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Biblioteca de animações

### Desenvolvimento
- **CVA**: Class Variance Authority para variantes
- **clsx**: Utility para className
- **tailwind-merge**: Merge de classes Tailwind
- **next/font**: Fontes otimizadas

## Personalizações

### Dados do Portfólio
Editar os arquivos em `src/data/`:
- `experience.ts`: Experiências profissionais
- `technologies.ts`: Stack tecnológico
- `certifications.ts`: Certificações
- `stats.ts`: Estatísticas
- `contact.ts`: Informações de contato

### Cores
Editar as CSS variables em `src/app/globals.css`:
```css
:root {
  --navy: rgb(5, 13, 26);
  --blue: rgb(59, 130, 246);
  --cyan: rgb(34, 211, 238);
  /* ... */
}
```

### Fontes
Editar em `src/app/layout.tsx`:
```tsx
const inter = Inter({ ... })
const jetbrainsMono = JetBrains_Mono({ ... })
```

## Princípios de Arquitetura

- **SOLID**: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- **DDD**: Domain-Driven Design com separação clara de responsabilidades
- **Component-Based**: Componentes reutilizáveis e bem encapsulados
- **Type Safety**: TypeScript estrict mode
- **Clean Code**: Sem comentários, nomes descritivos, bem estruturado

## Performance

- Code splitting automático com Next.js
- Otimização de imagens
- Fonts otimizadas via next/font
- CSS-in-JS minimizado
- Lazy loading de componentes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Licença

Este projeto é de uso pessoal para o portfólio de João Victor Duarte.

## Contato

- Email: jv.duarte.viana@gmail.com
- Telefone: (85) 98789-2514
- LinkedIn: https://www.linkedin.com/in/jo%C3%A3o-victor-duarte-158364131

---

Desenvolvido por um Senior Full-Stack Developer.
