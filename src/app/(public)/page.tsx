import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { mockArticles } from "@/mocks/articles";
import { mockEvents } from "@/mocks/events";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ArrowRight, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Início | Sementes da Misericórdia",
  description:
    "Portal oficial do movimento católico Sementes da Misericórdia. Evangelização, formação, eventos e comunidade.",
  openGraph: {
    title: "Sementes da Misericórdia",
    description: "Semear o amor, colher a graça.",
    type: "website",
  },
};

export default function HomePage() {
  const recentArticles = mockArticles.slice(0, 4);
  const nextEvent = mockEvents.find((e) => e.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-navy)] py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy)]/95 to-[var(--color-navy)]/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="font-[family-name:var(--font-great-vibes)] text-3xl text-[var(--color-gold)] sm:text-4xl">
            Semear o amor
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Sementes da Misericórdia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Somos um movimento católico dedicado à evangelização e propagação da
            Divina Misericórdia. Unidos pela fé, semeamos esperança em cada
            coração.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Conheça o Movimento
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Próximos Eventos
            </Link>
          </div>
        </div>
      </section>

      {/* Charism Summary */}
      <section className="bg-[var(--color-off-white)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="font-[family-name:var(--font-great-vibes)] text-2xl text-primary">
              Nosso Carisma
            </p>
            <h2 className="mt-2 text-3xl font-bold">Misericórdia em Ação</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Evangelização",
                description:
                  "Levamos a mensagem do Evangelho às periferias existenciais, alcançando corações sedentos de Deus.",
                icon: "🌱",
              },
              {
                title: "Formação",
                description:
                  "Oferecemos formação integral baseada na doutrina da Igreja, nos Santos e no Magistério.",
                icon: "📖",
              },
              {
                title: "Comunidade",
                description:
                  "Vivemos a fraternidade cristã através de grupos de oração, retiros e ações sociais.",
                icon: "🤝",
              },
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto text-4xl">{item.icon}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Next Event */}
      {nextEvent && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <p className="font-[family-name:var(--font-great-vibes)] text-2xl text-primary">
                Não perca
              </p>
              <h2 className="mt-2 text-3xl font-bold">Próximo Evento</h2>
            </div>
            <div className="mt-10 overflow-hidden rounded-[var(--radius)] border shadow-md md:flex">
              <div className="relative h-64 md:h-auto md:w-1/2">
                <Image
                  src={nextEvent.imageUrl}
                  alt={nextEvent.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:w-1/2">
                <Badge variant="accent" className="mb-4 w-fit">
                  {nextEvent.category}
                </Badge>
                <h3 className="text-2xl font-bold">{nextEvent.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {nextEvent.description}
                </p>
                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {new Date(nextEvent.date).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {nextEvent.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {nextEvent.location}
                  </div>
                </div>
                <Link
                  href="/events"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-[var(--radius)] bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                >
                  Ver Todos os Eventos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="bg-[var(--color-off-white)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-[family-name:var(--font-great-vibes)] text-2xl text-primary">
                Fique por dentro
              </p>
              <h2 className="mt-2 text-3xl font-bold">Últimas Notícias</h2>
            </div>
            <Link
              href="/news"
              className="hidden items-center gap-1 text-sm font-medium text-secondary hover:underline sm:flex"
            >
              Ver todas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recentArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <CardHeader className="pb-2">
                  <Badge variant="muted" className="w-fit text-xs">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-base leading-snug line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/news`}
                    className="text-xs font-medium text-secondary hover:underline"
                  >
                    Ler mais →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/news"
              className="text-sm font-medium text-secondary hover:underline"
            >
              Ver todas as notícias →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
