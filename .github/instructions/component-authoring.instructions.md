---
description: "Use when creating, editing, or reviewing UI components in src/components/. Covers CVA variants, forwardRef pattern, cn() utility, naming, and client vs server boundaries."
applyTo: "src/components/**"
---
# Component Authoring Guidelines

## File & Export Naming

- **Filename**: kebab-case (`date-picker.tsx`, `nav-link.tsx`)
- **Export**: PascalCase named export (`DatePicker`, `NavLink`) — no default exports

## UI Primitives (`src/components/ui/`)

Use this pattern for base-level components:

```tsx
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes, forwardRef } from "react";

const myComponentVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", secondary: "..." },
    size: { default: "...", sm: "...", lg: "..." },
  },
  defaultVariants: { variant: "default", size: "default" },
});

export interface MyComponentProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof myComponentVariants> {}

const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div ref={ref} className={cn(myComponentVariants({ variant, size, className }))} {...props} />
  )
);
MyComponent.displayName = "MyComponent";
export { MyComponent, myComponentVariants };
```

## Client vs Server Boundary

- Only add `'use client'` when using hooks (`useState`, `useEffect`, `useAuth`, `usePathname`) or event handlers.
- Keep client directives at leaf components — never on layout or wrapper components that could remain RSC.

## Styling

- Use `cn()` from `@/lib/utils` for all conditional classes — never raw string concatenation.
- Use CSS variables (`var(--primary)`, `var(--radius)`) instead of hardcoded color hex values.
- Reference design tokens: `--primary`, `--secondary`, `--accent`, `--muted`, `--foreground`, `--border`.

## Icons

- Import from `lucide-react` only.
- Size with `className="h-4 w-4"` or `h-5 w-5` — not `size` prop.
