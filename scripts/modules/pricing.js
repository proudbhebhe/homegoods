import { whatsappUrl } from "./data.js";

export function initPricing() {
  const input = document.querySelector("[data-plan-monthly]");
  const output = document.querySelector("[data-plan-total]");
  const monthlyOutput = document.querySelector("[data-plan-monthly-output]");
  const whatsapp = document.querySelector("[data-plan-whatsapp]");
  if (!input || !output || !monthlyOutput || !whatsapp) return;

  const update = () => {
    const monthly = Math.max(0, Number(input.value) || 0);
    output.textContent = `$${(monthly * 24).toFixed(2)}`;
    monthlyOutput.textContent = `$${monthly.toFixed(2)}`;
    whatsapp.href = whatsappUrl(
      `Hello HomeGoods, my monthly budget is around $${monthly.toFixed(2)}. Please show me products available on the 24-month payment plan around this amount.`
    );
  };

  input.addEventListener("input", update);

  document.querySelectorAll("[data-example]").forEach(button => {
    button.addEventListener("click", () => {
      input.value = button.dataset.example;
      update();
    });
  });

  update();
}
