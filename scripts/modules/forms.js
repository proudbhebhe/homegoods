import { whatsappUrl } from "./data.js";

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

export function initForms() {
  const contact = document.querySelector("[data-contact-form]");
  const newsletter = document.querySelector("[data-newsletter]");

  if (contact) {
    contact.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(contact);
      const message = [
        `Hello HomeGoods, my name is ${data.get("name")}.`,
        `Phone: ${data.get("phone")}.`,
        `I'm enquiring about: ${data.get("interest")}.`,
        `Message: ${data.get("message")}`
      ].join(" ");

      showToast("Your WhatsApp enquiry is ready.");
      window.open(whatsappUrl(message), "_blank", "noopener");
      contact.reset();
    });
  }

  if (newsletter) {
    newsletter.addEventListener("submit", event => {
      event.preventDefault();
      showToast("Thanks — you're on the HomeGoods update list.");
      newsletter.reset();
    });
  }
}
