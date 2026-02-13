(function () {
  const bodyPage = document.body.getAttribute("data-page") || "";
  const nav = document.querySelector("[data-site-nav]");
  const toggle = document.querySelector("[data-menu-toggle]");

  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "Close" : "Menu";
    });

    nav.querySelectorAll("a").forEach((link) => {
      const target = link.getAttribute("data-page");
      if (target && target === bodyPage) {
        link.classList.add("is-active");
      }
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      });
    });
  }

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  const yearElement = document.querySelector("[data-current-year]");
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
})();
