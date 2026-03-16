# Portal Sementes da Misericórdia

Portal web do movimento católico **Sementes da Misericórdia** — evangelização, formação e comunidade.

## Stack

| Tecnologia | Versão |
|------------|--------|
| Next.js (App Router) | 16 |
| React | 19 |
| Tailwind CSS | 4 |
| TypeScript | 5 |
| Lucide React | Icons |
| CVA + clsx + tailwind-merge | UI primitives |

## Início Rápido

```bash
npm install
npm run dev       # http://localhost:3000
```

## Scripts

```bash
npm run dev       # Servidor de desenvolvimento (Turbopack)
npm run build     # Build de produção
npm run lint      # Lint com ESLint
```

## Arquitetura

O projeto utiliza **Route Groups** do App Router para separar áreas sem afetar URLs:

```
src/
├── app/
│   ├── (public)/          # Páginas públicas (SEO)
│   │   ├── page.tsx       # / — Home
│   │   ├── about/         # /about — Quem Somos
│   │   ├── news/          # /news — Notícias
│   │   ├── events/        # /events — Agenda
│   │   └── donate/        # /donate — Doações
│   ├── (member)/          # Área do membro
│   │   ├── dashboard/     # /dashboard
│   │   └── repository/    # /repository — Materiais
│   └── (admin)/           # Painel administrativo
│       └── admin/
│           ├── page.tsx   # /admin — Dashboard
│           └── content/   # /admin/content — Gestão de conteúdo
├── components/
│   ├── ui/                # Primitivos: Button, Card, Badge (CVA + forwardRef)
│   ├── public-navbar.tsx
│   ├── footer.tsx
│   ├── member-sidebar.tsx
│   ├── admin-sidebar.tsx
│   └── role-switcher.tsx  # Widget para trocar papel (guest/member/admin)
├── contexts/
│   └── auth-context.tsx   # AuthProvider com roles mockadas
├── lib/
│   ├── fonts.ts           # Inter, Playfair Display, Great Vibes
│   └── utils.ts           # cn() — clsx + tailwind-merge
└── mocks/                 # Dados mockados com interfaces TypeScript
    ├── articles.ts
    ├── events.ts
    ├── resources.ts
    └── users.ts
```

## Design System

| Token | Cor | Uso |
|-------|-----|-----|
| `--foreground` | `#112557` (Navy) | Texto, footer, sidebar admin |
| `--primary` | `#A90004` (Vermelho) | CTAs, botões de ação |
| `--secondary` | `#00CBFD` (Azul claro) | Links, ações secundárias |
| `--accent` | `#F7CD5F` (Dourado) | Destaques litúrgicos |
| `--muted` | `#F8F9FA` (Off-white) | Fundo de seções |

**Tipografia:** Inter (corpo), Playfair Display (títulos), Great Vibes (acentos decorativos).

## Autenticação Mockada

Sem backend. Um `RoleSwitcher` no canto inferior direito alterna entre:

- **Visitante** — acesso apenas às páginas públicas
- **Membro** — dashboard e repositório de materiais
- **Admin** — painel com gestão de conteúdo (CRUD mockado)

## Decisões Técnicas

- **RSC por padrão** — `'use client'` apenas em componentes interativos (folhas da árvore).
- **SEO** — Páginas públicas exportam objetos `metadata`. Root layout usa `title.template`.
- **Imagens** — `next/image` com `sizes` em todas as imagens. Domínio `fastly.picsum.photos` configurado.
- **Tailwind v4** — Tema via `@theme inline` em `globals.css`, sem `tailwind.config.js`.
- **Shadcn-style** — Componentes UI manuais em `src/components/ui/`, sem `npx shadcn`.
- **Loading/Error** — `loading.tsx` e `error.tsx` em cada route group.
