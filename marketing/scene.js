/* PureScan Foods — WebGL hero (three.js)
   Three floating phones that react to pointer + scroll, swap textures per
   language, and gracefully fall back to the CSS phone when unavailable. */

import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const visual = document.querySelector(".hero-visual");
const canvas = document.getElementById("hero-canvas");
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Which screenshot each phone shows (left / center / right)
const PHONES = [
  { shot: "analysis", x: -1.16, y: 0.12, z: -0.5, ry: 0.6, scale: 0.8 },
  { shot: "scan", x: 0.0, y: -0.02, z: 0.4, ry: -0.04, scale: 0.96 },
  { shot: "library", x: 1.16, y: -0.02, z: -0.55, ry: -0.64, scale: 0.8 },
];

function shotURL(lang, shot) {
  return "../assets/screens/" + lang + "/" + shot + ".webp";
}

function boot() {
  if (prefersReduced || !visual || !canvas) return; // keep CSS fallback

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  } catch (e) {
    return; // no WebGL → CSS fallback stays
  }
  if (!renderer.getContext()) return;

  const sizeEl = visual;
  let W = sizeEl.clientWidth || 1;
  let H = sizeEl.clientHeight || 1;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  renderer.setPixelRatio(DPR);
  renderer.setSize(W, H, false);
  renderer.setClearAlpha(0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, W / H, 0.1, 100);
  camera.position.set(0, 0, 6.0);

  // Lighting — restrained so the dark bezels stay dark and premium
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const key = new THREE.DirectionalLight(0xffffff, 0.85);
  key.position.set(2.5, 3.5, 4);
  scene.add(key);
  const warm = new THREE.PointLight(0xff8a33, 0.5, 26);
  warm.position.set(-3.4, -1, 3);
  scene.add(warm);
  const cool = new THREE.PointLight(0xbcd4ff, 0.28, 26);
  cool.position.set(3.2, 2.4, 1.5);
  scene.add(cool);

  const group = new THREE.Group();
  scene.add(group);

  const loader = new THREE.TextureLoader();
  const bodyGeo = new RoundedBoxGeometry(1.0, 2.0, 0.13, 6, 0.13);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x121318, metalness: 0.65, roughness: 0.35 });
  const screenGeo = new THREE.PlaneGeometry(0.9, 1.828); // 840:1706 ratio

  let lang = window.__psLang || "en";
  const phones = [];

  function loadTexture(url) {
    const tex = loader.load(url);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    return tex;
  }

  PHONES.forEach((p) => {
    const phone = new THREE.Group();
    phone.position.set(p.x, p.y, p.z);
    phone.rotation.y = p.ry;
    phone.scale.setScalar(p.scale);

    const body = new THREE.Mesh(bodyGeo, bodyMat);
    phone.add(body);

    const tex = loadTexture(shotURL(lang, p.shot));
    const screenMat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.z = 0.0685;
    phone.add(screen);

    group.add(phone);
    phones.push({ phone, screenMat, base: { ...p } });
  });

  // Swap textures when language changes
  document.addEventListener("ps:lang", (e) => {
    const nl = (e.detail && e.detail.lang) || lang;
    if (nl === lang) return;
    lang = nl;
    phones.forEach((ph) => {
      const old = ph.screenMat.map;
      ph.screenMat.map = loadTexture(shotURL(lang, ph.base.shot));
      ph.screenMat.needsUpdate = true;
      if (old) old.dispose();
    });
  });

  // Pointer parallax
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener(
      "pointermove",
      (e) => {
        pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
        pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
      },
      { passive: true }
    );
  }

  // Responsive layout (fit phones on narrow screens)
  const hero = document.querySelector(".hero");
  function layout() {
    W = sizeEl.clientWidth || 1;
    H = sizeEl.clientHeight || 1;
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    const narrow = W / H < 0.92;
    group.scale.setScalar(narrow ? 0.82 : 1);
    camera.position.z = narrow ? 7.2 : 6.0;
    camera.updateProjectionMatrix();
  }
  layout();
  if ("ResizeObserver" in window) new ResizeObserver(layout).observe(sizeEl);
  else window.addEventListener("resize", layout);

  // Offscreen pause
  let onScreen = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => {
        onScreen = entries[0].isIntersecting;
        if (onScreen && !rafId) loop();
      },
      { threshold: 0.01 }
    ).observe(sizeEl);
  }

  const clock = new THREE.Clock();
  let rafId = 0;

  function scrollProgress() {
    if (!hero) return 0;
    const r = hero.getBoundingClientRect();
    return Math.min(Math.max(-r.top / (r.height * 0.85), 0), 1.3);
  }

  function loop() {
    if (!onScreen) {
      rafId = 0;
      return;
    }
    rafId = requestAnimationFrame(loop);
    const t = clock.getElapsedTime();
    const sp = scrollProgress();

    // pointer easing
    pointer.x += (pointer.tx - pointer.x) * 0.05;
    pointer.y += (pointer.ty - pointer.y) * 0.05;

    group.rotation.y = pointer.x * 0.28;
    group.rotation.x = pointer.y * 0.16 + sp * 0.14;
    group.position.y = sp * 0.55; // slide up on scroll

    phones.forEach((ph, i) => {
      const b = ph.base;
      const phase = i * 1.7;
      ph.phone.position.y = b.y + Math.sin(t * 0.7 + phase) * 0.05;
      ph.phone.rotation.z = Math.sin(t * 0.5 + phase) * 0.012;
      // side phones fan out a touch as you scroll
      const spread = i === 1 ? 0 : (b.x < 0 ? -1 : 1) * sp * 0.45;
      ph.phone.position.x = b.x + spread;
      ph.phone.rotation.y = b.ry + (i === 1 ? 0 : (b.x < 0 ? 1 : -1) * sp * 0.18);
    });

    renderer.render(scene, camera);
  }

  // success → reveal canvas, hide CSS fallback
  visual.classList.add("has-webgl");
  window.__psScene = { phones: phones.length, lang };
  loop();

  window.addEventListener("pagehide", () => {
    if (rafId) cancelAnimationFrame(rafId);
    renderer.dispose();
  });
}

boot();
