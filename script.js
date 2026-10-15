// Where contact form submissions are sent (opens the visitor's email client).
// Replace with your real inbox, or swap for a form service like Formspree.
const CONTACT_EMAIL = "hello@example.com";

document.getElementById("year").textContent = new Date().getFullYear();

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
  const step = group.matches(".cards, .mosaic, .benefits") ? 100 : 90;
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

/* ---------- Process tabs ---------- */
const tabs = [...document.querySelectorAll('[role="tab"]')];
const selectTab = (tab) => {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
  });
};
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
    selectTab(next);
    next.focus();
  });
});

/* ---------- Service links preselect the challenge ---------- */
const challenge = document.getElementById("challenge");
document.querySelectorAll("[data-challenge]").forEach((a) => {
  a.addEventListener("click", () => { challenge.value = a.dataset.challenge; });
});

/* ---------- Contact form -> validated, pre-filled email ---------- */
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstInvalid = null;
  form.querySelectorAll("[required]").forEach((field) => {
    const ok = field.checkValidity();
    field.setAttribute("aria-invalid", String(!ok));
    if (!ok && !firstInvalid) firstInvalid = field;
  });
  if (firstInvalid) {
    status.className = "form-status error";
    status.textContent = "Please add your name, a valid work email, and what you'd like to improve.";
    firstInvalid.focus();
    return;
  }

  const d = new FormData(form);
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

  status.className = "form-status success";
  status.textContent = "Thanks for sharing the details. We'll review your message and get back to you if there's a good fit.";
});

form.addEventListener("input", (e) => {
  if (e.target.getAttribute("aria-invalid") === "true" && e.target.checkValidity()) {
    e.target.setAttribute("aria-invalid", "false");
  }
});
