// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// Close menu when a nav link is clicked
navLinks.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
  }
});


// ===== HIGHLIGHT ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
  let currentSection = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  links.forEach(function (link) {
    link.style.color = "";
    if (link.getAttribute("href") === "#" + currentSection) {
      link.style.color = "#00d4aa";
    }
  });
});


// ===== FADE IN SECTIONS ON SCROLL =====
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach(function (section) {
  section.classList.add("hidden");
  observer.observe(section);
});


// ===== ADD FADE ANIMATION TO CSS DYNAMICALLY =====
const style = document.createElement("style");
style.textContent = `
  section.hidden {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  section.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
