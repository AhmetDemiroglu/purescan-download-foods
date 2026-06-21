/* Shared PureScan Foods footer for the legal/support sub-pages.
   Injects the same dark footer as the marketing page, hides any older
   minimal footer, and follows the page language via <html lang>. */
(function () {
  "use strict";

  var APPSTORE = "https://apps.apple.com/app/id6778348937";
  var PLAY = "https://play.google.com/store/apps/details?id=com.purescan.foods";

  var APPLE_SVG =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>';
  var PLAY_SVG =
    '<svg viewBox="0 0 512 512" aria-hidden="true"><path fill="#34a853" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z"/><path fill="#ea4335" d="M104.6 13c-7.4 3.9-12.4 11-12.4 20.3v445.4c0 9.3 5 16.4 12.4 20.3L325.3 277.7 104.6 13z"/><path fill="#fbbc04" d="M453.4 256c0-8.1-4.3-15.6-11.6-19.6l-56.4-32.5-63.3 63.4 63.3 63.4 57-32.9c7-4 10.9-11.2 11.6-19.4z"/><path fill="#4285f4" d="M104.6 499 385.4 337.6l-60.1-60.1L104.6 499z"/></svg>';

  var T = {
    en: { tagline: "Technology for healthy living.", product: "Product", legal: "Legal", company: "Company",
      app: "App", privacy: "Privacy Policy", terms: "Terms of Use", support: "Support", contact: "Contact",
      rights: "All rights reserved.",
      disclaimer: "PureScan Foods does not provide medical advice. AI-powered analyses are for informational purposes only." },
    es: { tagline: "Tecnología para una vida saludable.", product: "Producto", legal: "Legal", company: "Empresa",
      app: "App", privacy: "Política de Privacidad", terms: "Términos de Uso", support: "Soporte", contact: "Contacto",
      rights: "Todos los derechos reservados.",
      disclaimer: "PureScan Foods no ofrece consejo médico. Los análisis con IA son solo informativos." },
    tr: { tagline: "Sağlıklı yaşam için teknoloji.", product: "Ürün", legal: "Yasal", company: "Şirket",
      app: "Uygulama", privacy: "Gizlilik Politikası", terms: "Kullanım Koşulları", support: "Destek", contact: "İletişim",
      rights: "Tüm hakları saklıdır.",
      disclaimer: "PureScan Foods tıbbi tavsiye vermez. Yapay zeka destekli analizler yalnızca bilgilendirme amaçlıdır." },
  };

  var CSS =
    ".psf-footer{background:#120d09;color:rgba(255,255,255,.7);font-family:'Inter',system-ui,sans-serif;padding:64px 24px 28px;line-height:1.6}" +
    ".psf-footer *{box-sizing:border-box}" +
    ".psf-f-inner{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:40px}" +
    ".psf-brand{display:flex;align-items:center;gap:11px;text-decoration:none}" +
    ".psf-brand img{width:38px;height:38px;border-radius:11px}" +
    ".psf-word{font-family:'Sora',sans-serif;font-weight:800;font-size:1.22rem;letter-spacing:-.02em;color:#fff;line-height:1}" +
    ".psf-word span{color:#ff6f00}" +
    ".psf-word em{font-style:normal;font-weight:600;font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-left:7px}" +
    ".psf-tag{margin:16px 0 22px;font-size:.94rem;color:rgba(255,255,255,.55);max-width:280px}" +
    ".psf-badges{display:flex;flex-wrap:wrap;gap:12px}" +
    ".psf-badge{display:inline-flex;align-items:center;gap:10px;padding:8px 14px;border-radius:14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);color:#fff;text-decoration:none;transition:background .2s ease}" +
    ".psf-badge:hover{background:rgba(255,255,255,.12)}" +
    ".psf-badge svg{width:20px;height:20px;flex-shrink:0}" +
    ".psf-badge span{display:flex;flex-direction:column;line-height:1.12;text-align:left}" +
    ".psf-badge small{font-size:.58rem;letter-spacing:.04em;opacity:.8;text-transform:uppercase}" +
    ".psf-badge strong{font-family:'Sora',sans-serif;font-size:.9rem;font-weight:600}" +
    ".psf-col h4{font-family:'Sora',sans-serif;font-weight:600;font-size:.82rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.45);margin:0 0 16px}" +
    ".psf-col a{display:block;font-size:.95rem;color:rgba(255,255,255,.72);padding:6px 0;text-decoration:none;transition:color .2s ease}" +
    ".psf-col a:hover{color:#ff9d4d}" +
    ".psf-bottom{max-width:1180px;margin:48px auto 0;padding-top:24px;border-top:1px solid rgba(255,255,255,.1);display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;align-items:center}" +
    ".psf-disc{font-size:.78rem;color:rgba(255,255,255,.4);max-width:560px;margin:0}" +
    ".psf-copy{font-size:.82rem;color:rgba(255,255,255,.55);margin:0}" +
    ".psf-copy a{color:#ff9d4d;font-weight:500;text-decoration:none}" +
    "@media(max-width:980px){.psf-f-inner{grid-template-columns:1fr 1fr;gap:32px}.psf-brand-block{grid-column:1/-1}}" +
    "@media(max-width:620px){.psf-f-inner{grid-template-columns:1fr;gap:26px}.psf-bottom{flex-direction:column;text-align:center}}";

  function badge(href, top, name, svg) {
    return '<a class="psf-badge" href="' + href + '" target="_blank" rel="noopener">' + svg +
      "<span><small>" + top + "</small><strong>" + name + "</strong></span></a>";
  }

  var footer = document.createElement("footer");
  footer.className = "psf-footer";

  function render(lang) {
    var d = T[lang] || T.tr;
    footer.innerHTML =
      '<div class="psf-f-inner">' +
        '<div class="psf-brand-block">' +
          '<a class="psf-brand" href="/marketing/"><img src="/assets/purescan.png" alt="" />' +
            '<span class="psf-word">Pure<span>Scan</span><em>Foods</em></span></a>' +
          '<p class="psf-tag">' + d.tagline + "</p>" +
          '<div class="psf-badges">' +
            badge(APPSTORE, "Download on the", "App Store", APPLE_SVG) +
            badge(PLAY, "Get it on", "Google Play", PLAY_SVG) +
          "</div>" +
        "</div>" +
        '<nav class="psf-col"><h4>' + d.product + "</h4>" +
          '<a href="/marketing/">' + d.app + "</a>" +
          '<a href="/marketing/#features">' + ({ en: "Features", es: "Funciones", tr: "Özellikler" }[lang] || "Features") + "</a>" +
        "</nav>" +
        '<nav class="psf-col"><h4>' + d.legal + "</h4>" +
          '<a href="/privacy-policy/">' + d.privacy + "</a>" +
          '<a href="/terms/">' + d.terms + "</a>" +
          '<a href="/support/">' + d.support + "</a>" +
        "</nav>" +
        '<nav class="psf-col"><h4>' + d.company + "</h4>" +
          '<a href="https://www.septimuslab.com/" target="_blank" rel="noopener">Septimus Lab</a>' +
          '<a href="mailto:info@septimuslab.com">' + d.contact + "</a>" +
        "</nav>" +
      "</div>" +
      '<div class="psf-bottom">' +
        '<p class="psf-disc">' + d.disclaimer + "</p>" +
        '<p class="psf-copy">© 2026 PureScan Foods · <a href="https://www.septimuslab.com/" target="_blank" rel="noopener">Septimus Lab</a>. ' + d.rights + "</p>" +
      "</div>";
  }

  function curLang() {
    var l = (document.documentElement.lang || "tr").toLowerCase().slice(0, 2);
    return T[l] ? l : "tr";
  }

  function init() {
    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    // hide the older minimal footer if present
    document.querySelectorAll("footer.footer").forEach(function (f) { f.style.display = "none"; });
    document.body.appendChild(footer);
    render(curLang());
    new MutationObserver(function () { render(curLang()); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
