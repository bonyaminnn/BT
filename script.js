// Where contact form submissions are sent (opens the visitor's email client).
// Replace with your real inbox, or swap for a form service like Formspree.
const CONTACT_EMAIL = "hello@example.com";

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Contact form -> pre-filled email
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(e.target);
  const body = [
    `Name: ${d.get("name")}`,
    `Email: ${d.get("email")}`,
    `Company / product: ${d.get("company")}`,
    `Main challenge: ${d.get("challenge")}`,
    `Start: ${d.get("start")}`,
    `Budget: ${d.get("budget")}`,
    "",
    "What we'd like to improve:",
    d.get("improve"),
  ].join("\n");
  const subject = `Project enquiry from ${d.get("name")}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById("confirm").hidden = false;
});
