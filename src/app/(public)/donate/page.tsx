import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Copy } from "lucide-react";

export const metadata: Metadata = {
  title: "Doe",
  description:
    "Ajude o movimento Sementes da Misericórdia a continuar evangelizando. Faça sua doação via PIX ou transferência bancária.",
};

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="font-[family-name:var(--font-great-vibes)] text-2xl text-[var(--color-gold)]">
            Doe com o coração
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Faça sua Doação
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Sua generosidade sustenta nossa missão de evangelizar e servir.
            Cada semente plantada com amor produz frutos de graça.
          </p>
        </div>
      </section>

      {/* Donation Info */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* PIX */}
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">PIX</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-[var(--radius)] bg-muted p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Chave PIX (CNPJ)</p>
                  <p className="text-lg font-mono font-bold">
                    12.345.678/0001-90
                  </p>
                </div>
                <div className="rounded-[var(--radius)] bg-muted p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Chave PIX (E-mail)</p>
                  <p className="text-sm font-mono font-medium">
                    doacoes@sementesdamisericordia.org
                  </p>
                </div>
                <p className="text-xs text-center text-muted-foreground">
                  Favorecido: Assoc. Sementes da Misericórdia
                </p>
              </CardContent>
            </Card>

            {/* Bank Transfer */}
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <Copy className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Transferência Bancária</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-[var(--radius)] bg-muted p-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Banco</p>
                      <p className="font-medium">001 — Banco do Brasil</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Agência</p>
                      <p className="font-medium">1234-5</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Conta Corrente</p>
                      <p className="font-medium">67890-1</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">CNPJ</p>
                      <p className="font-medium">12.345.678/0001-90</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-muted-foreground">
                  Favorecido: Assoc. Sementes da Misericórdia
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trust note */}
          <div className="mt-12 rounded-[var(--radius)] border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 p-6 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Transparência:</strong> Todas
              as doações recebidas são utilizadas exclusivamente para a
              manutenção das atividades do movimento — retiros, formações,
              materiais de evangelização e ações sociais. Prestamos contas
              anualmente à comunidade.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
