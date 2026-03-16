"use client";

import { useAuth } from "@/contexts/auth-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, BookOpen, Heart, Users } from "lucide-react";

const stats = [
  { label: "Eventos Inscritos", value: "3", icon: CalendarDays, color: "text-primary" },
  { label: "Materiais Baixados", value: "12", icon: BookOpen, color: "text-secondary" },
  { label: "Dias de Oração", value: "45", icon: Heart, color: "text-[var(--color-gold)]" },
  { label: "Comunidade Ativa", value: "128", icon: Users, color: "text-green-600" },
];

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Bem-vinda, {user.name.split(" ")[0]}!
        </h1>
        <p className="mt-1 text-muted-foreground">
          Acompanhe suas atividades e acesse os recursos do movimento.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  text: "Você se inscreveu no Retiro de Carnaval",
                  date: "Há 2 dias",
                },
                {
                  text: "Download: Apostila de Formação - Módulo 1",
                  date: "Há 5 dias",
                },
                {
                  text: "Você completou 30 dias de oração consecutivos!",
                  date: "Há 1 semana",
                },
              ].map((activity, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-[var(--radius)] border p-3"
                >
                  <p className="text-sm">{activity.text}</p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                    {activity.date}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
