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
