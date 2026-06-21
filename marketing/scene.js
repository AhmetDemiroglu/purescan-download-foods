/* PureScan Foods, WebGL hero (three.js)
   One phone that rotates in 3D as you scroll and swaps its screen on each
   turn. Falls back to the static CSS phone when WebGL or motion is unavailable. */

import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const visual = document.querySelector(".hero-visual");
const canvas = document.getElementById("hero-canvas");
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Screens cycled on the phone face, in order, as it spins.
const SHOTS = ["scan", "analysis", "library", "profiles", "compatibility", "guru"];
const shotURL = (lang, shot) => "../assets/screens/" + lang + "/" + shot + ".webp";

function boot() {
  if (prefersReduced || !visual || !canvas) return; // keep CSS fallback

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  } catch (e) {
    return;
  }
  if (!renderer.getContext()) return;

  const sizeEl = visual;
  let W = sizeEl.clientWidth || 1;
  let H = sizeEl.clientHeight || 1;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(W, H, false);
  renderer.setClearAlpha(0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, W / H, 0.1, 100);
  camera.position.set(0, 0, 4.8);

  // Lighting, restrained so the dark bezel reads premium
  scene.add(new THREE.AmbientLight(0xffffff, 0.62));
  const key = new THREE.DirectionalLight(0xffffff, 0.95);
  key.position.set(2.5, 3.5, 4);
  scene.add(key);
  const warm = new THREE.PointLight(0xff8a33, 0.55, 26);
  warm.position.set(-3.4, -1, 3);
  scene.add(warm);
  const cool = new THREE.PointLight(0xbcd4ff, 0.3, 26);
  cool.position.set(3.2, 2.4, 1.5);
  scene.add(cool);

  let lang = window.__psLang || "en";

  // Build the phone
  const phone = new THREE.Group();
  phone.scale.setScalar(1.12);
  scene.add(phone);

  const bodyGeo = new RoundedBoxGeometry(1.0, 2.0, 0.13, 6, 0.13);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x121318, metalness: 0.65, roughness: 0.34 });
  phone.add(new THREE.Mesh(bodyGeo, bodyMat));

  const loader = new THREE.TextureLoader();
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  function loadTextures(lng) {
    return SHOTS.map((s) => {
      const t = loader.load(shotURL(lng, s));
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = Math.min(8, maxAniso);
      return t;
    });
  }
  let textures = loadTextures(lang);

  const screenMat = new THREE.MeshBasicMaterial({ map: textures[0], toneMapped: false });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.828), screenMat);
  screen.position.z = 0.0685;
  phone.add(screen);

  // texture cycling state
  let faceIndex = 0;          // currently shown screen
  let nextIndex = 1;          // next to reveal
  let prevFacing = 1;         // sign of cos(rotation.y)

  function setLang(nl) {
    if (nl === lang) return;
    lang = nl;
    const old = textures;
    textures = loadTextures(lang);
    screenMat.map = textures[faceIndex % SHOTS.length];
    screenMat.needsUpdate = true;
    old.forEach((t) => t.dispose());
  }
  document.addEventListener("ps:lang", (e) => setLang((e.detail && e.detail.lang) || lang));

  // Pointer parallax (camera, so it never fights the spin)
  const ptr = { x: 0, y: 0, tx: 0, ty: 0 };
  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", (e) => {
      ptr.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ptr.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  const hero = document.querySelector(".hero");
  function scrollProgress() {
    if (!hero) return 0;
    const r = hero.getBoundingClientRect();
    return Math.min(Math.max(-r.top / (r.height * 0.85), 0), 1.4);
  }

  let isNarrow = false;
  function layout() {
    W = sizeEl.clientWidth || 1;
    H = sizeEl.clientHeight || 1;
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    isNarrow = W / H < 0.9;
    phone.scale.setScalar(isNarrow ? 0.96 : 1.12);
    camera.position.z = isNarrow ? 5.4 : 4.8;
    camera.updateProjectionMatrix();
  }
  layout();
  if ("ResizeObserver" in window) new ResizeObserver(layout).observe(sizeEl);
  else window.addEventListener("resize", layout);

  let onScreen = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((ents) => {
      onScreen = ents[0].isIntersecting;
      if (onScreen && !rafId) loop();
    }, { threshold: 0.01 }).observe(sizeEl);
  }

  const clock = new THREE.Clock();
  let rafId = 0;

  function loop() {
    if (!onScreen) { rafId = 0; return; }
    rafId = requestAnimationFrame(loop);
    const t = clock.getElapsedTime();
    const sp = scrollProgress();

    // always turning gently in 3D (screen stays readable); scroll adds a big spin.
    // On mobile keep the spin small so the dark back never faces the user.
    const spin = isNarrow ? Math.PI * 0.08 : Math.PI * 2.2;
    phone.rotation.y = -0.15 + Math.sin(t * 0.4) * 0.55 + sp * spin;
    phone.rotation.x = -0.04 + ptr.y * 0.1 + Math.sin(t * 0.55) * 0.05 + sp * 0.12;
    phone.rotation.z = Math.sin(t * 0.45) * 0.02;
    phone.position.y = Math.sin(t * 0.8) * 0.05 + sp * 0.5;

    // swap the screen while the face is turned away (cos<0 = hidden)
    const c = Math.cos(phone.rotation.y);
    const facing = c >= 0 ? 1 : -1;
    if (facing !== prevFacing) {
      if (facing < 0) { // just turned away, reveal a new screen for when it comes back
        faceIndex = nextIndex % SHOTS.length;
        nextIndex++;
        screenMat.map = textures[faceIndex];
        screenMat.needsUpdate = true;
      }
      prevFacing = facing;
    }

    // pointer parallax via camera
    ptr.x += (ptr.tx - ptr.x) * 0.05;
    ptr.y += (ptr.ty - ptr.y) * 0.05;
    camera.position.x += (ptr.x * 0.32 - camera.position.x) * 0.05;
    camera.position.y += (-ptr.y * 0.22 - camera.position.y) * 0.05;
    camera.lookAt(0, phone.position.y * 0.35, 0);

    renderer.render(scene, camera);
  }

  visual.classList.add("has-webgl");
  window.__psScene = { phones: 1, lang };
  loop();

  window.addEventListener("pagehide", () => {
    if (rafId) cancelAnimationFrame(rafId);
    renderer.dispose();
  });
}

boot();
