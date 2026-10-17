document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuToggle && mobileMenu) {
    const setMenuState = (isOpen) => {
      mobileMenu.classList.toggle("hidden", !isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu",
      );
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });
  }

  document.querySelectorAll("[data-top]").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      scrollTo({ top: 0, behavior: "smooth" });
    }),
  );
});
