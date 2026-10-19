/**
 * ==========================================================================
 * Nantha Venkat Portfolio - Interactive Engine
 * AI Crawler, Floating Badges, Tech Stack Matrix, and UI Interactions
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------------------------------------------------
  // 1. Mobile Menu Toggle
  // ------------------------------------------------------------------------
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuToggle && mobileMenu) {
    const setMenuState = (isOpen) => {
      mobileMenu.classList.toggle("hidden", !isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });
  }

  // ------------------------------------------------------------------------
  // 2. Smooth Scroll to Top
  // ------------------------------------------------------------------------
  document.querySelectorAll("[data-top]").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    })
  );

  // ------------------------------------------------------------------------
  // 3. AI Crawler System on Hero Big Font
  // ------------------------------------------------------------------------
  // initAICrawler();

  // ------------------------------------------------------------------------
  // 4. Ambient Floating Badges Parallax & Interactions
  // ------------------------------------------------------------------------
  initFloatingBadges();

  // ------------------------------------------------------------------------
  // 5. Tech Stack Filter Tabs
  // ------------------------------------------------------------------------
  initTechStackFilters();

  // ------------------------------------------------------------------------
  // 6. Copy Email Helper
  // ------------------------------------------------------------------------
  initEmailCopy();
});

/**
 * Ambient Floating Badges Controller
 * Adds subtle mouse parallax tilt to floating badges in the empty space
 */
function initFloatingBadges() {
  const container = document.querySelector(".floating-badges-area");
  const badges = document.querySelectorAll(".floating-badge");

  if (!container || !badges.length) return;

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    badges.forEach((badge, index) => {
      const depth = (index + 1) * 7;
      const moveX = relX * depth;
      const moveY = relY * depth;
      badge.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  });

  container.addEventListener("mouseleave", () => {
    badges.forEach((badge) => {
      badge.style.transform = "";
    });
  });
}

/**
 * Tech Stack & AI Filter Tabs
 */
function initTechStackFilters() {
  const filterButtons = document.querySelectorAll("[data-stack-filter]");
  const stackCards = document.querySelectorAll("[data-stack-category]");

  if (!filterButtons.length || !stackCards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => {
        b.classList.remove("bg-ink", "text-paper", "border-ink");
        b.classList.add("bg-transparent", "text-ink", "border-line");
      });
      btn.classList.add("bg-ink", "text-paper", "border-ink");
      btn.classList.remove("bg-transparent", "text-ink", "border-line");

      const filter = btn.getAttribute("data-stack-filter");

      stackCards.forEach((card) => {
        const category = card.getAttribute("data-stack-category");
        if (filter === "all" || category === filter || category.includes(filter)) {
          card.classList.remove("hidden");
          card.classList.add("flex");
        } else {
          card.classList.add("hidden");
          card.classList.remove("flex");
        }
      });
    });
  });
}

/**
 * Copy Email Helper with instant UI feedback
 */
function initEmailCopy() {
  const emailButtons = document.querySelectorAll("[data-copy-email]");
  emailButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = btn.getAttribute("data-copy-email") || "vnanthakumar00@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span class="text-orange-600">✓ COPIED TO CLIPBOARD!</span>`;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2200);
      });
    });
  });
}
