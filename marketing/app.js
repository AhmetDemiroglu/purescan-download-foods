/* PureScan Foods · marketing interactions
   i18n + language swap, scroll reveals, parallax, tilt, FAQ, mobile nav. */
(function () {
  "use strict";

  const I18N = window.I18N || {};
  const LANGS = ["en", "es", "tr"];
  const STORE_KEY = "ps_lang";
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ------------------------------------------------ helpers */
  function resolve(path, obj) {
    return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
  }

  function detectLang() {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved && LANGS.includes(saved)) return saved;
    const nav = (navigator.language || "en").toLowerCase();
    if (nav.startsWith("tr")) return "tr";
    if (nav.startsWith("es")) return "es";
    return "en";
  }

  let currentLang = detectLang();
  window.__psLang = currentLang;

  /* ------------------------------------------------ FAQ */
  const CHEVRON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

  function renderFaq(lang) {
    const list = document.getElementById("faqList");
    if (!list) return;
    const items = (I18N[lang] && I18N[lang].faq && I18N[lang].faq.items) || [];
    list.innerHTML = items
      .map(
        (it) =>
          '<div class="faq-item">' +
          '<button class="faq-q" type="button">' +
          "<span>" + it.q + "</span>" +
          '<span class="faq-chevron">' + CHEVRON + "</span>" +
          "</button>" +
          '<div class="faq-a"><div class="faq-a-inner">' + it.a + "</div></div>" +
          "</div>"
      )
      .join("");

    list.querySelectorAll(".faq-q").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const isOpen = item.classList.contains("open");
        list.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      });
    });
  }

  /* ------------------------------------------------ apply translations */
  function applyLang(lang) {
    const dict = I18N[lang];
    if (!dict) return;
    currentLang = lang;
    window.__psLang = lang;
    document.documentElement.lang = lang;

    // text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = resolve(el.getAttribute("data-i18n"), dict);
      if (typeof val === "string") el.innerHTML = val;
    });

    // document meta
    if (dict.meta) {
      if (dict.meta.title) document.title = dict.meta.title;
      const md = document.querySelector('meta[name="description"]');
      if (md && dict.meta.desc) md.setAttribute("content", dict.meta.desc);
    }

    // language-specific screenshots
    document.querySelectorAll("[data-shot]").forEach((img) => {
      const shot = img.getAttribute("data-shot");
      img.src = "../assets/screens/" + lang + "/" + shot + ".webp";
    });

    // FAQ (dynamic)
    renderFaq(lang);

    // active flag
    document.querySelectorAll(".lang-flag").forEach((b) => {
      const on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    localStorage.setItem(STORE_KEY, lang);
    document.dispatchEvent(new CustomEvent("ps:lang", { detail: { lang } }));
  }

  /* ------------------------------------------------ language switcher */
  document.querySelectorAll(".lang-flag").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });

  /* ------------------------------------------------ nav: scroll + mobile */
  const nav = document.getElementById("nav");
  const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const burger = document.getElementById("navBurger");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav-mobile a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("menu-open");
        burger.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ------------------------------------------------ reveal on scroll */
  function setupReveals() {
    const els = document.querySelectorAll(".reveal");
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    // toggle (not one-shot) so content animates in BOTH scroll directions
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle("visible", e.isIntersecting);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------ parallax drift */
  function setupParallax() {
    if (prefersReduced) return;
    const items = Array.from(document.querySelectorAll("[data-parallax]")).map((el) => ({
      el,
      speed: parseFloat(el.dataset.parallax) || 0.06,
    }));
    if (!items.length) return;
    let ticking = false;
    function update() {
      const vh = window.innerHeight;
      items.forEach(({ el, speed }) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > vh + 80) return;
        // bounded: drift based on the element's own position in the viewport,
        // so it never accumulates and can't ride over neighbouring content
        const rel = (rect.top + rect.height / 2 - vh / 2) / vh;
        el.style.translate = "0 " + (rel * -speed * 200).toFixed(1) + "px";
      });
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  /* ------------------------------------------------ tilt (hero fallback) */
  function setupTilt() {
    if (prefersReduced || !finePointer) return;
    const el = document.querySelector(".hero-fallback .device");
    if (!el) return;
    const zone = document.querySelector(".hero-visual");
    const strength = 7;
    zone.addEventListener("mousemove", (e) => {
      const r = zone.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform =
        "perspective(900px) rotateY(" + (x * strength).toFixed(2) + "deg) rotateX(" + (-y * strength).toFixed(2) + "deg)";
    });
    zone.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  }

  /* ------------------------------------------------ init */
  applyLang(currentLang);
  setupReveals();
  setupParallax();
  setupTilt();
})();
