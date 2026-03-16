"use client";

import { Button } from "@/components/ui/button";

export default function MemberError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Algo deu errado</h2>
        <p className="mt-2 text-muted-foreground">
          Desculpe, ocorreu um erro inesperado.
        </p>
        <Button onClick={reset} className="mt-6">
          Tentar novamente
        </Button>
      </div>
    </div>
  );
}
