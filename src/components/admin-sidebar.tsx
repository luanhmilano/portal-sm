"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import {
  LayoutDashboard,
  FileText,
  Home,
  LogOut,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

const adminLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/content", label: "Conteúdo", icon: FileText },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <aside className="flex h-full w-64 flex-col border-r bg-[var(--color-navy)] text-white">
      {/* Brand */}
      <div className="flex items-center gap-2 border-b border-white/20 px-4 py-4">
        <Shield className="h-5 w-5 text-[var(--color-gold)]" />
        <span className="font-[family-name:var(--font-playfair)] text-sm font-bold">
          Painel Admin
        </span>
      </div>

      {/* User info */}
      <div className="border-b border-white/20 px-4 py-3">
        <p className="text-sm font-medium">{user.name}</p>
        <p className="text-xs text-white/60">{user.email}</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 p-3">
        {adminLinks.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-[var(--radius)] px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-white/15 text-[var(--color-gold)]"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer links */}
      <div className="border-t border-white/20 p-3 space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-[var(--radius)] px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <Home className="h-4 w-4" />
          Voltar ao Site
        </Link>
        <button className="flex w-full items-center gap-3 rounded-[var(--radius)] px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white">
          <LogOut className="h-4 w-4" />
          Sair
        </button>
      </div>
    </aside>
  );
}
