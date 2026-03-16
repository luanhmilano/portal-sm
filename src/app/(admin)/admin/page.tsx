import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockArticles } from "@/mocks/articles";
import { mockEvents } from "@/mocks/events";
import { mockUsers } from "@/mocks/users";
import { FileText, CalendarDays, Users, TrendingUp } from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    {
      label: "Artigos Publicados",
      value: String(mockArticles.length),
      icon: FileText,
      color: "text-primary",
    },
    {
      label: "Eventos Agendados",
      value: String(mockEvents.length),
      icon: CalendarDays,
      color: "text-secondary",
    },
    {
      label: "Membros Registrados",
      value: String(mockUsers.length),
      icon: Users,
      color: "text-green-600",
    },
    {
      label: "Visualizações (mês)",
      value: "2.450",
      icon: TrendingUp,
      color: "text-[var(--color-gold)]",
    },
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Painel Administrativo</h1>
        <p className="mt-1 text-muted-foreground">
          Visão geral da plataforma e métricas de conteúdo.
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

      {/* Recent items */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Recent Articles */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Artigos Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockArticles.slice(0, 4).map((article) => (
                <div
                  key={article.id}
                  className="flex items-center justify-between rounded-[var(--radius)] border p-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">
                      {article.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {article.author} •{" "}
                      {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                  <span className="shrink-0 ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                    Publicado
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Próximos Eventos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockEvents.slice(0, 4).map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between rounded-[var(--radius)] border p-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">
                      {event.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(event.date).toLocaleDateString("pt-BR")} às {event.time}
                    </p>
                  </div>
                  <span className="shrink-0 ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                    Agendado
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
