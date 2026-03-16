import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça o movimento Sementes da Misericórdia: nossa história, missão, carisma e a equipe que faz acontecer.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="font-[family-name:var(--font-great-vibes)] text-2xl text-[var(--color-gold)]">
            Conheça nossa história
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Quem Somos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Um movimento nascido do coração da Igreja, dedicado a levar a
            misericórdia de Deus a todos os cantos.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold">Nossa Missão</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              O movimento Sementes da Misericórdia nasceu em 2010 com a missão de
              evangelizar através da Divina Misericórdia. Inspirados por Santa
              Faustina Kowalska e pelo magistério da Igreja, buscamos ser
              instrumentos do amor misericordioso de Deus no mundo atual.
            </p>

            <h2 className="mt-12 text-2xl font-bold">Nosso Carisma</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nosso carisma se fundamenta em três pilares: Oração, Formação e
              Ação. Acreditamos que a vida cristã plena nasce do encontro pessoal
              com Cristo Misericordioso e se manifesta no serviço generoso ao
              próximo.
            </p>

            {/* Pillars */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Oração",
                  text: "Alimentamos nossa espiritualidade através do Terço da Misericórdia, adoração eucarística e Lectio Divina.",
                  color: "bg-primary/10 border-primary/20",
                },
                {
                  title: "Formação",
                  text: "Investimos na formação integral dos membros através de cursos, retiros e estudo das Sagradas Escrituras.",
                  color: "bg-secondary/10 border-secondary/20",
                },
                {
                  title: "Ação",
                  text: "Realizamos obras de misericórdia corporais e espirituais, alcançando os mais necessitados da nossa sociedade.",
                  color: "bg-accent/10 border-accent/20",
                },
              ].map((pillar) => (
                <Card key={pillar.title} className={pillar.color}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {pillar.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">Nossa História</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Fundado em São Paulo por um pequeno grupo de fiéis, o Sementes da
              Misericórdia cresceu rapidamente, irradiando-se por diversas
              dioceses do Brasil. Hoje, contamos com comunidades ativas em mais
              de 15 estados, levando a mensagem da Misericórdia Divina através de
              missões, retiros, formações e ações sociais.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ao longo desses anos, milhares de pessoas foram tocadas pela graça
              de Deus nos nossos encontros. Seguimos firmes na missão de semear o
              amor e colher a graça, sempre sob a proteção maternal de Nossa
              Senhora e a intercessão de Santa Faustina.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
