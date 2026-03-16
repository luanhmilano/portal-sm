"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type UserRole, type User, mockUsers } from "@/mocks/users";

interface AuthContextType {
  user: User;
  role: UserRole;
  setRole: (role: UserRole) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<UserRole>("guest");

  const user = mockUsers.find((u) => u.role === role) ?? mockUsers[0];

  const setRole = useCallback((newRole: UserRole) => {
    setRoleState(newRole);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        setRole,
        isAuthenticated: role !== "guest",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
