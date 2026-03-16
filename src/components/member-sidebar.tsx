"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { LayoutDashboard, FolderOpen, Heart, LogOut, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const memberLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/repository", label: "Repositório", icon: FolderOpen },
];

export function MemberSidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <aside className="w-full border-b bg-white md:flex md:h-full md:w-64 md:flex-col md:border-b-0 md:border-r">
      {/* Brand */}
      <div className="flex items-center gap-2 border-b px-4 py-4">
        <Heart className="h-5 w-5 text-primary" />
        <span className="font-[family-name:var(--font-playfair)] text-sm font-bold">
          Área do Membro
        </span>
      </div>

      {/* User info */}
      <div className="hidden border-b px-4 py-3 md:block">
        <p className="text-sm font-medium">{user.name}</p>
        <p className="text-xs text-muted-foreground">{user.email}</p>
      </div>

      {/* Nav */}
      <nav className="flex gap-2 overflow-x-auto p-3 md:flex-1 md:flex-col md:space-y-1 md:overflow-visible">
        {memberLinks.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-[var(--radius)] px-3 py-2 text-sm font-medium transition-colors md:flex",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}

        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-2 rounded-[var(--radius)] px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
        >
          <Home className="h-4 w-4" />
          Início
        </Link>
      </nav>

      {/* Footer links */}
      <div className="hidden border-t p-3 space-y-1 md:block">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-[var(--radius)] px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Home className="h-4 w-4" />
          Voltar ao Site
        </Link>
        <button className="flex w-full items-center gap-3 rounded-[var(--radius)] px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <LogOut className="h-4 w-4" />
          Sair
        </button>
      </div>
    </aside>
  );
}
