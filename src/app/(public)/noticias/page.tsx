import type { Metadata } from "next";
import Image from "next/image";
import { mockArticles } from "@/mocks/articles";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import heroBg from "@assets/foto-news.jpeg";

export const metadata: Metadata = {
  title: "Notícias",
  description:
    "Acompanhe as últimas notícias, reflexões e testemunhos do movimento Sementes da Misericórdia.",
};

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[360px] overflow-hidden bg-[var(--color-navy)] sm:h-[360px]">
        <Image
          src={heroBg}
          alt="Noticias"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[var(--color-navy)]/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 text-center sm:px-6">
          <div className="w-full">
            <p className="font-[family-name:var(--font-great-vibes)] text-2xl text-[var(--color-gold)]">
              Fique por dentro
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              Notícias &amp; Reflexões
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Artigos, testemunhos e reflexões para alimentar sua fé e manter-se
              conectado ao movimento.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden flex flex-col">
                <div className="relative h-52">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="muted" className="text-xs">
                      {article.category}
                    </Badge>
                    {article.featured && (
                      <Badge variant="accent" className="text-xs">
                        Destaque
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-snug line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="justify-between">
                  <span className="text-xs text-muted-foreground">
                    {new Date(article.publishedAt).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    por {article.author}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
