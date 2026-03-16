"use client";

import { useAuth } from "@/contexts/auth-context";
import type { UserRole } from "@/mocks/users";

const roles: { value: UserRole; label: string }[] = [
  { value: "guest", label: "Visitante" },
  { value: "member", label: "Membro" },
  { value: "admin", label: "Admin" },
];

export function RoleSwitcher() {
  const { role, setRole } = useAuth();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-[var(--radius)] border bg-card p-2 shadow-lg">
      <span className="text-xs font-medium text-muted-foreground px-1">Papel:</span>
      {roles.map((r) => (
        <button
          key={r.value}
          onClick={() => setRole(r.value)}
          className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            role === r.value
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
