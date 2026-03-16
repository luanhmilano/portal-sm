import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@assets/foto-sobre.jpeg";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça o movimento Sementes da Misericórdia: nossa história, missão, carisma e a equipe que faz acontecer.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[360px] overflow-hidden bg-[var(--color-navy)] sm:h-[440px]">
        <Image
          src={heroBg}
          alt="Sobre"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[var(--color-navy)]/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 text-center sm:px-6">
          <div className="w-full">
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
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold">Nossa Missão</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur modi natus reprehenderit magni aperiam voluptatem distinctio atque perspiciatis error temporibus autem dignissimos, cum eum, minima minus dolore. Amet, impedit.
            </p>

            <h2 className="mt-12 text-2xl font-bold">Nosso Carisma</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat nostrum harum id repudiandae, laborum doloribus. Error accusamus, dolor, sequi maiores magnam suscipit sapiente provident id esse veritatis similique ad!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam praesentium libero placeat. Aspernatur inventore voluptatum iste hic, laborum dolor, ullam ut quod beatae facere illum animi cupiditate perferendis dolorum architecto!
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A laudantium inventore, est fuga fugit officiis dolores temporibus consequuntur, expedita doloremque reiciendis. Autem aliquid eaque, sunt odit nobis officiis saepe nulla!
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium delectus minus nostrum, expedita dolore nam omnis itaque, neque similique quam dolorem architecto natus, odit quasi ullam cupiditate. Aut, enim ullam?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
