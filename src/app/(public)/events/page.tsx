import type { Metadata } from "next";
import Image from "next/image";
import { mockEvents } from "@/mocks/events";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Agenda",
  description:
    "Confira a programação de eventos, retiros, missas e formações do movimento Sementes da Misericórdia.",
};

const categoryLabels: Record<string, string> = {
  missa: "Santa Missa",
  retiro: "Retiro",
  formacao: "Formação",
  comunidade: "Comunidade",
  evangelizacao: "Evangelização",
};

const categoryColors: Record<string, string> = {
  missa: "bg-primary/10 text-primary",
  retiro: "bg-accent/10 text-accent-foreground",
  formacao: "bg-secondary/10 text-secondary-foreground",
  comunidade: "bg-green-100 text-green-800",
  evangelizacao: "bg-purple-100 text-purple-800",
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="font-[family-name:var(--font-great-vibes)] text-2xl text-[var(--color-gold)]">
            Participe conosco
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Agenda de Eventos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Eventos, retiros, formações e celebrações para fortalecer sua fé e
            comunidade.
          </p>
        </div>
      </section>

      {/* Events list */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-6">
            {mockEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden md:flex">
                <div className="relative h-56 md:h-auto md:w-72 shrink-0">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 288px"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          categoryColors[event.category] ?? ""
                        }`}
                      >
                        {categoryLabels[event.category] ?? event.category}
                      </span>
                      {event.featured && (
                        <Badge variant="accent" className="text-xs">
                          Destaque
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString("pt-BR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
