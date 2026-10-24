import { PRODUCTS, whatsappUrl, productMessage } from "./data.js";

function bestSellerCard(product) {
  return `
    <article class="product-card">
      <div class="product-card__media">
        <img src="assets/catalog-${product.page}.jpg"
             alt="${product.name}"
             loading="lazy">

        <span class="product-card__badge">Best Seller</span>
      </div>

      <div class="product-card__body">
        <p class="product-card__category">${product.category}</p>

        <h3>${product.name}</h3>

        <div class="product-card__spec">
          ${product.spec || "24-month payment plan"}
        </div>

        <div class="product-card__price">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div class="phone"><a href="https://www.facebook.com/61589948272688/${productMessage(product)}" target="_blank" rel="noopener"><img src="assets/facebook_icon.svg" alt="phone logo"></a></div>
          
          <a class="product-card__ask" href="${whatsappUrl(productMessage(product))}" target="_blank" rel="noopener"><img src="assets/whatsapp-logo.png" alt="whatsapp logo"></a>
        </div>
      </div>
    </article>
  `;
};

export function initBestSellers() {
  const track = document.querySelector("#data-best-sellers");

  if (!track) console.log("not functioning");

  const bestSellers = PRODUCTS
    .filter(product => product.bestSeller);
    

  const cards = bestSellers
    .map(bestSellerCard)
    .join("");

  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  track.innerHTML = isTouchDevice ? cards : cards + cards;
};