import { mockResources } from "@/mocks/resources";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Music, Headphones, Video, Download } from "lucide-react";

const typeIcons: Record<string, typeof FileText> = {
  pdf: FileText,
  sheet: Music,
  audio: Headphones,
  video: Video,
};

const typeLabels: Record<string, string> = {
  pdf: "PDF",
  sheet: "Cifra",
  audio: "Áudio",
  video: "Vídeo",
};

export default function RepositoryPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold sm:text-3xl">Repositório</h1>
        <p className="mt-1 text-sm text-muted-foreground sm:text-base">
          Materiais de formação, cifras, áudios e vídeos para membros.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockResources.map((resource) => {
          const Icon = typeIcons[resource.type] ?? FileText;
          return (
            <Card key={resource.id} className="flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius)] bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="muted">{typeLabels[resource.type]}</Badge>
                </div>
                <CardTitle className="text-base mt-2">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 sm:justify-between">
                  <Badge variant="outline" className="text-xs">
                    {resource.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground sm:ml-auto">
                    {new Date(resource.createdAt).toLocaleDateString("pt-BR")}
                  </span>
                </div>
              </CardContent>
              <div className="border-t p-4">
                <button className="flex w-full items-center justify-center gap-2 rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90">
                  <Download className="h-4 w-4" />
                  Baixar
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
