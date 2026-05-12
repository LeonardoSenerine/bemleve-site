export const ebooks = [
  {
    id: 1,
    category: 'Marmitas Fit',
    title: 'Bem Leve na Cozinha',
    subtitle: 'Marmitas Fit Congeladas',
    description:
      'Organize sua semana com refeições saudáveis, saborosas e prontas para congelar.',
    bullets: [
      '18+ receitas fit, low carb e vegetarianas',
      'Técnicas de congelamento sem conservantes',
      'Planejamento alimentar semanal completo',
    ],
    price: 'R$ 37',
    badge: 'Mais vendido',
    badgeColor: 'terra' as const,
    ctaUrl: '#',
    coverColor: '#F5DDD2',
    featured: true,
  },
  {
    id: 2,
    category: 'Curadoria',
    title: 'Receitas de Sucesso',
    subtitle: 'As Mais Pedidas da Bemleve',
    description:
      'As receitas favoritas dos clientes — selecionadas pelo carinho e pelo sabor.',
    bullets: [
      'Os pratos campeões de pedidos',
      'História por trás de cada receita',
      'Dicas exclusivas de preparo e congelamento',
    ],
    price: 'R$ 27',
    badge: null,
    badgeColor: null,
    ctaUrl: '#',
    coverColor: '#E8F0E4',
    featured: false,
  },
  {
    id: 3,
    category: 'Negócio',
    title: 'Como Conseguir Clientes',
    subtitle: 'Do Zero às Primeiras 100 Marmitas Vendidas',
    description:
      'O método que a Vera usou para vender 70 marmitas na primeira semana.',
    bullets: [
      'Estratégia real de Instagram e WhatsApp',
      'Como montar preço e cardápio inicial',
      'Do apartamento ao primeiro cliente fiel',
    ],
    price: 'R$ 47',
    badge: 'Empreendedoras',
    badgeColor: 'sage' as const,
    ctaUrl: '#',
    coverColor: '#EDE7D9',
    featured: false,
  },
  {
    id: 4,
    category: 'Instagram',
    title: 'Do 0 ao 100 Mil',
    subtitle: 'Como Cresci no Instagram com Marmitas Fit',
    description:
      'O método de conteúdo por trás dos 202K seguidores da Bemleve.',
    bullets: [
      'Tipos de post que mais engajam',
      'Estratégia de Reels e Stories',
      'Copy e legenda que geram clientes',
    ],
    price: 'R$ 57',
    badge: null,
    badgeColor: null,
    ctaUrl: '#',
    coverColor: '#F5DDD2',
    featured: false,
  },
]

export const testimonials = [
  {
    name: 'Ana Paula S.',
    city: 'Itatiba, SP',
    text: 'Mudou minha rotina completamente. Abro o freezer e tenho refeição saudável pronta em 5 minutos. Não consigo imaginar minha semana sem as marmitas da Vera.',
    months: 8,
  },
  {
    name: 'Carla M.',
    city: 'Itatiba, SP',
    text: 'Comecei para emagrecer e fiquei pelo sabor. Nunca pensei que comida congelada podia ser tão gostosa. A sopa de abóbora é perfeita demais.',
    months: 12,
  },
  {
    name: 'Fernanda T.',
    city: 'Bragança Paulista, SP',
    text: 'Comprei o ebook e aprendi a montar minha própria rotina alimentar. As dicas de congelamento da Vera são ouro. Recomendo para todo mundo.',
    months: 3,
  },
]

export const stats = [
  { value: '+2.000', label: 'marmitas/mês' },
  { value: '202K', label: 'seguidores' },
  { value: '+3 anos', label: 'de história' },
]

export const timelineEvents = [
  {
    year: '2020',
    title: 'A pandemia chegou',
    text: 'Tinha um espaço em Itatiba onde servia shakes para quem queria emagrecer. Quando tudo fechou, precisei recomeçar do zero.',
  },
  {
    year: '2020',
    title: 'A primeira semana',
    text: 'Montei um cardápio, cozinhei na minha cozinha e ofereci para minhas clientes. Na primeira semana: 70 marmitas. Na segunda: 100. Não parei mais.',
  },
  {
    year: '2021',
    title: 'Do apartamento à cozinha própria',
    text: 'O freezer tomou conta da sala. Chegou a hora de crescer. Comprei equipamentos, aprendi tudo do zero — desde fotografia até técnicas de congelamento.',
  },
  {
    year: 'Hoje',
    title: '202K e contando',
    text: 'Mais de 2.000 marmitas por mês, uma equipe incrível e 202 mil pessoas que confiam no nosso trabalho. Cada marmita ainda é feita com o mesmo carinho.',
  },
]
