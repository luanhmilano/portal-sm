# Portal Sementes da Misericórdia — Project Guidelines

## Stack

- **Next.js 16** (App Router, Turbopack) with **React 19**
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **TypeScript 5** (strict mode)
- UI primitives: CVA + clsx + tailwind-merge (Shadcn-style, no `shadcn init`)
- Icons: `lucide-react`
- No backend — all data is mocked in `src/mocks/`

## Build & Test

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build — run after significant changes
npm run lint     # ESLint (eslint-config-next)
```

## Architecture

### Route Groups

Three route groups under `src/app/` separate concerns without affecting URLs:

| Group | URL prefix | Layout | Purpose |
|-------|-----------|--------|---------|
| `(public)` | `/` | Navbar + Footer | SEO-critical public pages |
| `(member)` | `/dashboard`, `/repository` | Sidebar | Authenticated member area |
| `(admin)` | `/admin`, `/admin/content` | Dark sidebar | Admin CMS |

Each group has its own `layout.tsx`, `loading.tsx`, and `error.tsx`.

### Rendering Strategy

- **Default to RSC.** Only add `'use client'` at leaf components that need hooks or interactivity.
- Pages that import `useAuth`, `useState`, `usePathname`, or handle click events must be client components.
- Static pages (news, events, about, donate) are RSC and export `metadata` objects for SEO.

### Key Directories

```
src/
├── app/             # Next.js App Router (route groups)
├── components/      # Shared components (kebab-case filenames)
│   └── ui/          # Base primitives: button, card, badge (CVA + forwardRef)
├── contexts/        # React context providers (auth-context.tsx)
├── lib/             # Utilities — fonts.ts, utils.ts (cn helper)
└── mocks/           # Mock data — typed interfaces + const arrays
```

## Design System

### Colors (CSS variables in `globals.css`)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-navy` / `--foreground` | `#112557` | Text, footer bg, admin sidebar |
| `--primary` | `#A90004` | CTA buttons, accents |
| `--secondary` | `#00CBFD` | Links, secondary actions |
| `--accent` | `#F7CD5F` | Gold highlights, liturgical details |
| `--muted` / `--color-off-white` | `#F8F9FA` | Section backgrounds |

### Typography (via `next/font/google` in `src/lib/fonts.ts`)

| Font | CSS Variable | Usage |
|------|-------------|-------|
| Inter | `--font-inter` | Body text, UI, navigation |
| Playfair Display | `--font-playfair` | Headings (h1-h3), serif feel |
| Great Vibes | `--font-great-vibes` | Short decorative accents only |

### UI Tokens

- Border radius: `8px` (`--radius`)
- Shadows: subtle `shadow-sm` on cards
- High contrast: dark text on light backgrounds

## Conventions

### Components

- **Filenames**: kebab-case (`public-navbar.tsx`, `role-switcher.tsx`)
- **Exports**: PascalCase named exports (`PublicNavbar`, `RoleSwitcher`)
- **UI primitives**: Use CVA for variants, `forwardRef` for composition, `cn()` for class merging
- **Props**: Interface with `Props` suffix extending HTML attributes when wrapping native elements

### State & Auth

- Single `AuthProvider` at root layout wraps entire app
- `useAuth()` hook returns `{ user, role, setRole, isAuthenticated }`
- Roles: `'guest' | 'member' | 'admin'` — toggled via `RoleSwitcher` widget
- All user data comes from `src/mocks/users.ts`

### Mock Data

- Each entity file exports: `interface + const array` (e.g., `Article` + `mockArticles`)
- Types are colocated with data in `src/mocks/`
- Images use `fastly.picsum.photos` (configured in `next.config.ts` `remotePatterns`)

### Images

- Always use `next/image` with proper `sizes` attribute
- External domains must be added to `next.config.ts` `images.remotePatterns`

### SEO

- Public pages export `metadata` objects from `page.tsx`
- Root layout uses `title.template`: `"%s | Sementes da Misericórdia"`

## Pitfalls

- **Hydration mismatches**: Root `<html>` and `<body>` have `suppressHydrationWarning` for browser extension compatibility.
- **Tailwind v4**: Uses `@theme inline` directive in CSS, not `tailwind.config.js`. Extend theme in `globals.css`.
- **No `shadcn init`**: UI components are manually created in `src/components/ui/` following Shadcn patterns — don't run `npx shadcn` commands.
- **Path alias**: `@/*` maps to `./src/*` (defined in `tsconfig.json`).
