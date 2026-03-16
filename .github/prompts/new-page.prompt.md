---
description: "Scaffold a new page in a route group with layout conventions, metadata, loading/error states, and design system tokens."
agent: "agent"
argument-hint: "Page name + route group, e.g. 'contact in (public)'"
---
Create a new Next.js App Router page for the Portal Sementes da Misericórdia project.

Use these context files for conventions:
- [copilot-instructions.md](../copilot-instructions.md)
- [globals.css](../../src/app/globals.css)
- [fonts.ts](../../src/lib/fonts.ts)

## Instructions

1. **Determine the route group** from the user input: `(public)`, `(member)`, or `(admin)`.
2. **Create `page.tsx`** at the correct path under `src/app/<group>/`.
3. **Apply group-specific patterns**:
   - `(public)`: RSC by default, export a `metadata` object with `title` and `description`.
   - `(member)`: May use `'use client'` if it needs `useAuth()`. No metadata export.
   - `(admin)`: Prefer RSC. Import mock data directly. No metadata export.
4. **Include a hero section** using the navy background pattern:
   ```tsx
   <section className="bg-[var(--color-navy)] py-20">
     <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
       <p className="font-[family-name:var(--font-great-vibes)] text-2xl text-[var(--color-gold)]">
         {cursive accent}
       </p>
       <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">{Title}</h1>
     </div>
   </section>
   ```
5. **Use design tokens** — `--primary`, `--secondary`, `--accent`, `--muted`, `--radius`, font variables.
6. **Use `next/image`** with `sizes` attribute for any images.
7. **Import mock data** from `src/mocks/` when the page needs content.
