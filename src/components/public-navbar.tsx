"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Quem Somos" },
  { href: "/noticias", label: "Notícias" },
  { href: "/eventos", label: "Agenda" },
  { href: "/doacao", label: "Doe", accent: true },
];

export function PublicNavbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, role } = useAuth();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-navy">
            Sementes da Misericórdia
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.accent
                  ? "ml-2 rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                  : "rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              }
            >
              {link.label}
            </Link>
          ))}
          {isAuthenticated && (
            <Link
              href={role === "admin" ? "/admin" : "/dashboard"}
              className="ml-2 rounded-md px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-muted"
            >
              {role === "admin" ? "Painel Admin" : "Minha Área"}
            </Link>
          )}
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t bg-white px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
          {isAuthenticated && (
            <Link
              href={role === "admin" ? "/admin" : "/dashboard"}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-muted"
            >
              {role === "admin" ? "Painel Admin" : "Minha Área"}
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
