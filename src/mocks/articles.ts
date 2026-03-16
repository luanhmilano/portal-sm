export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  category: string;
  publishedAt: string;
  featured: boolean;
}

export const mockArticles: Article[] = [
  {
    id: "1",
    slug: "a-misericordia-que-transforma",
    title: "A Misericórdia que Transforma Vidas",
    excerpt:
      "Descubra como a misericórdia divina tem transformado corações e comunidades ao longo dos séculos, trazendo esperança e renovação.",
    content:
      "A misericórdia é o coração da mensagem cristã. Desde os primeiros séculos, a Igreja tem proclamado o amor misericordioso de Deus como fonte de toda transformação verdadeira. Neste artigo, exploramos histórias de conversão e renovação que nascem do encontro com a Divina Misericórdia...",
    imageUrl: "https://fastly.picsum.photos/id/573/800/450.jpg?hmac=ooN-dh-Qty9Tk28880rrKlu0hU5qcSQN2LY8EpQbhg0",
    author: "Pe. João Oliveira",
    category: "Espiritualidade",
    publishedAt: "2026-03-10",
    featured: true,
  },
  {
    id: "2",
    slug: "retiro-quaresmal-2026",
    title: "Retiro Quaresmal 2026: Caminhos de Conversão",
    excerpt:
      "O retiro quaresmal deste ano nos convida a mergulhar profundamente nos caminhos da conversão interior e da reconciliação.",
    content:
      "A Quaresma é tempo privilegiado de conversão. Este ano, nosso retiro quaresmal propõe um itinerário de seis semanas rumo à Páscoa, com reflexões diárias baseadas nas obras de misericórdia...",
    imageUrl: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    author: "Ir. Ana Beatriz",
    category: "Formação",
    publishedAt: "2026-02-28",
    featured: true,
  },
  {
    id: "3",
    slug: "obras-de-misericordia-na-pratica",
    title: "Obras de Misericórdia na Prática",
    excerpt:
      "Como viver as obras de misericórdia corporais e espirituais no dia a dia da comunidade moderna.",
    content:
      "As obras de misericórdia são mais do que simples atos de caridade — são expressões concretas do amor de Deus no mundo. Neste guia prático, apresentamos formas acessíveis de viver cada uma das 14 obras de misericórdia...",
    imageUrl: "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU",
    author: "Maria da Silva",
    category: "Comunidade",
    publishedAt: "2026-02-15",
    featured: false,
  },
  {
    id: "4",
    slug: "devocao-divina-misericordia",
    title: "A Devoção à Divina Misericórdia: Origem e Prática",
    excerpt:
      "Conheça a história e as práticas da devoção à Divina Misericórdia revelada a Santa Faustina.",
    content:
      "Em 1931, Jesus apareceu a Santa Faustina Kowalska com raios de luz emanando de seu coração. Essa visão deu origem à imagem da Divina Misericórdia e a uma das devoções mais difundidas do catolicismo contemporâneo...",
    imageUrl: "https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908",
    author: "Pe. João Oliveira",
    category: "Espiritualidade",
    publishedAt: "2026-01-20",
    featured: false,
  },
  {
    id: "5",
    slug: "evangelizacao-nas-redes-sociais",
    title: "Evangelização nas Redes Sociais",
    excerpt:
      "Como utilizar as plataformas digitais como ferramenta de evangelização e acolhimento.",
    content:
      "O Papa Francisco nos convida a ser presença cristã nos ambientes digitais. As redes sociais são os novos areópagos onde as sementes da fé podem ser lançadas de forma criativa e autêntica...",
    imageUrl: "https://fastly.picsum.photos/id/59/2464/1632.jpg?hmac=uTfe6jCzLvCzANvJgtpo-a0fKhO8BvjpwLNYX3lqx_Q",
    author: "Lucas Mendes",
    category: "Missão",
    publishedAt: "2026-01-05",
    featured: false,
  },
  {
    id: "6",
    slug: "testemunho-conversao-marcos",
    title: "Testemunho: A Conversão de Marcos",
    excerpt:
      "Um jovem encontra sentido para sua vida após conhecer o movimento Sementes da Misericórdia.",
    content:
      "Marcos tinha 25 anos quando participou pela primeira vez de um encontro do Sementes da Misericórdia. Cético e distante da fé, ele não imaginava que aquela noite mudaria completamente sua trajetória...",
    imageUrl: "https://fastly.picsum.photos/id/88/1280/1707.jpg?hmac=NnkwPVDBTVxHkc4rALB_fyu-OHY2usdm7iRk5El7JC4",
    author: "Marcos Almeida",
    category: "Testemunhos",
    publishedAt: "2025-12-18",
    featured: false,
  },
];
