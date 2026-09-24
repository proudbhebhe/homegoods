import { PRODUCTS, CATEGORIES, whatsappUrl, productMessage } from "./data.js";

function productCard(product) {
  return `
    <article class="product-card reveal is-visible">
      <div class="product-card__media">
        <img src="assets/catalog-${product.page}.jpg" alt="${product.name}" loading="lazy">
        <span class="product-card__badge">${product.category}</span>
      </div>
      <div class="product-card__body">
        <h3>${product.name}</h3>
        <div class="product-card__spec">${product.spec || "24-month payment plan"}</div>
        <div class="product-card__price">
          <div></div>
          <a class="product-card__ask" href="${whatsappUrl(productMessage(product))}" target="_blank" rel="noopener"><img src="assets/whatsapp-logo.png" alt="whatsapp logo"></a>
        </div>
      </div>
    </article>
  `;
}

export function initProducts() {
  const grid = document.querySelector("[data-product-grid]");
  const tabs = document.querySelector("[data-category-tabs]");
  const search = document.querySelector("[data-search]");
  const sort = document.querySelector("[data-sort]");
  const empty = document.querySelector("[data-empty]");
  if (!grid || !tabs || !search || !sort) return;

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "All";
  if (!CATEGORIES.includes(activeCategory)) activeCategory = "All";

  function renderTabs() {
    tabs.innerHTML = CATEGORIES.map(category =>
      `<button type="button" class="${category === activeCategory ? "is-active" : ""}" data-category="${category}">${category}</button>`
    ).join("");

    tabs.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.category;
        renderTabs();
        renderProducts();
      });
    });
  }

  function renderProducts() {
    const query = search.value.trim().toLowerCase();

    let list = PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const haystack = `${product.name} ${product.spec} ${product.category}`.toLowerCase();
      return matchesCategory && haystack.includes(query);
    });

    if (sort.value === "low") list.sort((a, b) => a.monthly - b.monthly);
    if (sort.value === "high") list.sort((a, b) => b.monthly - a.monthly);
    if (sort.value === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    grid.innerHTML = list.map(productCard).join("");
    empty.hidden = list.length > 0;
  }

  search.addEventListener("input", renderProducts);
  sort.addEventListener("change", renderProducts);

  renderTabs();
  renderProducts();
}

export function initBudgetFilter() {
  const input = document.querySelector("[data-budget]");
  const result = document.querySelector("[data-budget-result]");
  if (!input || !result) return;

  const update = () => {
    const budget = Math.max(0, Number(input.value) || 0);
    const count = PRODUCTS.filter(product => product.monthly <= budget).length;
    result.textContent = `${count} catalogue item${count === 1 ? "" : "s"} at or below $${budget.toFixed(2)}/month.`;
  };

  input.addEventListener("input", update);
  update();
}
