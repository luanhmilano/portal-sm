"use client";

import { useState } from "react";
import { mockArticles, type Article } from "@/mocks/articles";
import { mockEvents, type Event } from "@/mocks/events";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2, Plus } from "lucide-react";

type Tab = "articles" | "events";

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState<Tab>("articles");
  const [articles] = useState<Article[]>(mockArticles);
  const [events] = useState<Event[]>(mockEvents);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gestão de Conteúdo</h1>
          <p className="mt-1 text-muted-foreground">
            Crie, edite e gerencie artigos e eventos do portal.
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          Novo {activeTab === "articles" ? "Artigo" : "Evento"}
        </Button>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-1 rounded-[var(--radius)] bg-muted p-1 w-fit">
        <button
          onClick={() => setActiveTab("articles")}
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "articles"
              ? "bg-white text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Artigos ({articles.length})
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "events"
              ? "bg-white text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Eventos ({events.length})
        </button>
      </div>

      {/* Articles Table */}
      {activeTab === "articles" && (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Título
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Categoria
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Autor
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Data
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Status
                    </th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {articles.map((article) => (
                    <tr key={article.id} className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium max-w-[240px] truncate">
                        {article.title}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="muted">{article.category}</Badge>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {article.author}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                          Publicado
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon" aria-label="Editar artigo">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" aria-label="Excluir artigo">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Events Table */}
      {activeTab === "events" && (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Título
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Categoria
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Data
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Local
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Status
                    </th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {events.map((event) => (
                    <tr key={event.id} className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium max-w-[240px] truncate">
                        {event.title}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="muted">{event.category}</Badge>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {new Date(event.date).toLocaleDateString("pt-BR")}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground max-w-[180px] truncate">
                        {event.location}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                          Agendado
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon" aria-label="Editar evento">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" aria-label="Excluir evento">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
