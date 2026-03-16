export type UserRole = "guest" | "member" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Visitante",
    email: "",
    role: "guest",
  },
  {
    id: "2",
    name: "Maria da Silva",
    email: "maria@sementes.org",
    role: "member",
    avatarUrl: "/placeholder-avatar.jpg",
  },
  {
    id: "3",
    name: "Pe. João Oliveira",
    email: "admin@sementes.org",
    role: "admin",
    avatarUrl: "/placeholder-avatar.jpg",
  },
];
