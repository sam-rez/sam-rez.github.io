// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Active nav highlighting based on scroll position
const links = Array.from(document.querySelectorAll(".nav__link"));
const sections = links
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const setActive = () => {
  const y = window.scrollY + 120; // offset for fixed nav
  let activeId = "home";

  for (const section of sections) {
    if (section.offsetTop <= y) activeId = section.id;
  }

  links.forEach((a) => {
    const id = a.getAttribute("href").slice(1);
    a.classList.toggle("active", id === activeId);
  });
};

window.addEventListener("scroll", setActive, { passive: true });
setActive();

// Code for menu open/close
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after clicking a link (nice UX)
  navMenu.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });

  // Close menu if you tap outside it
  document.addEventListener("click", (e) => {
    const clickedInsideNav = e.target.closest(".nav__inner");
    if (!clickedInsideNav) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}
