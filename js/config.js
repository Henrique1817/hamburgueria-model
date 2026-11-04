/**
 * CONFIGURAÇÃO GERAL DA HAMBURGUERIA
 * -------------------------------------------------------------
 * Personalize este arquivo para cada cliente em menos de 5 minutos!
 * Basta alterar os dados abaixo (nome, telefone, endereço, produtos, promoções).
 * O site se atualiza automaticamente em todas as páginas e links do WhatsApp.
 */

const BURGER_CONFIG = {
  // Informações da Hamburgueria
  restaurant: {
    name: "The King Smash & Craft Burger",
    shortName: "The King Burger",
    tagline: "O Smash Artesanal Mais Crocante e Suculento da Região",
    description: "Blend 100% Angus fresco moído diariamente, queijo derretido no ponto exato, pão brioche amanteigado tostado e molhos autorais secretos. Sem taxas abusivas, direto no seu WhatsApp.",
    logoText: "THE KING",
    logoSubtext: "CRAFT BURGERS",
    
    // Telefone WhatsApp (código do país + DDD + número sem espaços nem traços)
    whatsappNumber: "5511964455296",
    whatsappDisplay: "(11) 96445-5296",
    
    // Redes e Localização
    instagram: "@theking.burger",
    instagramUrl: "https://instagram.com",
    address: "Av. Principal dos Sabores, 450 - Bairro Nobre",
    cityState: "São Paulo - SP",
    mapsUrl: "https://maps.google.com",
    
    // Operação e Prazos
    openingHours: "Terça a Domingo: 18h às 23h45",
    deliveryTime: "30 a 45 min",
    deliveryZones: "Atendemos num raio de até 10km (Bairros Centro, Jardins, Pinheiros e região)",
    minOrderValue: 25.00,
    freeDeliveryThreshold: 70.00,
    
    // Prova Social
    googleRating: "4.9",
    totalReviews: "1.450+",
    ordersDelivered: "28.000+"
  },

  // Configuração da Campanha Black Friday (Ative ou Desative facilmente)
  blackFriday: {
    enabled: true, // Mude para false fora de época para virar "Festival de Ofertas" normal
    campaignTag: "🔥 BLACK FRIDAY BURGER WEEK",
    headlineBadge: "OFERTAS EXCLUSIVAS DE BLACK FRIDAY",
    mainDiscountText: "ATÉ 40% OFF NOS MAIS PEDIDOS",
    subNotice: "🚨 Estoque de blends frescos limitado para os primeiros 100 pedidos da noite!",
    couponCode: "BLACKFRIDAY10",
    couponDiscountDesc: "R$ 10 OFF no 1º Pedido acima de R$ 50",
    
    // Contador regressivo (Formato: YYYY-MM-DDTHH:MM:SS)
    // Se a data expirar, o contador automaticamente reinicia para o fim do dia seguinte!
    countdownEnd: "2026-11-30T23:59:59"
  },

  // Diferenciais Competitivos (Por que pedir aqui e não no concorrente)
  differentials: [
    {
      icon: "flame",
      title: "Blend 100% Angus Fresco",
      desc: "Carnes nobres selecionadas moídas no dia, nunca congeladas. Crosta ultra caramelizada e sabor intenso."
    },
    {
      icon: "bread",
      title: "Pão Brioche de Fermentação Natural",
      desc: "Massa leve e amanteigada, selada na chapa com manteiga ghee para não encharcar."
    },
    {
      icon: "droplet",
      title: "Molhos Artesanais Secretos",
      desc: "Nossa famosa maionese defumada, barbecue de goiabada e cheddar cremoso fundido."
    },
    {
      icon: "truck",
      title: "Embalagem Térmica Anti-Vapor",
      desc: "Seu burger e batata chegam estalando de quentes e sequinhos, como se saíssem da chapa agora."
    }
  ],

  // Combos Destacados da Black Friday (Hero Deals de Alta Conversão)
  featuredDeals: [
    {
      id: "deal-1",
      badge: "MAIS VENDIDO 🔥",
      tag: "BLACK FRIDAY -35%",
      title: "Combo Smash Supremo Duplo",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      description: "2x Carnes Angus Smash 90g (180g), Double Cheddar inglês derretido, Bacon crocante em fatias generosas, Maionese artesanal defumada no pão brioche amanteigado.",
      includes: [
        "1x Burger Smash Supremo Duplo",
        "1x Batata Rústica Individual Crocante",
        "1x Molho Especial da Casa (Pote 50g)",
        "1x Refri Lata 350ml à escolha"
      ],
      originalPrice: 53.90,
      price: 34.90,
      category: "combos"
    },
    {
      id: "deal-2",
      badge: "ECONOMIZE R$ 26 💥",
      tag: "BLACK FRIDAY -40%",
      title: "Combo Casal / 2 Pessoas VIP",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
      description: "O combo perfeito para dividir: 2 burgers artesanais completos + porção grande de batata especial para dois + 2 bebidas geladas.",
      includes: [
        "1x Cheddar Bacon Monster (160g)",
        "1x Classic Salad Trufado (160g)",
        "1x Batata Grande com Cheddar & Farofa de Bacon",
        "2x Bebidas 350ml (Coca, Guaraná ou Suco)"
      ],
      originalPrice: 95.80,
      price: 69.90,
      category: "combos"
    },
    {
      id: "deal-3",
      badge: "EDIÇÃO ESPECIAL 🥓",
      tag: "BLACK FRIDAY -30%",
      title: "Combo Bacon Jam & Gorgonzola",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
      description: "Blend alto 180g grelhado no fogo, geleia de bacon caseira agridoce, creme de queijo gorgonzola suave e rúcula baby.",
      includes: [
        "1x Burger Bacon Jam 180g",
        "1x Onion Rings Empanadas Crocantes (6 un)",
        "1x Maionese de Alho Confit",
        "1x Bebida 350ml à escolha"
      ],
      originalPrice: 58.90,
      price: 39.90,
      category: "combos"
    }
  ],

  // Categorias do Cardápio
  categories: [
    { id: "all", name: "Todos os Itens", icon: "sparkles" },
    { id: "combos", name: "Combos Black Friday", icon: "tag" },
    { id: "smashes", name: "Smashes Crocantes", icon: "flame" },
    { id: "artesanais", name: "Burgers Altos 180g", icon: "utensils" },
    { id: "porcoes", name: "Porções & Fritas", icon: "french-fries" },
    { id: "sobremesas", name: "Shakes & Sobremesas", icon: "ice-cream" },
    { id: "bebidas", name: "Bebidas Geladas", icon: "cup-soda" }
  ],

  // Itens do Cardápio Completo
  products: [
    // SMASHES
    {
      id: "p1",
      category: "smashes",
      name: "Smash Burger Simples",
      description: "1x Carne smash 90g com crostinha crocante, queijo cheddar derretido e maionese artesanal no pão brioche fofinho.",
      price: 21.90,
      originalPrice: 26.90,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
      badge: "Mais Barato"
    },
    {
      id: "p2",
      category: "smashes",
      name: "Double Smash Bacon",
      description: "2x Carnes smash 90g, duplo cheddar cremoso, fatias de bacon crocante e molho barbecue rústico.",
      price: 29.90,
      originalPrice: 38.00,
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80",
      badge: "Campeão de Vendas ⭐"
    },
    {
      id: "p3",
      category: "smashes",
      name: "Triple Smash Cheddar Melt",
      description: "3x Carnes smash 90g (270g no total!), cascata de cheddar melt fundido e cebola caramelizada artesanal.",
      price: 36.90,
      originalPrice: 44.90,
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
      badge: "Para os Famintos 🦁"
    },

    // ARTESANAIS ALTOS
    {
      id: "p4",
      category: "artesanais",
      name: "The King Classic Gourmet",
      description: "Hambúrguer de 180g Angus alto, queijo prato especial derretido, alface americana fresca, tomate maduro, picles agridoce da casa e molho especial.",
      price: 32.90,
      originalPrice: 39.90,
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80",
      badge: "Clássico"
    },
    {
      id: "p5",
      category: "artesanais",
      name: "Smoky BBQ & Crispy Onions",
      description: "180g de carne suculenta no ponto certo, queijo monterey jack, montanha de cebola crispy crocante, bacon em tiras e molho barbecue defumado.",
      price: 36.90,
      originalPrice: 46.00,
      image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=600&q=80",
      badge: "Gourmet"
    },
    {
      id: "p6",
      category: "artesanais",
      name: "Gorgonzola & Cebola Roxa Grelhada",
      description: "Blend 180g, generoso creme artesanal de queijo gorgonzola, cebola roxa grelhada com azeite de ervas e rúcula selecionada.",
      price: 37.90,
      originalPrice: 48.00,
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
      badge: "Sabor Marcante"
    },

    // PORÇÕES
    {
      id: "p7",
      category: "porcoes",
      name: "Batata Frita Tradicional Sequinha",
      description: "Batata palito cortada média, frita no óleo novo, crocante por fora e macia por dentro. Acompanha maionese da casa.",
      price: 16.90,
      originalPrice: 21.00,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
      badge: "Crocante"
    },
    {
      id: "p8",
      category: "porcoes",
      name: "Batata Rústica Cheddar & Farofa de Bacon",
      description: "Batatas rústicas com casca temperadas com páprica doce e sal fino, cobertas com calda generosa de cheddar e farofa de bacon defumado crocante.",
      price: 26.90,
      originalPrice: 33.90,
      image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
      badge: "Mais Pedida 🔥"
    },
    {
      id: "p9",
      category: "porcoes",
      name: "Coxinhas de Costela sem Massa (6 un)",
      description: "100% recheio de costela bovina desfiada marinada na cerveja preta e temperos, empanadas na farinha panko super crocante. Acompanha molho barbecue.",
      price: 28.90,
      originalPrice: 35.00,
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
      badge: "Petisco Nobre"
    },
    {
      id: "p10",
      category: "porcoes",
      name: "Onion Rings Empanadas (10 un)",
      description: "Anéis de cebola doce selecionada empanados em massa crocante temperada. Servidos bem quentinhos.",
      price: 19.90,
      originalPrice: 24.00,
      image: "https://images.unsplash.com/photo-1639024471287-03521672198b?auto=format&fit=crop&w=600&q=80",
      badge: "Crocância Pura"
    },

    // SOBREMESAS
    {
      id: "p11",
      category: "sobremesas",
      name: "Milkshake Nutella com Borda Recheada 400ml",
      description: "Sorvete cremoso batido com pura pasta de Nutella, calda de chocolate especial e borda da taça decorada com pedaços de avelã.",
      price: 22.90,
      originalPrice: 28.00,
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
      badge: "Irresistível 🍫"
    },
    {
      id: "p12",
      category: "sobremesas",
      name: "Brownie Artesanal c/ Doce de Leite",
      description: "Brownie com chocolate meio amargo 70%, casquinha craquelada, interior úmido, recheado com doce de leite argentino e flor de sal.",
      price: 14.90,
      originalPrice: 18.00,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
      badge: "Docinho"
    },

    // BEBIDAS
    {
      id: "p13",
      category: "bebidas",
      name: "Coca-Cola Original ou Zero Lata 350ml",
      description: "Lata bem gelada trincando.",
      price: 6.90,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
      badge: ""
    },
    {
      id: "p14",
      category: "bebidas",
      name: "Guaraná Antarctica 350ml",
      description: "Lata trincando de gelada.",
      price: 6.50,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
      badge: ""
    },
    {
      id: "p15",
      category: "bebidas",
      name: "Suco Natural de Frutas 400ml",
      description: "Laranja espremida na hora ou Maracujá natural concentrado e refrescante.",
      price: 9.90,
      originalPrice: 12.00,
      image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80",
      badge: "100% Natural"
    }
  ],

  // Avaliações Reais de Clientes (Prova Social Poderosa)
  reviews: [
    {
      name: "Lucas Mendonça",
      rating: 5,
      role: "Guia Local Google ⭐⭐⭐⭐⭐",
      comment: "Melhor smash burger que já comi em anos! O pão chega quentinho e macio, a crostinha da carne é inacreditável de crocante. O atendimento pelo WhatsApp foi em menos de 2 minutos.",
      date: "Ontem",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80"
    },
    {
      name: "Camila Rocha",
      rating: 5,
      role: "Cliente Fiel",
      comment: "A batata com cheddar e bacon é outro nível! Chegou crocante mesmo com a entrega de moto. Pedir pelo site com o carrinho do zap foi muito rápido e prático. Recomendo demais!",
      date: "Há 3 dias",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
    },
    {
      name: "Felipe Albuquerque",
      rating: 5,
      role: "Aproveitou Black Friday",
      comment: "Comprei o Combo Casal com desconto e ficamos impressionados com a quantidade e o sabor. O blend 180g é rosado e suculento por dentro. Com certeza virei cliente semanal!",
      date: "Há 5 dias",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80"
    }
  ],

  // Dúvidas Frequentes (Elimina Objeções antes de ir pro WhatsApp)
  faq: [
    {
      question: "Como funciona o pedido pelo WhatsApp?",
      answer: "É super simples e rápido! Você escolhe seus burgers e adiciona ao carrinho aqui na página. Ao clicar em 'Finalizar Pedido', abrimos seu WhatsApp com todo o resumo do seu pedido já prontinho e formatado. Basta enviar e nosso atendente já confirma seu endereço e inicia o preparo na chapa!"
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos Pix (com confirmação instantânea), Cartão de Crédito e Débito (o entregador leva a maquininha até você) e Dinheiro (favor informar se precisa de troco)."
    },
    {
      question: "Qual o tempo médio de entrega e taxa?",
      answer: "Nosso tempo médio é de 30 a 45 minutos. As taxas variam de acordo com a distância do seu endereço (em geral entre R$ 5 e R$ 12). Pedidos acima de R$ 70 ganham FRETE GRÁTIS!"
    },
    {
      question: "O burger e a batata chegam crocantes e quentes?",
      answer: "Sim! Utilizamos caixas térmicas com micro-respiros anti-vapor patenteados. O vapor não umedece o pão nem amolece a batata, garantindo aquela experiência de comer no restaurante."
    },
    {
      question: "Como utilizo o cupom de Black Friday?",
      answer: "O cupom BLACKFRIDAY10 já é aplicado automaticamente no carrinho para pedidos acima de R$ 50, ou você pode informar ao nosso atendente no WhatsApp!"
    }
  ]
};

// Exporta para ser usado globalmente no browser e no Node.js
if (typeof window !== "undefined") {
  window.BURGER_CONFIG = BURGER_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = BURGER_CONFIG;
}
