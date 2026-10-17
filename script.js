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
  initAICrawler();

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
 * AI Crawler Controller
 * Controls the robotic AI agent that crawls along the big typography headline.
 */
function initAICrawler() {
  const crawlerContainer = document.getElementById("ai-crawler");
  const headline = document.getElementById("hero-headline");
  const crawlerBubble = document.getElementById("crawler-speech");
  const crawlerText = document.getElementById("crawler-text");
  const crawlerBot = document.querySelector(".crawler-bot");
  const crawlerIcon = document.getElementById("crawler-icon");
  const crawlerEye = document.querySelector(".crawler-eye");

  if (!crawlerContainer || !headline) return;

  // AI Persona Models
  const aiModels = [
    {
      name: "Cursor AI",
      color: "#ea580c",
      eyeColor: "#ea580c",
      quote: "Cursor AI: Agentic codebase refactor",
      svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
    },
    {
      name: "Claude 3.7",
      color: "#d97706",
      eyeColor: "#f59e0b",
      quote: "Claude 3.7: Architecture & logic verified",
      svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2L14.4 8.6L21.5 9.1L16 13.6L17.8 20.6L12 16.8L6.2 20.6L8 13.6L2.5 9.1L9.6 8.6L12 2Z"/></svg>`
    },
    {
      name: "OpenAI GPT-4o",
      color: "#059669",
      eyeColor: "#10b981",
      quote: "GPT-4o: Synthetic test suites generated",
      svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m10 15 5-3-5-3v6Z"></path></svg>`
    },
    {
      name: "Gemini 2.5",
      color: "#2563eb",
      eyeColor: "#38bdf8",
      quote: "Gemini 2.5: Multimodal layout analysis",
      svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z"/></svg>`
    },
    {
      name: "Copilot",
      color: "#6366f1",
      eyeColor: "#818cf8",
      quote: "Copilot: Real-time inline pair-programming",
      svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18a4 4 0 0 0-8 0"></path><circle cx="9" cy="10" r="1"></circle><circle cx="15" cy="10" r="1"></circle><path d="M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 3.1 1.7 5.8 4.3 7.1"></path></svg>`
    }
  ];

  let currentModelIndex = 0;
  let posX = 10;
  let direction = 1; // 1 = right, -1 = left
  let isPaused = false;
  let isWalking = true;
  let targetX = null;
  const speed = 1.1; // pixels per frame

  function updateModel() {
    const model = aiModels[currentModelIndex];
    if (crawlerIcon) crawlerIcon.innerHTML = model.svg;
    if (crawlerEye) crawlerEye.style.backgroundColor = model.eyeColor;
    if (crawlerText) crawlerText.textContent = model.quote;
  }
  updateModel();

  // Crawler animation loop
  function crawlStep() {
    if (!isPaused) {
      const maxBounds = Math.max(120, headline.offsetWidth - 80);

      if (targetX !== null) {
        // Move towards user click target
        const dx = targetX - posX;
        if (Math.abs(dx) > 3) {
          direction = dx > 0 ? 1 : -1;
          posX += direction * (speed * 2.2); // scuttle faster to user click
          isWalking = true;
        } else {
          targetX = null;
          isWalking = false;
          showTemporaryQuote("🎯 Target inspected! Letterforms calibrated.");
          setTimeout(() => { isWalking = true; }, 1800);
        }
      } else {
        // Natural autonomous patrolling
        posX += direction * speed;

        if (posX >= maxBounds) {
          posX = maxBounds;
          direction = -1;
          pauseAtEdge("Turning around · Patrolling left boundary");
        } else if (posX <= 10) {
          posX = 10;
          direction = 1;
          pauseAtEdge("Turning around · Patrolling right boundary");
        }
      }

      crawlerContainer.style.left = `${posX}px`;

      if (crawlerBot) {
        if (direction === -1) {
          crawlerBot.classList.add("facing-left");
        } else {
          crawlerBot.classList.remove("facing-left");
        }

        if (isWalking) {
          crawlerContainer.classList.add("crawler-walking");
        } else {
          crawlerContainer.classList.remove("crawler-walking");
        }
      }
    }

    requestAnimationFrame(crawlStep);
  }

  function pauseAtEdge(reason) {
    isPaused = true;
    isWalking = false;
    crawlerContainer.classList.remove("crawler-walking");
    if (crawlerText) crawlerText.textContent = reason;

    setTimeout(() => {
      isPaused = false;
      isWalking = true;
      const model = aiModels[currentModelIndex];
      if (crawlerText) crawlerText.textContent = model.quote;
    }, 1400);
  }

  function showTemporaryQuote(msg) {
    if (crawlerText) crawlerText.textContent = msg;
  }

  requestAnimationFrame(crawlStep);

  // Click on crawler to switch AI Model
  crawlerContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    currentModelIndex = (currentModelIndex + 1) % aiModels.length;
    updateModel();

    // Little celebration hop
    crawlerBot.style.transform = `scale(1.25) translateY(-8px) ${direction === -1 ? "scaleX(-1)" : ""}`;
    setTimeout(() => {
      crawlerBot.style.transform = direction === -1 ? "scaleX(-1)" : "";
    }, 250);
  });

  // Hover over crawler to pause
  crawlerContainer.addEventListener("mouseenter", () => {
    isPaused = true;
    crawlerContainer.classList.remove("crawler-walking");
    if (crawlerText) crawlerText.textContent = "AI Agent: Paused for inspection (Click to change AI)";
  });

  crawlerContainer.addEventListener("mouseleave", () => {
    isPaused = false;
    crawlerContainer.classList.add("crawler-walking");
    const model = aiModels[currentModelIndex];
    if (crawlerText) crawlerText.textContent = model.quote;
  });

  // Clicking on the headline sends the crawler to that spot!
  headline.addEventListener("click", (e) => {
    const rect = headline.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    targetX = Math.max(10, Math.min(clickX, headline.offsetWidth - 80));
    showTemporaryQuote("⚡ Scuttling to inspected coordinate...");
  });

  // Periodic insightful thoughts from AI agent
  const devQuotes = [
    "✦ Cursor AI: 3x faster component iterations",
    "✦ Claude 3.7: Systems architecture verified",
    "✦ React 19: Zero hydration mismatch detected",
    "✦ Tailwind CSS: 100% utility efficiency",
    "✦ Web Vitals: 99 Performance Score",
    "✦ Nantha Venkat: Fullstack + AI Craftsmanship",
    "✦ WordPress + ACF: Custom headless engineering"
  ];

  setInterval(() => {
    if (!isPaused && targetX === null) {
      const randomQuote = devQuotes[Math.floor(Math.random() * devQuotes.length)];
      if (crawlerText) {
        crawlerText.style.opacity = "0";
        setTimeout(() => {
          crawlerText.textContent = randomQuote;
          crawlerText.style.opacity = "1";
        }, 200);
      }
    }
  }, 7000);
}

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
