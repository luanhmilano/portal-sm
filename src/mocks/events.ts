export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  category: "missa" | "retiro" | "formacao" | "comunidade" | "evangelizacao";
  featured: boolean;
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Santa Missa de Abertura da Quaresma",
    description:
      "Celebração solene de abertura do tempo quaresmal com imposição de cinzas e consagração à Divina Misericórdia.",
    date: "2026-03-20",
    time: "19:00",
    location: "Paróquia Nossa Senhora da Misericórdia",
    imageUrl: "https://fastly.picsum.photos/id/573/800/450.jpg?hmac=ooN-dh-Qty9Tk28880rrKlu0hU5qcSQN2LY8EpQbhg0",
    category: "missa",
    featured: true,
  },
  {
    id: "2",
    title: "Retiro Ágape",
    description:
      "Três dias de imersão espiritual com palestras, adoração e momentos de fraternidade para jovens e adultos.",
    date: "2026-04-05",
    time: "08:00",
    location: "Casa de Retiros São José",
    imageUrl: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    category: "retiro",
    featured: true,
  },
  {
    id: "3",
    title: "Formação: Leitura Orante da Bíblia",
    description:
      "Workshop prático sobre a Lectio Divina e métodos de oração com a Sagrada Escritura.",
    date: "2026-04-12",
    time: "14:00",
    location: "Salão Paroquial São Paulo",
    imageUrl: "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU",
    category: "formacao",
    featured: false,
  },
  {
    id: "4",
    title: "Evangelho & Pão",
    description:
      "Distribuição de cestas de Páscoa e visita a comunidades carentes da região. Venha ser semente!",
    date: "2026-04-18",
    time: "09:00",
    location: "Centro Comunitário Vila Esperança",
    imageUrl: "https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908",
    category: "comunidade",
    featured: false,
  },
  {
    id: "5",
    title: "Missão Benevides",
    description:
      "Saída missionária pelo centro da cidade com música, teatro e conversa sobre a fé.",
    date: "2026-04-25",
    time: "15:00",
    location: "Praça Central",
    imageUrl: "https://fastly.picsum.photos/id/59/2464/1632.jpg?hmac=uTfe6jCzLvCzANvJgtpo-a0fKhO8BvjpwLNYX3lqx_Q",
    category: "evangelizacao",
    featured: false,
  },
  {
    id: "6",
    title: "Festa da Divina Misericórdia",
    description:
      "Celebração da Festa da Divina Misericórdia com missa solene, terço cantado e confraternização.",
    date: "2026-05-03",
    time: "10:00",
    location: "Santuário da Divina Misericórdia",
    imageUrl: "https://fastly.picsum.photos/id/88/1280/1707.jpg?hmac=NnkwPVDBTVxHkc4rALB_fyu-OHY2usdm7iRk5El7JC4",
    category: "missa",
    featured: true,
  },
];
