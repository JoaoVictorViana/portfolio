# Portfolio Next.js - Instruções de Setup

## Estrutura do Projeto

Este é um projeto Next.js 14 completo com TypeScript, Tailwind CSS e Framer Motion.

### Arquivos Criados

**Configuração:**
- package.json
- tsconfig.json
- tailwind.config.ts
- postcss.config.js
- next.config.ts
- .gitignore

**Aplicação:**
- src/app/layout.tsx (Root layout com metadata)
- src/app/page.tsx (Home page)
- src/app/globals.css (Global styles)

**Componentes UI:**
- src/components/ui/Button.tsx
- src/components/ui/Badge.tsx
- src/components/ui/Tag.tsx
- src/components/ui/SectionHeader.tsx
- src/components/ui/ProgressBar.tsx

**Componentes Layout:**
- src/components/layout/Navbar.tsx
- src/components/layout/Footer.tsx
- src/components/layout/ScrollProgress.tsx
- src/components/layout/CustomCursor.tsx

**Seções:**
- src/components/sections/Hero/ (Hero section com ThreeScene)
- src/components/sections/About/ (About section)
- src/components/sections/Experience/ (Experience section)
- src/components/sections/Technologies/ (Tech stack)
- src/components/sections/Contact/ (Contact section)

**Hooks:**
- src/hooks/useTyping.ts (Typing animation)
- src/hooks/useTilt.ts (3D tilt effect)
- src/hooks/useMagnetic.ts (Magnetic button effect)
- src/hooks/useCounter.ts (Animated counters)
- src/hooks/useIntersection.ts (Intersection observer)

**Dados:**
- src/data/experience.ts
- src/data/technologies.ts
- src/data/certifications.ts
- src/data/stats.ts
- src/data/contact.ts

**Utilidades:**
- src/lib/cn.ts (clsx + tailwind-merge)
- src/types/index.ts (TypeScript types)

## Instalação de Dependências

```bash
npm install
```

Se houver conflitos de peer dependencies:

```bash
npm install --legacy-peer-deps
```

## Desenvolvimento

```bash
npm run dev
```

A aplicação rodará em http://localhost:3000

## Build para Produção

```bash
npm run build
npm start
```

## Recursos Principais

### Design
- Tema dark com paleta navy/blue/cyan
- Gradientes sofisticados
- Animações fluidas com Framer Motion
- Cursor customizado
- Scroll progress bar

### Interatividade
- Efeito typing na seção Hero
- Efeito 3D tilt nos cards
- Buttons com efeito magnético
- Contadores animados nas estatísticas
- Barras de progresso animadas

### Responsividade
- Totalmente responsivo
- Mobile-first approach
- Suporte a desktop com funcionalidades extras

### SEO
- Metadata completa
- Open Graph tags
- Twitter card tags
- Canonical URL
- robots.txt compatible

## Estrutura de Cores

As cores são definidas como CSS variables em globals.css:
- --navy: rgb(5, 13, 26)
- --navy-2: rgb(10, 25, 47)
- --navy-3: rgb(17, 34, 64)
- --blue: rgb(59, 130, 246)
- --blue-bright: rgb(96, 165, 250)
- --cyan: rgb(34, 211, 238)
- --text: rgb(148, 163, 184)

## Observações

O projeto segue princípios SOLID e DDD com componentes bem estruturados e reutilizáveis. Não há comentários no código conforme solicitado, mantendo o código limpo e profissional.

A seção Hero utiliza uma visualização SVG animada em vez de Three.js para melhor compatibilidade e performance.
