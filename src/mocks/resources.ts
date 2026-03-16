export interface Resource {
  id: string;
  title: string;
  description: string;
  type: "pdf" | "sheet" | "audio" | "video";
  fileUrl: string;
  category: string;
  createdAt: string;
}

export const mockResources: Resource[] = [
  {
    id: "1",
    title: "Apostila de Formação - Módulo 1",
    description: "Material completo do primeiro módulo de formação para novos membros.",
    type: "pdf",
    fileUrl: "#",
    category: "Formação",
    createdAt: "2026-01-15",
  },
  {
    id: "2",
    title: "Cifras - Músicas do Movimento",
    description: "Coletânea de cifras das músicas cantadas nos encontros e retiros.",
    type: "sheet",
    fileUrl: "#",
    category: "Música",
    createdAt: "2026-02-01",
  },
  {
    id: "3",
    title: "Roteiro de Oração Diária",
    description: "Guia para a oração pessoal com meditações para cada dia da semana.",
    type: "pdf",
    fileUrl: "#",
    category: "Oração",
    createdAt: "2026-02-10",
  },
  {
    id: "4",
    title: "Terço da Misericórdia - Áudio Guiado",
    description: "Gravação do terço da Divina Misericórdia para acompanhamento pessoal.",
    type: "audio",
    fileUrl: "#",
    category: "Oração",
    createdAt: "2026-02-20",
  },
  {
    id: "5",
    title: "Palestra: Vocação e Missão",
    description: "Vídeo da palestra sobre vocação e missão no mundo contemporâneo.",
    type: "video",
    fileUrl: "#",
    category: "Formação",
    createdAt: "2026-03-01",
  },
];
