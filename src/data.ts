import { BenefitPillar, FAQItem, TestimonialSlide, SaleNotification } from './types';

export const benefitPillars: BenefitPillar[] = [
  {
    id: 1,
    title: "Venda Sem Estoque e Sem Custos",
    description: "Descubra como estruturar toda a sua operação apenas indicando os produtos certos através de links comissionados, sem gastar um centavo com logística ou compras prévias.",
    iconName: "PackageX"
  },
  {
    id: 2,
    title: "Conteúdo Transformado em Vitrine",
    description: "Aprenda o posicionamento exato para que cada postagem sua trabalhe atraindo compradores voluntários e sedentos pelo seu produto, em vez de apenas caçadores de entretenimento gratuito.",
    iconName: "TrendingUp"
  },
  {
    id: 3,
    title: "Estratégia Anti-Dependência de Algoritmo",
    description: "Pare de implorar por curtidas, dancinhas ou visualizações. Foque nas métricas de conversão reais que realmente colocam dinheiro no seu bolso todos os dias.",
    iconName: "Cpu"
  },
  {
    id: 4,
    title: "Acesso Imediato ao Método Validado",
    description: "Um passo a passo cirúrgico e direto ao ponto, livre de enrolações teóricas e jargões complicados. Desenhado para você aplicar ainda hoje usando apenas o seu celular.",
    iconName: "Zap"
  },
  {
    id: 5,
    title: "Suporte e Atualizações Constantes",
    description: "Entre para um ecossistema ativo que te dá de bandeja o caminho das pedras, com suporte contínuo e atualizações frequentes das melhores ofertas e produtos ocultos do mercado.",
    iconName: "ShieldCheck"
  },
  {
    id: 6,
    title: "Escalável, venda até 10x +",
    description: "Além de aprender a vender online, você vai passar a vender 10x mais que qualquer pessoa que utiliza apenas o Youtube ou Instagram pra fazer uma venda, vou te mostrar o método que faz um cliente comprar comigo várias e várias vezes!",
    iconName: "TrendingUp"
  }
];

export const testimonialSlides: TestimonialSlide[] = [
  {
    id: "t1",
    type: "image",
    src: "/src/assets/images/sales_proof_dashboard_1780674223395.png",
    alt: "Painel de Vendas Afiliado - R$ 14.820,00 acumulados"
  },
  {
    id: "t2",
    type: "image",
    src: "/src/assets/images/sales_notifications_1780674250271.png",
    alt: "Notificações de Comissões no Celular - R$ 97,00 e R$ 197,00 recebidos"
  }
];

export const textTestimonials = [
  {
    id: "user1",
    name: "Mateus Ribeiro",
    role: "Afiliado há 3 meses",
    content: "Eu passava o dia todo gravando vídeos que davam muito visualização, mas R$ 0 no bolso. Apliquei o método de vitrine magnética e, logo no segundo dia, fiz minhas primeiras 3 vendas no piloto automático. Esse método é bizarro!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "user2",
    name: "Gabriela Souza",
    role: "Ex-estudante, faturando mais de R$ 8 mil/mês",
    content: "O melhor de tudo é não precisar de estoque nem gastar rios de dinheiro em anúncios. O passo a passo é tão simples que até quem nunca vendeu nada na internet consegue começar hoje. Vale cada centavo investido!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "user3",
    name: "Thiago Mendes",
    role: "Transição de carreira concluída",
    content: "Sempre achei que precisava aparecer ou ser expert em algum assunto. Com o pilar de venda sem aparecer, mudei meu jogo. O suporte é maravilhoso, respondem tudo em minutos. Recomendo de olhos fechados.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq1",
    question: "Preciso ter milhares de seguidores para começar a faturar?",
    answer: "Não! Esse é o maior mito das redes sociais. Nosso método foca em tráfego altamente qualificado e intenção de compra. Você aprenderá a vender mesmo em perfis criados do zero, sem nenhum seguidor inicial."
  },
  {
    id: "faq2",
    question: "Eu preciso aparecer se eu não quiser?",
    answer: "Absolutamente não. Nós ensinamos estratégias completas de perfis autoridade ocultos (perfis de nicho) onde você vende os produtos de forma 100% anônima, sem precisar mostrar seu rosto ou usar sua própria voz se não desejar."
  },
  {
    id: "faq3",
    question: "Como funciona a garantia do método?",
    answer: "Oferecemos uma garantia incondicional de 7 dias protegida por lei. Se por qualquer motivo você achar que o método não é para você, basta solicitar o reembolso na plataforma e devolveremos 100% do seu dinheiro sem perguntas irritantes."
  },
  {
    id: "faq4",
    question: "Quanto tempo vou demorar para ter os primeiros resultados?",
    answer: "Os resultados variam de pessoa para pessoa, pois dependem da aplicação direta do passo a passo. No entanto, temos centenas de alunos que realizaram suas primeiras vendas nas primeiras 48 horas após configurarem sua vitrine magnética."
  },
  {
    id: "faq5",
    question: "O acesso ao curso e às atualizações é vitalício?",
    answer: "O seu acesso é de 1 ano completo (12 meses) com direito a todas as atualizações de aulas, novos produtos disponibilizados e suporte prioritário incluso gratuitamente."
  }
];

export const recentSales: SaleNotification[] = [
  { id: "s1", name: "Lucas M.", location: "São Paulo, SP", timeAgo: "há 2 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s2", name: "Mariana R.", location: "Belo Horizonte, MG", timeAgo: "há 5 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s3", name: "Felipe S.", location: "Rio de Janeiro, RJ", timeAgo: "há 8 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s4", name: "Amanda C.", location: "Curitiba, PR", timeAgo: "há 12 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s5", name: "Rodrigo A.", location: "Salvador, BA", timeAgo: "há 15 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s6", name: "Letícia G.", location: "Porto Alegre, RS", timeAgo: "há 18 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s7", name: "Bruno F.", location: "Brasília, DF", timeAgo: "há 22 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s8", name: "Camila V.", location: "Recife, PE", timeAgo: "há 25 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s9", name: "Rafael T.", location: "Florianópolis, SC", timeAgo: "há 29 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s10", name: "Beatriz P.", location: "Fortaleza, CE", timeAgo: "há 34 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s11", name: "Gustavo D.", location: "Campinas, SP", timeAgo: "há 37 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s12", name: "Isadora M.", location: "Goiânia, GO", timeAgo: "há 41 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s13", name: "Leonardo N.", location: "Vitória, ES", timeAgo: "há 45 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s14", name: "Larissa O.", location: "Manaus, AM", timeAgo: "há 48 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s15", name: "Thiago K.", location: "Santos, SP", timeAgo: "há 52 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s16", name: "Juliana B.", location: "Belém, PA", timeAgo: "há 55 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s17", name: "Matheus B.", location: "Joinville, SC", timeAgo: "há 59 min", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s18", name: "Gabriela L.", location: "Natal, RN", timeAgo: "há 1 hora", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s19", name: "Vinícius M.", location: "Londrina, PR", timeAgo: "há 1 hora", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s20", name: "Carolina H.", location: "Ribeirão Preto, SP", timeAgo: "há 1 hora", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s21", name: "Gabriel P.", location: "Cuiabá, MT", timeAgo: "há 1 hora", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s22", name: "Fernanda X.", location: "João Pessoa, PB", timeAgo: "há 1 hora", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s23", name: "Daniel J.", location: "Aracaju, SE", timeAgo: "há 2 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s24", name: "Patrícia Q.", location: "São Luís, MA", timeAgo: "há 2 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s25", name: "André Z.", location: "Sorocaba, SP", timeAgo: "há 2 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s26", name: "Luana E.", location: "Teresina, PI", timeAgo: "há 2 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s27", name: "Diego R.", location: "Campo Grande, MS", timeAgo: "há 2 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s28", name: "Sofia C.", location: "Uberlândia, MG", timeAgo: "há 3 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s29", name: "Marcos W.", location: "Maceió, AL", timeAgo: "há 3 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s30", name: "Aline F.", location: "Niterói, RJ", timeAgo: "há 3 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s31", name: "Samuel G.", location: "Porto Velho, RO", timeAgo: "há 3 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s32", name: "Rayssa D.", location: "Macapá, AP", timeAgo: "há 3 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s33", name: "Victor Y.", location: "Vila Velha, ES", timeAgo: "há 4 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s34", name: "Priscila S.", location: "Juiz de Fora, MG", timeAgo: "há 4 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s35", name: "Eduardo N.", location: "Londrina, PR", timeAgo: "há 4 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s36", name: "Leticia Z.", location: "Pelotas, RS", timeAgo: "há 4 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s37", name: "Marcelo T.", location: "São José dos Campos, SP", timeAgo: "há 4 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s38", name: "Bianca S.", location: "Jundiaí, SP", timeAgo: "há 5 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s39", name: "Arthur G.", location: "Piracicaba, SP", timeAgo: "há 5 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s40", name: "Carina F.", location: "Blumenau, SC", timeAgo: "há 5 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s41", name: "Danilo M.", location: "Caxias do Sul, RS", timeAgo: "há 5 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s42", name: "Thais P.", location: "Anápolis, GO", timeAgo: "há 5 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s43", name: "Guilherme B.", location: "Feira de Santana, BA", timeAgo: "há 6 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s44", name: "Vanessa K.", location: "Cascavel, PR", timeAgo: "há 6 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s45", name: "Pedro V.", location: "Santos, SP", timeAgo: "há 6 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s46", name: "Isabela R.", location: "Campina Grande, PB", timeAgo: "há 6 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s47", name: "Caio O.", location: "Maringá, PR", timeAgo: "há 6 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s48", name: "Mayara L.", location: "Montes Claros, MG", timeAgo: "há 7 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s49", name: "Igor J.", location: "Macaé, RJ", timeAgo: "há 7 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" },
  { id: "s50", name: "Giovanna M.", location: "Caruaru, PE", timeAgo: "há 7 horas", product: "YouTube é só uma Vitrine, visualização não dá dinheiro" }
];
