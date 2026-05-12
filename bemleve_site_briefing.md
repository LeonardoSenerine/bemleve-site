# BRIEFING DE SITE — BEMLEVE MARMITAFIT
## Landing Page Institucional + Vitrine de Ebooks

> **Para uso no Claude Code / VS Code**
> Documento base para desenvolvimento da landing page da @bemleve_marmitafit
> Sem sistema de pedidos — foco em apresentação, história e catálogo de ebooks.

---

## STACK RECOMENDADA

```
Framework:   Next.js 14 (App Router)
Estilização: Tailwind CSS + CSS Variables customizadas
Animações:   Framer Motion
Fontes:      Google Fonts (ver seção Tipografia)
Deploy:      Vercel (zero config com Next.js)
Imagens:     next/image (otimização automática)
```

**Por que esse stack:**
- Next.js gera HTML estático (SSG) → SEO perfeito e carregamento ultra-rápido
- Tailwind evita CSS espalhado e mantém consistência visual
- Framer Motion entrega as animações fluidas que o projeto pede sem peso extra
- Vercel deploy em 1 clique conectado ao GitHub

---

## DIREÇÃO CRIATIVA

### Conceito visual: **"Cozinha Quente, Vida Leve"**

A identidade visual deve transmitir:
- **Calor** — como o cheiro de comida saindo do forno
- **Organização** — marmitas bem montadas, tudo no lugar
- **Humanidade** — Vera é o coração da marca, não um logo

**Inspiração de mood:**
Revista gastronômica independente brasileira. Não é fast food, não é clínica de nutrição. É uma cozinha de verdade, com alma. Pensa numa mistura entre editorial de food styling e caderno de receitas de vó — mas com design contemporâneo e fluido.

**O que EVITAR:**
- Verde clínico de app de saúde (tipo Gympass/Nubank fitness)
- Ícones genéricos de salada e haltere
- Gradientes roxos/azuis de "tecnologia"
- Fontes sem personalidade (Inter, Roboto, Arial)
- Layout de grid perfeito e sem vida

---

## PALETA DE CORES

```css
:root {
  /* Primárias */
  --cream:        #F5F0E8;   /* fundo principal — branco creme quente */
  --cream-dark:   #EDE7D9;   /* superfícies secundárias */
  --brown-deep:   #2C1A0E;   /* texto principal, quase preto */
  --brown-mid:    #6B3F1F;   /* texto secundário, subtítulos */

  /* Acento quente (identidade da marca) */
  --terra:        #C4521A;   /* laranja terra — cor de destaque principal */
  --terra-light:  #E8744A;   /* hover states, gradientes */
  --terra-pale:   #F5DDD2;   /* backgrounds de seções, badges */

  /* Verde natural (comida saudável) */
  --sage:         #5C7A4E;   /* detalhes verdes, ícones */
  --sage-light:   #8EAD7E;   /* versão mais clara */
  --sage-pale:    #E8F0E4;   /* backgrounds suaves */

  /* Neutros */
  --warm-gray:    #9A8E80;   /* texto terciário, bordas */
  --border:       #DDD5C8;   /* bordas suaves */
  --white:        #FDFAF6;   /* branco levemente aquecido */
}
```

**Regra de uso:**
- Fundo: `--cream` (quase sempre)
- Textos longos: `--brown-deep`
- Destaque/CTA: `--terra`
- Seções alternadas: `--terra-pale` e `--sage-pale`
- Nunca use branco puro (#ffffff) — sempre o `--white` ou `--cream`

---

## TIPOGRAFIA

```css
/* Importar no _document.tsx ou layout.tsx */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap');

:root {
  --font-display: 'Playfair Display', Georgia, serif;  /* headlines, nome da Vera */
  --font-body:    'Lora', Georgia, serif;               /* textos corridos, história */
  --font-ui:      'DM Sans', sans-serif;                /* labels, nav, botões, preços */
}
```

**Por que esse trio:**
- **Playfair Display** tem elegância editorial e personalidade — parece capa de revista gastronômica
- **Lora** é serifado de leitura, quente e legível — ideal para a história da Vera
- **DM Sans** equilibra o peso serifado com leveza funcional nos elementos de UI

**Escala tipográfica:**
```css
/* Títulos de seção */
.text-display  { font: 600 clamp(2.5rem, 6vw, 4.5rem)/1.1 var(--font-display); }

/* Subtítulos e nome da Vera */
.text-headline { font: 400 clamp(1.75rem, 4vw, 2.75rem)/1.2 var(--font-display); }

/* Corpo de texto (história) */
.text-body     { font: 400 1.125rem/1.8 var(--font-body); }

/* Labels, nav, botões */
.text-ui       { font: 500 0.875rem/1.4 var(--font-ui); letter-spacing: 0.04em; }

/* Citações em destaque */
.text-quote    { font: 400 italic clamp(1.25rem, 3vw, 1.75rem)/1.5 var(--font-display); }
```

---

## ESTRUTURA DE SEÇÕES

O site tem **7 seções** em uma única página com scroll suave.

```
[1] HERO          — Impacto visual imediato, nome da marca, tagline
[2] QUEM É VERA   — Foto + apresentação pessoal curta
[3] HISTÓRIA      — Storytelling da trajetória em linha do tempo
[4] O QUE FAZEMOS — Cards dos produtos/marmitas com diferencial
[5] EBOOKS        — Vitrine dos produtos digitais
[6] DEPOIMENTOS   — Prova social de clientes reais
[7] FOOTER        — Links, Instagram, contato
```

---

## SEÇÃO 1 — HERO

### Layout
Altura: `100dvh` (ocupa tela inteira na abertura)
Layout: dividido em duas colunas no desktop, stack no mobile

**Coluna esquerda (60%):**
- Tag pequena: `"Itatiba · SP"` em `--font-ui` com uma linha decorativa
- Título principal em Playfair Display:
  ```
  Alimentação
  que abraça.
  ```
- Subtítulo em Lora italic:
  ```
  "Marmitas fit congeladas feitas com carinho,
  para quem quer comer bem sem complicar a vida."
  ```
- Dois CTAs lado a lado:
  - Primário: `"Ver Ebooks"` → scroll para seção ebooks (fundo `--terra`, texto branco)
  - Secundário: `"Nossa História"` → scroll para história (borda `--terra`, texto `--terra`)

**Coluna direita (40%):**
- Imagem hero da Vera na cozinha (foto real, quente, não posada demais)
- Tratamento visual: leve vinheta nas bordas, border-radius orgânico (`60% 40% 55% 45% / 50% 60% 40% 50%`)
- Badge flutuante sobre a imagem (animação float suave):
  ```
  +202K pessoas
  já conhecem a Bemleve 💚
  ```

**Elemento decorativo:**
- Linha orgânica SVG de fundo (tipo textura de cozinha) em `--terra-pale` com `opacity: 0.3`
- Grão de ruído CSS muito sutil sobre o fundo `--cream`

### Animação de entrada (Framer Motion)
```
- Tag "Itatiba · SP": fade in + slide up, delay 0.1s
- Título linha 1: fade in + slide up, delay 0.2s
- Título linha 2: fade in + slide up, delay 0.35s
- Subtítulo: fade in, delay 0.5s
- Botões: fade in + scale(0.95→1), delay 0.65s
- Imagem direita: fade in + slide left, delay 0.3s
- Badge flutuante: fade in, delay 0.8s
```

---

## SEÇÃO 2 — QUEM É VERA

### Layout
Fundo: `--terra-pale` (laranja suave)
Padding generoso: `py-24`

**Estrutura visual:**
```
[Foto Vera — quadrada, borda orgânica]   [Texto à direita]
```

**Conteúdo do texto:**
```
Tag:        "A cozinheira por trás da Bemleve"
Nome:       "Vera Senerine"  ← Playfair Display, grande
Texto:
  "Comecei a Bemleve em 2020, na cozinha do meu apartamento
   de 50m², com o meu filho e muita vontade de ajudar
   as pessoas a comer melhor.

   Hoje produzimos mais de 2.000 marmitas por mês —
   e cada uma é feita com o mesmo cuidado do primeiro dia."

Stats em linha:
  [+2.000 marmitas/mês]  [202K seguidores]  [+3 anos de história]
```

**Detalhe visual dos stats:**
- Número em Playfair Display grande, cor `--terra`
- Label em DM Sans pequeno, cor `--warm-gray`
- Separados por linha vertical fina `--border`

---

## SEÇÃO 3 — HISTÓRIA

### Layout
Fundo: `--cream` (padrão)
Formato: **timeline vertical** com alternância esquerda/direita no desktop

**Título da seção:**
```
"Da necessidade,
 nasceu um propósito."
```

**4 marcos da timeline:**

```
[1] 2020 · A pandemia chegou
    Ícone: porta fechada (SVG simples)
    Texto: "Tinha um espaço em Itatiba onde servia shakes para
            quem queria emagrecer. Quando tudo fechou, precisei
            recomeçar do zero."

[2] 2020 · A primeira semana
    Ícone: marmita
    Texto: "Montei um cardápio, cozinhei na minha cozinha e ofereci
            para minhas clientes. Na primeira semana: 70 marmitas.
            Na segunda: 100. Não parei mais."

[3] 2021 · Do apartamento à cozinha própria
    Ícone: fogão industrial
    Texto: "O freezer tomou conta da sala. Chegou a hora de crescer.
            Comprei equipamentos, aprendi tudo do zero — desde
            fotografia até técnicas de congelamento."

[4] Hoje · 202K e contando
    Ícone: coração
    Texto: "Mais de 2.000 marmitas por mês, uma equipe incrível
            e 202 mil pessoas que confiam no nosso trabalho.
            Cada marmita ainda é feita com o mesmo carinho."
```

**Visual da timeline:**
- Linha vertical central em `--terra` com `opacity: 0.3`
- Círculo de ícone: fundo `--terra-pale`, ícone `--terra`
- Cards alternados: fundo `--white`, borda `0.5px solid --border`, `border-radius: 16px`
- Animação: cada card aparece com scroll trigger (Framer Motion `whileInView`)

---

## SEÇÃO 4 — O QUE FAZEMOS

### Layout
Fundo: `--sage-pale` (verde suave)
Grid: `3 colunas` no desktop, `1 coluna` no mobile

**Título:**
```
"Feito com carinho,
 entregue com cuidado."
```

**3 Cards de produto:**

```
Card 1 — Marmitas Fit
  Ícone: 🥦 (substituir por SVG próprio)
  Título: "Marmitas Fit"
  Desc:   "320g de equilíbrio. Proteína, carboidrato e
           legumes — tudo junto e pronto para a semana."
  Detalhe: "Fit · Low Carb · Vegetariana"

Card 2 — Sopas & Caldos
  Ícone: 🍲
  Título: "Sopas & Caldos"
  Desc:   "O abraço que vem numa tigela. Opções quentinhas
           para qualquer estação do ano."
  Detalhe: "Congeladas · Sem conservantes"

Card 3 — Sucos
  Ícone: 🍋
  Título: "Sucos Naturais"
  Desc:   "Praticidade no copo. Sabor real, ingredientes
           frescos, zero adição de açúcar."
  Detalhe: "100% natural · Congelado"
```

**Visual dos cards:**
- Fundo `--white`
- Hover: `translateY(-4px)` + `box-shadow` suave
- Ícone em círculo `--sage-pale`
- Borda superior: `3px solid --sage`
- Transição: `transition: all 0.3s ease`

**Nota operacional (abaixo dos cards):**
```
📍 Entregamos em Itatiba/SP e região
⏱️ Validade de 3 meses no congelador
✅ Sem conservantes, sem corantes
```

---

## SEÇÃO 5 — EBOOKS ⭐

### Layout
Fundo: `--cream-dark`
Esta é a seção de conversão principal.

**Título:**
```
"Leve o método Bemleve
 para a sua casa."
```

**Subtítulo:**
```
"Ebooks criados pela Vera com tudo que ela aprendeu
 cozinhando para mais de 2.000 pessoas por mês."
```

### Grid de ebooks
`2 colunas` no desktop, `1 coluna` no mobile
`gap: 1.5rem`

**Card de ebook — estrutura:**
```jsx
<EbookCard>
  <div className="ebook-cover">      // imagem da capa (mock ou real)
    <span className="category-badge" /> // ex: "Receitas"
  </div>
  <div className="ebook-body">
    <p className="ebook-category" />   // ex: "MARMITAS FIT"
    <h3 className="ebook-title" />     // título
    <p className="ebook-desc" />       // 2 linhas
    <ul className="ebook-bullets" />   // 3 bullets do que vai aprender
    <div className="ebook-footer">
      <span className="price" />       // ex: "R$ 37"
      <a className="cta-button" />     // "Quero esse ebook →"
      // CTA abre link externo (Hotmart/Kiwify)
    </div>
  </div>
</EbookCard>
```

**Dados dos ebooks (preencher conforme forem lançando):**

```js
const ebooks = [
  {
    id: 1,
    category: "Marmitas Fit",
    title: "Bem Leve na Cozinha",
    subtitle: "Marmitas Fit Congeladas",
    description: "Organize sua semana com refeições saudáveis, saborosas e prontas para congelar.",
    bullets: [
      "18+ receitas fit, low carb e vegetarianas",
      "Técnicas de congelamento sem conservantes",
      "Planejamento alimentar semanal completo"
    ],
    price: "R$ 37",
    badge: "Mais vendido",
    badgeColor: "terra",
    ctaUrl: "#",  // link Hotmart/Kiwify aqui
    coverColor: "--terra-pale",
    featured: true,
  },
  {
    id: 2,
    category: "Curadoria",
    title: "Receitas de Sucesso",
    subtitle: "As Mais Pedidas da Bemleve",
    description: "As receitas favoritas dos clientes — selecionadas pelo carinho e pelo sabor.",
    bullets: [
      "Os pratos campeões de pedidos",
      "História por trás de cada receita",
      "Dicas exclusivas de preparo e congelamento"
    ],
    price: "R$ 27",
    badge: null,
    ctaUrl: "#",
    coverColor: "--sage-pale",
    featured: false,
  },
  {
    id: 3,
    category: "Negócio",
    title: "Como Conseguir Clientes",
    subtitle: "Do Zero às Primeiras 100 Marmitas Vendidas",
    description: "O método que a Vera usou para vender 70 marmitas na primeira semana.",
    bullets: [
      "Estratégia real de Instagram e WhatsApp",
      "Como montar preço e cardápio inicial",
      "Do apartamento ao primeiro cliente fiel"
    ],
    price: "R$ 47",
    badge: "Empreendedoras",
    badgeColor: "sage",
    ctaUrl: "#",
    coverColor: "--cream-dark",
    featured: false,
  },
  {
    id: 4,
    category: "Instagram",
    title: "Do 0 ao 100 Mil",
    subtitle: "Como Cresci no Instagram com Marmitas Fit",
    description: "O método de conteúdo por trás dos 202K seguidores da Bemleve.",
    bullets: [
      "Tipos de post que mais engajam",
      "Estratégia de Reels e Stories",
      "Copy e legenda que geram clientes"
    ],
    price: "R$ 57",
    badge: null,
    ctaUrl: "#",
    coverColor: "--terra-pale",
    featured: false,
  },
]
```

**Visual dos cards de ebook:**
```css
.ebook-card {
  background: var(--white);
  border: 0.5px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.ebook-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(44, 26, 14, 0.12);
}
.ebook-card.featured {
  border: 2px solid var(--terra);
}
.ebook-cover {
  height: 200px;
  background: var(--cover-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.ebook-bullets li::before {
  content: "✓";
  color: var(--sage);
  font-weight: 600;
  margin-right: 8px;
}
.cta-button {
  background: var(--terra);
  color: white;
  padding: 10px 20px;
  border-radius: 100px;
  font: 500 0.875rem var(--font-ui);
  transition: background 0.2s ease;
}
.cta-button:hover {
  background: var(--terra-light);
}
```

**Abaixo do grid — bundle highlight:**
```
┌─────────────────────────────────────────────────────────────┐
│  🏆  Kit Sistema Completo                                    │
│      Todos os ebooks por R$ 147 (economia de R$ 21)         │
│                              [Quero o kit completo →]        │
└─────────────────────────────────────────────────────────────┘
```
Visual: fundo `--brown-deep`, texto `--cream`, CTA fundo `--terra`

---

## SEÇÃO 6 — DEPOIMENTOS

### Layout
Fundo: `--cream`
Formato: carrossel horizontal (Embla Carousel ou Swiper)

**Título:**
```
"Quem já provou,
 não quer parar."
```

**Estrutura de cada card:**
```
[Foto do cliente — círculo 48px]
[Nome + cidade]
[★★★★★]
[Texto do depoimento — max 3 linhas]
[Tag: "Cliente há X meses"]
```

**Depoimentos placeholder (substituir por reais):**
```js
const testimonials = [
  {
    name: "Ana Paula S.",
    city: "Itatiba, SP",
    text: "Mudou minha rotina completamente. Abro o freezer e tenho refeição saudável pronta em 5 minutos. Não consigo imaginar minha semana sem as marmitas da Vera.",
    months: 8,
  },
  {
    name: "Carla M.",
    city: "Itatiba, SP",
    text: "Comecei para emagrecer e fiquei pelo sabor. Nunca pensei que comida congelada podia ser tão gostosa. A sopa de abóbora é perfeita demais.",
    months: 12,
  },
  {
    name: "Fernanda T.",
    city: "Bragança Paulista, SP",
    text: "Comprei o ebook e aprendi a montar minha própria rotina alimentar. As dicas de congelamento da Vera são ouro. Recomendo para todo mundo.",
    months: 3,
  },
]
```

**Visual:**
- Cards: fundo `--white`, borda `--border`, `border-radius: 16px`
- Stars: cor `--terra`
- Auto-play com pause no hover
- Dots de navegação em `--terra`

---

## SEÇÃO 7 — FOOTER

### Layout
Fundo: `--brown-deep`
Texto: `--cream`

**Estrutura:**
```
Coluna 1:                    Coluna 2:              Coluna 3:
Logo Bemleve                 Links rápidos          Contato
Tagline                      Início
"Itatiba/SP"                 Nossa história         @bemleve_marmitafit
                             Ebooks                 [ícone Instagram]
                             Contato
                                                    📍 Itatiba/SP
```

**Linha final (abaixo do divider):**
```
© 2025 Bemleve Comidas Saudáveis · Todos os direitos reservados
Feito com carinho em Itatiba/SP ♥
```

---

## NAVEGAÇÃO (HEADER)

### Comportamento
- **Inicial:** transparente, texto `--cream` (sobre o hero)
- **Após scroll:** fundo `--cream` sólido + sombra suave, texto `--brown-deep`
- Transição suave: `transition: all 0.4s ease`

### Conteúdo
```
[Logo "Bemleve" em Playfair Display]    [Nossa História]  [Produtos]  [Ebooks]  [Contato]
                                                                                  ↑ em mobile = hamburguer
```

**Mobile nav:** drawer lateral com animação slide-in

---

## ANIMAÇÕES GERAIS

### Princípio: "Natural como cozinhar"
Nada abrupto. Tudo orgânico, como vapor saindo de uma panela.

```
Scroll reveal:     fade + translateY(20px → 0), duration 0.6s, easing ease-out
Hover em cards:    translateY(-4px a -6px), box-shadow cresce
Hover em botões:   background levemente mais claro/escuro, scale(1.02)
Timeline markers:  scale(0 → 1) quando entra na viewport
Counter (stats):   count-up quando a seção fica visível
Imagem hero:       leve parallax no scroll (Framer Motion useScroll)
```

**Framer Motion — configuração base:**
```js
const fadeUpVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

// Uso:
<motion.div
  variants={fadeUpVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
>
```

---

## COMPONENTES A CRIAR

```
/components
  /ui
    Button.tsx          — variantes: primary, secondary, ghost
    Badge.tsx           — variantes: terra, sage, neutral
    SectionTitle.tsx    — título + subtítulo padronizados
  /sections
    Hero.tsx
    AboutVera.tsx
    History.tsx         — timeline
    Products.tsx        — cards de produto
    Ebooks.tsx          — grid + bundle CTA
    Testimonials.tsx    — carrossel
    Footer.tsx
  /layout
    Header.tsx          — nav com scroll behavior
    Navigation.tsx
```

---

## RESPONSIVIDADE

### Breakpoints (Tailwind padrão)
```
sm:  640px   — mobile landscape
md:  768px   — tablet
lg:  1024px  — desktop
xl:  1280px  — desktop largo
```

### Comportamento por seção

| Seção | Mobile | Desktop |
|-------|--------|---------|
| Hero | Stack vertical, imagem abaixo | Side-by-side |
| Quem é Vera | Stack vertical | Side-by-side |
| História | Timeline vertical centralizada | Alternada esq/dir |
| Produtos | 1 coluna | 3 colunas |
| Ebooks | 1 coluna | 2 colunas |
| Depoimentos | 1 card visível | 2-3 cards |

---

## PERFORMANCE E SEO

### Meta tags (layout.tsx)
```tsx
export const metadata: Metadata = {
  title: 'Bemleve Marmitafit — Marmitas Fit Congeladas em Itatiba/SP',
  description: 'Alimentação saudável e prática com marmitas fit congeladas. Entregamos em Itatiba e região. Conheça também nossos ebooks de receitas e negócio.',
  keywords: 'marmita fit, marmita congelada, itatiba, alimentação saudável, ebook receitas fit',
  openGraph: {
    title: 'Bemleve Marmitafit',
    description: 'Marmitas fit congeladas feitas com carinho por Vera Senerine em Itatiba/SP.',
    images: ['/og-image.jpg'],
    locale: 'pt_BR',
    type: 'website',
  },
}
```

### Imagens
- Todas via `next/image` com `priority` no hero
- Formato: WebP com fallback JPEG
- Alt texts descritivos em todas

### Lighthouse targets
```
Performance:    > 90
Accessibility:  > 95
SEO:            100
Best Practices: > 90
```

---

## ESTRUTURA DE ARQUIVOS SUGERIDA

```
bemleve-site/
├── app/
│   ├── layout.tsx        — metadata, fontes, globals
│   ├── page.tsx          — monta todas as seções em ordem
│   └── globals.css       — CSS variables, reset, utilitários
├── components/
│   ├── ui/               — componentes atômicos
│   ├── sections/         — seções da página
│   └── layout/           — header, footer
├── public/
│   ├── images/           — fotos da Vera, produtos
│   ├── ebooks/           — capas dos ebooks
│   └── og-image.jpg      — imagem Open Graph
├── lib/
│   └── data.ts           — dados dos ebooks, depoimentos, stats
└── tailwind.config.ts    — extend com cores e fontes customizadas
```

---

## TAILWIND CONFIG (extensão necessária)

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:      '#F5F0E8',
        'cream-dark': '#EDE7D9',
        brown: {
          deep: '#2C1A0E',
          mid:  '#6B3F1F',
        },
        terra: {
          DEFAULT: '#C4521A',
          light:   '#E8744A',
          pale:    '#F5DDD2',
        },
        sage: {
          DEFAULT: '#5C7A4E',
          light:   '#8EAD7E',
          pale:    '#E8F0E4',
        },
        'warm-gray': '#9A8E80',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Lora', 'Georgia', 'serif'],
        ui:      ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        organic: '60% 40% 55% 45% / 50% 60% 40% 50%',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

---

## INSTRUÇÕES PARA O CLAUDE CODE

Cole isso ao iniciar a sessão no Claude Code:

```
Você vai construir a landing page da Bemleve Marmitafit.
Leia o arquivo bemleve_site_briefing.md e o bemleve_analysis.md como contexto completo.

Stack: Next.js 14 (App Router) + Tailwind CSS + Framer Motion
Fontes: Playfair Display + Lora + DM Sans (Google Fonts)

Comece por:
1. Configurar o projeto (layout.tsx com fontes e metadata)
2. globals.css com CSS variables da paleta
3. tailwind.config.ts com extensões
4. Componente Hero.tsx completo e animado

Siga rigorosamente a direção visual do briefing:
paleta quente (cream, terra, sage), tipografia serifada,
animações suaves com Framer Motion.
```

---

*Briefing preparado com base na análise completa do perfil @bemleve_marmitafit*
*Para dúvidas sobre conteúdo ou copywriting, consultar o arquivo analise_bemleve_marmitafit.md*
