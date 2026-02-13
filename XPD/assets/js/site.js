(function () {
  const page = document.body.getAttribute("data-page") || "";
  const nav = document.querySelector("[data-site-nav]");
  const menuToggle = document.querySelector("[data-menu-toggle]");

  if (nav && menuToggle) {
    menuToggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      menuToggle.textContent = open ? "Close" : "Menu";
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      if (link.getAttribute("data-page") === page) {
        link.classList.add("is-active");
      }

      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuToggle.textContent = "Menu";
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealItems.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  document.querySelectorAll("[data-copy-text]").forEach(function (button) {
    button.addEventListener("click", function () {
      const text = button.getAttribute("data-copy-text") || "";
      const status = button.parentElement.querySelector(".copy-status");

      if (!text) {
        return;
      }

      const done = function (message) {
        if (status) {
          status.textContent = message;
          setTimeout(function () {
            status.textContent = "";
          }, 1800);
        }
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () {
            done("Copied");
          },
          function () {
            done("Copy failed");
          }
        );
      } else {
        done("Clipboard not supported");
      }
    });
  });

  const year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
