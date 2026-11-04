# 🍔 Hamburgueria Black Friday & Funil WhatsApp (Landing Page de Alta Conversão)

Modelo profissional de landing page para hamburguerias artesanais e smash burgers, focado em **conversão máxima**, **eliminação de comissões abusivas de marketplaces (como iFood 12% a 27%)** e **funil de vendas direto no WhatsApp**.

---

## 🚀 Diferenciais do Modelo

1. **Funil Direto no WhatsApp com Carrinho Interativo**:
   - O cliente escolhe burgers, adiciona adicionais/observações (ex: "sem cebola"), seleciona se é **Entrega ou Retirada**, escolhe a forma de pagamento (Pix, Cartão, Dinheiro) e clica em **"Finalizar Pedido no WhatsApp"**.
   - O site gera automaticamente uma mensagem limpa, estruturada e profissional direto na conversa da hamburgueria!
2. **Tema de Black Friday de Alta Urgência**:
   - Barra superior de anúncio com **Contador Regressivo em tempo real**.
   - Badges de desconto (-35%, -40%), preços riscados ("De R$ 53,90 por R$ 34,90").
   - Cupom de desconto automático para incentivar a 1ª compra.
   - Pode ser facilmente desligado fora da época (vira "Festival de Burgers" ou promoções fixas).
3. **Personalização em 5 Minutos (`js/config.js`)**:
   - Não é necessário mexer no código HTML! Todas as informações (nome, telefone, combos, fotos, endereço, horários) ficam centralizadas em um único arquivo de configuração.
4. **Design Dark Gourmet & "Food Porn"**:
   - Estética moderna em tons escuros, luzes quentes ambar/laranja, efeitos de vidro (glassmorphism), animações suaves e tipografia marcante (`Oswald` + `Plus Jakarta Sans`).
5. **Responsivo & Ultra Rápido**:
   - Otimizado para celular (onde mais de 90% dos pedidos de delivery acontecem) com barra inferior fixa inteligente.

---

## 📁 Estrutura dos Arquivos

```
hamburgueria-model/
│
├── index.html            # Estrutura visual da landing page
├── css/
│   └── custom.css        # Efeitos visuais, glows, animações e responsividade
├── js/
│   ├── config.js         # ⭐️ ARQUIVO QUE VOCÊ VAI PERSONALIZAR PARA CADA CLIENTE
│   └── app.js            # Motor do carrinho, formatação WhatsApp e timers
├── assets/
│   └── images/           # Espaço para colocar as fotos locais dos burgers (se quiser)
└── README.md             # Este guia completo e scripts de venda
```

---

## ⚡ Como Personalizar para um Novo Cliente em 3 Passos

Abra o arquivo [`js/config.js`](file:///c:/Users/FOUR%20MED/OneDrive/hamburgueria-model/js/config.js):

### 1. Dados Básicos & WhatsApp
Altere o nome, endereço, horário e o número de WhatsApp (sem espaços ou traços, com código do país e DDD):
```javascript
restaurant: {
  name: "Burger do Zé Artesanal",
  whatsappNumber: "5511999998888", // Código do Brasil (55) + DDD + Número
  whatsappDisplay: "(11) 99999-8888",
  address: "Rua das Flores, 120 - Centro",
  openingHours: "Quarta a Domingo das 18h às 23h30",
  ...
}
```

### 2. Promoções de Black Friday
Ative ou desative o modo Black Friday e ajuste os descontos:
```javascript
blackFriday: {
  enabled: true, // Coloque false quando a Black Friday acabar
  campaignTag: "🔥 BLACK FRIDAY BURGER WEEK",
  couponCode: "BLACKFRIDAY10",
  countdownEnd: "2026-11-30T23:59:59"
}
```

### 3. Itens do Cardápio & Fotos
Altere ou adicione produtos na lista `featuredDeals` (combos em destaque) e `products` (cardápio normal).
*Dica:* você pode usar as fotos em alta resolução do Unsplash já configuradas ou substituir pelos links/arquivos das fotos reais do cliente!

---

## 💰 Pitch Comercial: Como Vender essa Landing Page para Hamburguerias

Hamburguerias sofrem com duas grandes dores:
1. **Comissão de 12% a 27% do iFood:** Uma hamburgueria que fatura R$ 30.000 no iFood deixa até **R$ 8.000 por mês** só em taxas na mesa.
2. **Cardápio em PDF no WhatsApp:** Clientes odeiam baixar PDF pesado, não conseguem ler no celular e o atendente perde 10 minutos respondendo preço de cada item.

### 🎯 Script de Abordagem Direta (WhatsApp ou Direct do Instagram)

> *"Oi, [Nome do Dono ou Hamburgueria]! Tudo bem?*
>
> *Vi o cardápio e os burgers de vocês e o padrão é sensacional! 🔥*
>
> *Com a Black Friday agora, reparei que muita hamburgueria aqui da região perde muito lucro pagando taxas de 20% a 27% no iFood, ou perde vendas porque o cliente tem preguiça de abrir cardápio em PDF no WhatsApp.*
>
> *Montei uma página interativa de alta conversão pronta para a Black Friday, onde o cliente escolhe os combos, adiciona adicionais e o pedido já cai formatadinho, com endereço e forma de pagamento direto no seu WhatsApp em 1 clique.*
>
> *Gravei uma demonstração de 40 segundos de como ficaria a página personalizada com a marca de vocês. Posso te mandar o link pra você dar uma olhada sem compromisso?"*

### 🏷️ Sugestão de Preço para Você Cobrar:
- **Opção 1 (Setup Único):** R$ 597 a R$ 997 (entrega em 24h a 48h já no ar).
- **Opção 2 (Recorrente / Suporte):** R$ 397 no setup + R$ 97 a R$ 147/mês (incluindo alterações semanais de preços, promoções e hospedagem).

---

## 🌐 Como Colocar o Site no Ar Gratuitamente

Você pode colocar este site no ar em menos de 3 minutos sem pagar nada de hospedagem:

1. **Vercel** ou **Netlify**:
   - Basta arrastar e soltar a pasta do projeto no painel da Netlify ([netlify.com](https://www.netlify.com/)) ou importar via GitHub na Vercel ([vercel.com](https://vercel.com/)).
2. **Domínio Próprio**:
   - Pode conectar o subdomínio do próprio cliente, por exemplo: `pedir.nomedahamburgueria.com.br` ou usar o domínio gratuito do Netlify/Vercel.

---

Feito com foco em performance, simplicidade de manutenção e máxima taxa de conversão! 🍔🔥
