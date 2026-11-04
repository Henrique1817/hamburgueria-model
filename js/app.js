/**
 * SISTEMA PRINCIPAL DE CONVERSÃO & FUNIL WHATSAPP
 * Hamburgueria High-Conversion Landing Page Model
 */

document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.BURGER_CONFIG;
  if (!cfg) {
    console.error("Configuração BURGER_CONFIG não encontrada!");
    return;
  }

  // Estado do Carrinho
  let cart = [];
  let currentCategory = "all";

  // 1. INICIALIZAÇÃO DE DADOS BÁSICOS NO HTML
  function initHeaderAndBrand() {
    // Título e Meta
    document.title = `${cfg.restaurant.name} | ${cfg.blackFriday.enabled ? 'Ofertas Black Friday' : 'Cardápio & Pedidos'}`;
    
    // Nomes e textos da marca
    document.querySelectorAll(".restaurant-name").forEach(el => el.textContent = cfg.restaurant.name);
    document.querySelectorAll(".restaurant-short-name").forEach(el => el.textContent = cfg.restaurant.shortName);
    document.querySelectorAll(".restaurant-tagline").forEach(el => el.textContent = cfg.restaurant.tagline);
    document.querySelectorAll(".restaurant-desc").forEach(el => el.textContent = cfg.restaurant.description);
    document.querySelectorAll(".restaurant-address").forEach(el => el.textContent = `${cfg.restaurant.address} • ${cfg.restaurant.cityState}`);
    document.querySelectorAll(".restaurant-hours").forEach(el => el.textContent = cfg.restaurant.openingHours);
    document.querySelectorAll(".restaurant-phone").forEach(el => el.textContent = cfg.restaurant.whatsappDisplay);
    document.querySelectorAll(".delivery-time").forEach(el => el.textContent = cfg.restaurant.deliveryTime);
    document.querySelectorAll(".google-rating").forEach(el => el.textContent = cfg.restaurant.googleRating);
    document.querySelectorAll(".total-reviews").forEach(el => el.textContent = cfg.restaurant.totalReviews);
    document.querySelectorAll(".orders-delivered").forEach(el => el.textContent = cfg.restaurant.ordersDelivered);

    // Links diretos para WhatsApp (Suporte ou Dúvidas)
    const directZapUrl = buildDirectWhatsAppUrl("Olá! Estava no site de vocês e gostaria de tirar uma dúvida sobre o cardápio! 🍔");
    document.querySelectorAll(".whatsapp-direct-link").forEach(el => el.href = directZapUrl);

    // Instagram e Maps
    document.querySelectorAll(".instagram-link").forEach(el => el.href = cfg.restaurant.instagramUrl);
    document.querySelectorAll(".instagram-handle").forEach(el => el.textContent = cfg.restaurant.instagram);
    document.querySelectorAll(".maps-link").forEach(el => el.href = cfg.restaurant.mapsUrl);
  }

  // 2. BLACK FRIDAY BANNER & COUNTDOWN
  function initBlackFriday() {
    const bf = cfg.blackFriday;
    const bannerEl = document.getElementById("black-friday-banner");
    
    if (!bf.enabled) {
      if (bannerEl) bannerEl.style.display = "none";
      return;
    }

    if (bannerEl) bannerEl.style.display = "block";
    
    // Atualiza badges e textos
    document.querySelectorAll(".bf-campaign-tag").forEach(el => el.textContent = bf.campaignTag);
    document.querySelectorAll(".bf-headline-badge").forEach(el => el.textContent = bf.headlineBadge);
    document.querySelectorAll(".bf-discount-text").forEach(el => el.textContent = bf.mainDiscountText);
    document.querySelectorAll(".bf-coupon-code").forEach(el => el.textContent = bf.couponCode);
    document.querySelectorAll(".bf-sub-notice").forEach(el => el.textContent = bf.subNotice);

    // Inicia Contador
    startCountdown(bf.countdownEnd);
  }

  function startCountdown(endDateStr) {
    let target = new Date(endDateStr).getTime();
    if (isNaN(target) || target < Date.now()) {
      // Se data já passou, põe para o final de hoje às 23:59:59 para manter a urgência real
      const endOfToday = new Date();
      endOfToday.setHours(23, 59, 59, 999);
      target = endOfToday.getTime();
    }

    function update() {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        document.getElementById("timer-hours").textContent = "00";
        document.getElementById("timer-minutes").textContent = "00";
        document.getElementById("timer-seconds").textContent = "00";
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const elH = document.getElementById("timer-hours");
      const elM = document.getElementById("timer-minutes");
      const elS = document.getElementById("timer-seconds");

      if (elH) elH.textContent = String(hours).padStart(2, "0");
      if (elM) elM.textContent = String(minutes).padStart(2, "0");
      if (elS) elS.textContent = String(seconds).padStart(2, "0");
    }

    update();
    setInterval(update, 1000);
  }

  // 3. RENDERIZAÇÃO DOS COMBOS DE DESTAQUE (FEATURED DEALS)
  function renderFeaturedDeals() {
    const container = document.getElementById("featured-deals-grid");
    if (!container) return;

    container.innerHTML = cfg.featuredDeals.map(deal => {
      const includesList = deal.includes.map(item => `
        <li class="flex items-center gap-2 text-sm text-gray-300">
          <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>${item}</span>
        </li>
      `).join("");

      return `
        <div class="relative flex flex-col bg-glass-card rounded-2xl overflow-hidden border border-white/10 group">
          <!-- Tag e Badge -->
          <div class="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
            <span class="bg-amber-500 text-black font-extrabold text-xs px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              ${deal.badge}
            </span>
            <span class="bg-red-600/90 text-white font-bold text-[11px] px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
              ${deal.tag}
            </span>
          </div>

          <!-- Imagem com Efeito Zoom -->
          <div class="relative h-56 sm:h-64 overflow-hidden bg-neutral-900">
            <img 
              src="${deal.image}" 
              alt="${deal.title}"
              loading="lazy" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#131317] via-transparent to-transparent"></div>
          </div>

          <!-- Conteúdo -->
          <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                ${deal.title}
              </h3>
              <p class="text-sm text-gray-400 mt-2 leading-relaxed">
                ${deal.description}
              </p>

              <!-- Inclusões do Combo -->
              <div class="mt-4 pt-4 border-t border-white/10">
                <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Incluso no Combo:</p>
                <ul class="space-y-1.5">
                  ${includesList}
                </ul>
              </div>
            </div>

            <!-- Preço e Botão de Ação -->
            <div class="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span class="text-xs text-gray-400 line-through">De ${formatMoney(deal.originalPrice)}</span>
                <div class="flex items-baseline gap-1.5">
                  <span class="text-xs font-bold text-amber-400">POR</span>
                  <span class="text-2xl sm:text-3xl font-black text-white font-heading">${formatMoney(deal.price)}</span>
                </div>
              </div>

              <div class="flex gap-2">
                <button 
                  onclick="window.quickAddToCart('${deal.id}', true)"
                  class="flex-1 sm:flex-none px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                  <span>Pedir Combo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // 4. CATEGORIAS & FILTROS
  function renderCategories() {
    const container = document.getElementById("categories-container");
    if (!container) return;

    container.innerHTML = cfg.categories.map(cat => {
      const isActive = cat.id === currentCategory;
      return `
        <button 
          onclick="window.filterCategory('${cat.id}')"
          class="category-btn whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border flex items-center gap-2 ${
            isActive 
              ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/30' 
              : 'bg-[#18181f] text-gray-300 border-white/10 hover:border-orange-500/50 hover:text-white'
          }"
          data-category="${cat.id}"
        >
          <span>${cat.name}</span>
        </button>
      `;
    }).join("");
  }

  window.filterCategory = (catId) => {
    currentCategory = catId;
    renderCategories();
    renderProducts();
  };

  // 5. RENDERIZAÇÃO DOS PRODUTOS
  function renderProducts() {
    const container = document.getElementById("products-grid");
    if (!container) return;

    // Combina produtos normais com combos para o cardápio
    let allItems = [
      ...cfg.featuredDeals.map(d => ({ ...d, isFeatured: true })),
      ...cfg.products
    ];

    if (currentCategory !== "all") {
      allItems = allItems.filter(p => p.category === currentCategory);
    }

    if (allItems.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-gray-400">
          <p class="text-lg">Nenhum item encontrado nesta categoria.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = allItems.map(prod => {
      const discountTag = prod.originalPrice 
        ? `<span class="text-xs text-gray-400 line-through">De ${formatMoney(prod.originalPrice)}</span>` 
        : '';

      const badgeHtml = prod.badge 
        ? `<span class="absolute top-3 left-3 z-10 bg-orange-500/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">${prod.badge}</span>` 
        : '';

      return `
        <div class="bg-glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group">
          <div class="relative h-48 sm:h-52 overflow-hidden bg-neutral-900">
            ${badgeHtml}
            <img 
              src="${prod.image}" 
              alt="${prod.name}"
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
            <div>
              <h4 class="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                ${prod.name}
              </h4>
              <p class="text-xs sm:text-sm text-gray-400 mt-1.5 leading-relaxed line-clamp-3">
                ${prod.description}
              </p>
            </div>

            <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
              <div>
                ${discountTag}
                <div class="text-xl font-black text-white font-heading">${formatMoney(prod.price)}</div>
              </div>

              <button 
                onclick="window.quickAddToCart('${prod.id}', ${Boolean(prod.isFeatured)})"
                class="px-3.5 py-2.5 bg-[#25252e] hover:bg-orange-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 border border-white/10 hover:border-orange-500 shadow-sm"
              >
                <svg class="w-4 h-4 text-orange-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"></path>
                </svg>
                <span>Adicionar</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // 6. DIFERENCIAIS
  function renderDifferentials() {
    const container = document.getElementById("differentials-grid");
    if (!container) return;

    const icons = {
      flame: `<svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path></svg>`,
      bread: `<svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>`,
      droplet: `<svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>`,
      truck: `<svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>`
    };

    container.innerHTML = cfg.differentials.map(diff => `
      <div class="bg-glass-card p-6 rounded-2xl border border-white/10 hover:border-orange-500/40 transition-all">
        <div class="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
          ${icons[diff.icon] || icons.flame}
        </div>
        <h3 class="text-lg font-bold text-white mb-2 font-heading tracking-wide">${diff.title}</h3>
        <p class="text-sm text-gray-400 leading-relaxed">${diff.desc}</p>
      </div>
    `).join("");
  }

  // 7. AVALIAÇÕES E PROVA SOCIAL
  function renderReviews() {
    const container = document.getElementById("reviews-grid");
    if (!container) return;

    container.innerHTML = cfg.reviews.map(rev => `
      <div class="bg-glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
        <div>
          <!-- Estrelas -->
          <div class="flex items-center gap-1 text-amber-400 mb-3">
            ${Array(rev.rating).fill(`
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            `).join("")}
          </div>
          <p class="text-sm text-gray-300 italic leading-relaxed">"${rev.comment}"</p>
        </div>

        <div class="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
          <img src="${rev.avatar}" alt="${rev.name}" class="w-10 h-10 rounded-full object-cover border border-white/20" />
          <div>
            <h4 class="text-sm font-bold text-white">${rev.name}</h4>
            <p class="text-xs text-gray-400">${rev.role} • ${rev.date}</p>
          </div>
        </div>
      </div>
    `).join("");
  }

  // 8. FAQ ACCORDION
  function renderFaq() {
    const container = document.getElementById("faq-container");
    if (!container) return;

    container.innerHTML = cfg.faq.map((item, index) => `
      <div class="bg-glass-card rounded-xl border border-white/10 overflow-hidden">
        <button 
          onclick="window.toggleFaq(${index})"
          class="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-amber-400 transition-colors"
        >
          <span class="text-base sm:text-lg">${item.question}</span>
          <svg id="faq-icon-${index}" class="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div id="faq-ans-${index}" class="hidden px-4 pb-5 sm:px-5 sm:pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3">
          ${item.answer}
        </div>
      </div>
    `).join("");
  }

  window.toggleFaq = (index) => {
    const ans = document.getElementById(`faq-ans-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    if (ans) {
      const isHidden = ans.classList.contains("hidden");
      ans.classList.toggle("hidden");
      if (icon) {
        icon.style.transform = isHidden ? "rotate(180deg)" : "rotate(0deg)";
      }
    }
  };

  // ==========================================
  // 9. FUNIL DO WHATSAPP & GERENCIAMENTO DO CARRINHO
  // ==========================================

  window.quickAddToCart = (productId, isFeatured = false) => {
    let product;
    if (isFeatured) {
      product = cfg.featuredDeals.find(d => d.id === productId);
    } else {
      product = cfg.products.find(p => p.id === productId) || cfg.featuredDeals.find(d => d.id === productId);
    }

    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name || product.title,
        price: product.price,
        quantity: 1,
        image: product.image,
        notes: ""
      });
    }

    updateCartUI();
    showToast(`Adicionado: ${product.name || product.title}`);
  };

  window.updateCartQuantity = (productId, delta) => {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }

    updateCartUI();
  };

  window.updateItemNotes = (productId, notes) => {
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.notes = notes;
    }
  };

  function updateCartUI() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    // Contadores nos botões
    document.querySelectorAll(".cart-count-badge").forEach(el => {
      el.textContent = totalItems;
      el.style.display = totalItems > 0 ? "flex" : "none";
      el.classList.add("cart-badge-bounce");
      setTimeout(() => el.classList.remove("cart-badge-bounce"), 400);
    });

    // Subtotal e Total
    document.querySelectorAll(".cart-subtotal").forEach(el => el.textContent = formatMoney(subtotal));

    // Desconto de cupom se aplicável
    let discount = 0;
    if (cfg.blackFriday.enabled && subtotal >= 50) {
      discount = 10.00; // R$ 10 OFF da Black Friday
    }
    const total = Math.max(0, subtotal - discount);

    document.querySelectorAll(".cart-discount-value").forEach(el => {
      el.textContent = discount > 0 ? `- ${formatMoney(discount)}` : "R$ 0,00";
    });
    document.querySelectorAll(".cart-discount-row").forEach(el => {
      el.style.display = discount > 0 ? "flex" : "none";
    });
    document.querySelectorAll(".cart-total").forEach(el => el.textContent = formatMoney(total));

    // Sticky bar mobile
    const stickyBar = document.getElementById("mobile-cart-sticky");
    if (stickyBar) {
      if (totalItems > 0) {
        stickyBar.classList.remove("hidden");
        document.getElementById("sticky-cart-total").textContent = formatMoney(total);
        document.getElementById("sticky-cart-count").textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`;
      } else {
        stickyBar.classList.add("hidden");
      }
    }

    // Renderiza itens dentro do Drawer
    const itemsContainer = document.getElementById("cart-drawer-items");
    const emptyState = document.getElementById("cart-drawer-empty");
    const checkoutFooter = document.getElementById("cart-drawer-footer");

    if (!itemsContainer) return;

    if (cart.length === 0) {
      itemsContainer.innerHTML = "";
      if (emptyState) emptyState.style.display = "flex";
      if (checkoutFooter) checkoutFooter.style.display = "none";
    } else {
      if (emptyState) emptyState.style.display = "none";
      if (checkoutFooter) checkoutFooter.style.display = "block";

      itemsContainer.innerHTML = cart.map(item => `
        <div class="bg-[#1a1a22] p-3.5 rounded-xl border border-white/5 flex gap-3 items-start">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover shrink-0 border border-white/10" />
          <div class="flex-1 min-w-0">
            <h5 class="text-sm font-bold text-white truncate">${item.name}</h5>
            <p class="text-xs text-amber-400 font-semibold mt-0.5">${formatMoney(item.price)} un</p>
            
            <!-- Observação rápida -->
            <input 
              type="text" 
              placeholder="Ex: sem cebola, ponto bem passado..." 
              value="${item.notes || ''}" 
              oninput="window.updateItemNotes('${item.id}', this.value)"
              class="w-full mt-2 bg-[#101015] border border-white/10 rounded px-2 py-1 text-[11px] text-gray-300 placeholder-gray-500 focus:outline-none focus:border-orange-500"
            />

            <!-- Controles de Quantidade -->
            <div class="flex items-center justify-between mt-2.5">
              <span class="text-xs font-bold text-white">${formatMoney(item.price * item.quantity)}</span>
              <div class="flex items-center gap-2 bg-[#121217] rounded-lg border border-white/10 px-1.5 py-0.5">
                <button 
                  onclick="window.updateCartQuantity('${item.id}', -1)" 
                  class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white font-bold"
                >-</button>
                <span class="text-xs font-bold text-white px-1">${item.quantity}</span>
                <button 
                  onclick="window.updateCartQuantity('${item.id}', 1)" 
                  class="w-6 h-6 flex items-center justify-center text-orange-400 hover:text-orange-300 font-bold"
                >+</button>
              </div>
            </div>
          </div>
        </div>
      `).join("");
    }
  }

  // 10. ABRIR E FECHAR DRAWER DO CARRINHO
  window.toggleCart = () => {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (!drawer) return;

    const isOpen = drawer.classList.contains("translate-x-0");
    if (isOpen) {
      drawer.classList.remove("translate-x-0");
      drawer.classList.add("translate-x-full");
      if (overlay) overlay.classList.add("hidden");
      document.body.style.overflow = "";
    } else {
      drawer.classList.remove("translate-x-full");
      drawer.classList.add("translate-x-0");
      if (overlay) overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  };

  // 11. FINALIZAR PEDIDO NO WHATSAPP COM FORMATO PERFEITO
  window.finishOrderOnWhatsApp = () => {
    if (cart.length === 0) {
      alert("Seu carrinho está vazio! Adicione algum hambúrguer irresistível antes.");
      return;
    }

    const orderType = document.querySelector('input[name="order_type"]:checked')?.value || "Entrega";
    const paymentMethod = document.getElementById("cart_payment_method")?.value || "Pix";
    const customerName = document.getElementById("customer_name")?.value.trim() || "";
    const customerAddress = document.getElementById("customer_address")?.value.trim() || "";
    const customerNotes = document.getElementById("customer_general_notes")?.value.trim() || "";

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    let discount = 0;
    if (cfg.blackFriday.enabled && subtotal >= 50) {
      discount = 10.00;
    }
    const total = Math.max(0, subtotal - discount);

    // Monta mensagem limpa e profissional para o WhatsApp
    let msg = `🍔 *NOVO PEDIDO - ${cfg.restaurant.name.toUpperCase()}*\n`;
    if (cfg.blackFriday.enabled) {
      msg += `🏷️ *OFERTAS BLACK FRIDAY*\n`;
    }
    msg += `-------------------------------------------\n`;

    cart.forEach(item => {
      msg += `▪️ *${item.quantity}x* ${item.name} (${formatMoney(item.price * item.quantity)})\n`;
      if (item.notes) {
        msg += `   _Obs: ${item.notes}_\n`;
      }
    });

    msg += `-------------------------------------------\n`;
    msg += `💰 *Subtotal:* ${formatMoney(subtotal)}\n`;
    if (discount > 0) {
      msg += `🎟️ *Cupom Black Friday:* -${formatMoney(discount)}\n`;
    }
    msg += `💳 *Total a Pagar:* ${formatMoney(total)}\n\n`;

    msg += `🛵 *Modalidade:* ${orderType}\n`;
    if (customerName) {
      msg += `👤 *Nome do Cliente:* ${customerName}\n`;
    }
    if (orderType === "Entrega") {
      msg += `📍 *Endereço:* ${customerAddress || "(Vou informar em seguida)"}\n`;
    } else {
      msg += `🏪 *Retirada:* No balcão da hamburgueria\n`;
    }
    msg += `💵 *Forma de Pagamento:* ${paymentMethod}\n`;

    if (customerNotes) {
      msg += `📝 *Observações Gerais:* ${customerNotes}\n`;
    }

    msg += `\n_Aguardando confirmação para iniciar o preparo!_ 🍟🔥`;

    const encodedMsg = encodeURIComponent(msg);
    const finalUrl = `https://api.whatsapp.com/send?phone=${cfg.restaurant.whatsappNumber}&text=${encodedMsg}`;

    // Abre o WhatsApp
    window.open(finalUrl, "_blank");
  };

  // Helper para URL de WhatsApp direta
  function buildDirectWhatsAppUrl(messageText) {
    return `https://api.whatsapp.com/send?phone=${cfg.restaurant.whatsappNumber}&text=${encodeURIComponent(messageText)}`;
  }

  // Toast Notifier
  function showToast(message) {
    let toast = document.getElementById("toast-notification");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast-notification";
      toast.className = "toast-notice bg-amber-500 text-black font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm";
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
      </svg>
      <span>${message}</span>
    `;

    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  // Formata Moeda Brasileira R$
  function formatMoney(val) {
    if (typeof val !== "number") return "R$ 0,00";
    return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  // Controle de Abas Entrega / Retirada no Drawer
  window.toggleDeliveryAddressField = () => {
    const isDelivery = document.querySelector('input[name="order_type"]:checked')?.value === "Entrega";
    const addressBox = document.getElementById("delivery-address-box");
    if (addressBox) {
      addressBox.style.display = isDelivery ? "block" : "none";
    }
  };

  // Scroll suave para seções
  window.scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // INICIALIZA TUDO
  initHeaderAndBrand();
  initBlackFriday();
  renderFeaturedDeals();
  renderCategories();
  renderProducts();
  renderDifferentials();
  renderReviews();
  renderFaq();
  updateCartUI();
});
