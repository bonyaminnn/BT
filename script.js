// Where contact form submissions are sent (opens the visitor's email client).
// Replace with your real inbox, or swap for a form service like Formspree.
const CONTACT_EMAIL = "hello@example.com";

document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

/* ---------- Header border on scroll ---------- */
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Mobile menu ---------- */
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");
const setMenu = (open) => {
  links.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
};
toggle.addEventListener("click", () => setMenu(!links.classList.contains("open")));
links.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

/* ---------- Scroll reveal ---------- */
// Stagger children within a group: 90ms for text, 100ms for cards.
document.querySelectorAll("[data-reveal-group]").forEach((group) => {
  const step = group.matches(".cards, .mosaic, .benefits, .principles, .symptoms, .cases, .people") ? 100 : 90;
  group.querySelectorAll(":scope > [data-reveal], :scope > * > [data-reveal]").forEach((el, i) => {
    el.style.setProperty("--delay", `${i * step}ms`);
  });
});

const revealEls = document.querySelectorAll("[data-reveal], [data-reveal-img]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach((el) => io.observe(el));
}

/* ---------- Contact form ---------- */
const form = document.getElementById("contact-form");

if (form) {
  // Preselect the challenge from links like contact.html?challenge=ux
  const challenge = document.getElementById("challenge");
  const preset = new URLSearchParams(location.search).get("challenge");
  if (preset && challenge.querySelector(`option[value="${CSS.escape(preset)}"]`)) challenge.value = preset;

  const status = document.getElementById("form-status");
  const messages = {
    "f-name": { valueMissing: "Please add your name." },
    "f-email": {
      valueMissing: "Please add your work email so we can reply.",
      typeMismatch: "That email doesn't look quite right — try name@company.com.",
    },
    "f-improve": { valueMissing: "Tell us a little about what you'd like to improve — a sentence is enough." },
  };

  const validate = (field) => {
    const error = form.querySelector(`[data-error-for="${field.id}"]`);
    let msg = "";
    if (field.validity.valueMissing || (field.required && !field.value.trim())) msg = messages[field.id].valueMissing;
    else if (field.validity.typeMismatch) msg = messages[field.id].typeMismatch;
    field.setAttribute("aria-invalid", String(Boolean(msg)));
    if (error) error.textContent = msg;
    return !msg;
  };

  const required = [...form.querySelectorAll("[required]")];
  required.forEach((field) => {
    // Skip blur validation when focus moves to the submit button: the error
    // appearing would shift the button and swallow the click.
    field.addEventListener("blur", (e) => {
      if (field.value && !e.relatedTarget?.matches('[type="submit"]')) validate(field);
    });
    field.addEventListener("input", () => { if (field.getAttribute("aria-invalid") === "true") validate(field); });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const invalid = required.filter((field) => !validate(field));
    if (invalid.length) {
      status.className = "form-status error";
      status.textContent = invalid.length === 1
        ? "One field needs attention before we can send this."
        : `${invalid.length} fields need attention before we can send this.`;
      invalid[0].focus();
      return;
    }

    const d = new FormData(form);
    const body = [
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      `Company / product: ${d.get("company") || "—"}`,
      `Main challenge: ${challenge.selectedOptions[0].text}`,
      `Ideal start: ${d.get("start")}`,
      `Budget: ${d.get("budget") || "Not given"}`,
      "",
      "What we'd like to improve:",
      d.get("improve"),
    ].join("\n");
    const subject = `Project enquiry from ${d.get("name")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    status.className = "form-status success";
    status.innerHTML = `<strong>Almost done — your email app should now be open.</strong> Just press send. If nothing opened, email us at <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.`;
    status.focus();
  });
}
