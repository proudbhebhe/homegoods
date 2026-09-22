import { initNav } from "./modules/nav.js";
import { initAnimations } from "./modules/animations.js";
import { initProducts, initBudgetFilter } from "./modules/products.js";
import { initPricing } from "./modules/pricing.js";
import { initForms } from "./modules/forms.js";

/*
  One shared ES-module entry point is loaded by every page.
  Each feature module safely exits when its page-specific elements are absent.
*/
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initAnimations();
  initProducts();
  initBudgetFilter();
  initPricing();
  initForms();
});
