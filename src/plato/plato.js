// Platós 3D ORIGINALES inspirados en las fotos de las etapas de «La ruleta de la suerte» (y una retro de «La ruleta
// de la fortuna»). Elementos comunes: ruleta de 24 gajos en su consola, 3 concursantes con marcador azul/rojo/amarillo,
// panel de 52 casillas con franja de pista a la izquierda y la copresentadora, coche en peana, grada con público y banda.
import * as THREE from 'three';
import { mat, glow, figure } from '../lib/helpers.js';
import { crearRueda, RADIO } from './rueda.js';
import { dibujarPanel, ESTILOS, panelTexto } from '../juego/panel.js';
import { drawLogo } from './logo.js';

export const COLORES_CONC = ['#1f6bff', '#ff2a2a', '#ffd21a'];
export const ESCENARIOS = {
  fortuna: { panel: 'fortuna', fondo: 0x120604, niebla: [0x120604, 26, 70], expo: 0.95 },
  a2006: { panel: 'a2006', fondo: 0x0a2a8a, niebla: [0x0a2a8a, 30, 80], expo: 1.0 },
  piramides: { panel: 'piramides', fondo: 0x06123a, niebla: [0x06123a, 30, 80], expo: 1.0, suelo: 'oro' },
  pirazul: { panel: 'piramides', fondo: 0x06123a, niebla: [0x06123a, 30, 80], expo: 1.0, suelo: 'azul' },
  verano: { panel: 'verano', fondo: 0x101830, niebla: [0x101830, 30, 85], expo: 1.05 },
  neon: { panel: 'neon', fondo: 0x05020e, niebla: [0x05020e, 28, 75], expo: 0.95 },
};
function canvasTex(w, h, draw, rep = null) { const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'); draw(g, w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...rep); } return t; }
const rnd0 = s => () => ((s = (s * 9301 + 49297) % 233280) / 233280);
function emis(map, intens = 1, extra = {}) { return new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xffffff, emissiveMap: map, emissiveIntensity: intens, roughness: 0.8, ...extra }); }

// ---------- texturas por etapa ----------
function texSuelo(id) {
  return canvasTex(2048, 2048, (g, w, h) => {
    const rnd = rnd0(11); const cx = w / 2, cy = h / 2;
    if (id === 'fortuna') {
      const gr = g.createRadialGradient(cx, cy, 40, cx, cy, w / 2); gr.addColorStop(0, '#6a1a14'); gr.addColorStop(1, '#2a0806'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
      g.save(); g.translate(cx, cy); for (let i = 0; i < 32; i++) { g.rotate(Math.PI / 16); g.fillStyle = i % 2 ? 'rgba(232,198,106,.16)' : 'rgba(0,0,0,.1)'; g.beginPath(); g.moveTo(0, 0); g.lineTo(w, -70); g.lineTo(w, 70); g.fill(); } g.restore();
      g.strokeStyle = '#e8c66a'; g.lineWidth = 14; [380, 620, 900].forEach(r => { g.beginPath(); g.arc(cx, cy, r, 0, 7); g.stroke(); });
      for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2; star(g, cx + Math.cos(a) * 760, cy + Math.sin(a) * 760, 34, '#ffe9a0'); }
    } else if (id === 'a2006') {
      g.fillStyle = '#04103a'; g.fillRect(0, 0, w, h);
      for (let k = 0; k < 9; k++) { const x = rnd() * w, y = rnd() * h, R = 160 + rnd() * 160; for (let j = 0; j < 22; j++) { g.strokeStyle = j % 2 ? 'rgba(60,120,255,.85)' : 'rgba(120,200,255,.55)'; g.lineWidth = 9; g.beginPath(); g.arc(x, y, R * (j / 22), j * 0.5, j * 0.5 + 3.4); g.stroke(); } }
      g.strokeStyle = 'rgba(255,255,255,.75)'; g.lineWidth = 6; for (let i = 0; i < 6; i++) { g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(i + 0.3) * w, cy + Math.sin(i + 0.3) * w); g.stroke(); }
    } else if (id === 'neon') {
      g.fillStyle = '#05030a'; g.fillRect(0, 0, w, h); g.globalAlpha = 0.5; g.fillStyle = '#1a0a30'; for (let i = 0; i < 400; i++) g.fillRect(rnd() * w, rnd() * h, 3, 3); g.globalAlpha = 1;
      const cs = ['#ffd21a', '#1fa3ff', '#ff7a1a', '#ff2a4a']; for (let i = 0; i < 9; i++) { g.strokeStyle = cs[i % 4]; g.lineWidth = 16; g.shadowColor = cs[i % 4]; g.shadowBlur = 30; g.beginPath(); g.arc(cx + 160, cy - 60, 380 + i * 70, 0.2, 2.9); g.stroke(); } g.shadowBlur = 0;
    } else {
      const oro = id === 'piramides', ver = id === 'verano';
      const gr = g.createRadialGradient(cx, cy, 30, cx, cy, w / 2); gr.addColorStop(0, ver ? '#f4f6ff' : oro ? '#f2c25a' : '#2a7aff'); gr.addColorStop(1, ver ? '#c8d0e8' : oro ? '#b8801a' : '#0a2aa8'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
      // red de líneas blancas (polígonos)
      const pts = []; for (let i = 0; i < 70; i++) pts.push([rnd() * w, rnd() * h]);
      g.strokeStyle = ver ? 'rgba(40,40,60,.55)' : 'rgba(255,255,255,.9)'; g.lineWidth = 16;
      pts.forEach((p, i) => { const d = pts.map((q, j) => [Math.hypot(p[0] - q[0], p[1] - q[1]), j]).sort((a, b) => a[0] - b[0]).slice(1, 4); d.forEach(([, j]) => { if (j > i) { g.beginPath(); g.moveTo(...p); g.lineTo(...pts[j]); g.stroke(); } }); });
      g.globalAlpha = 0.25; g.fillStyle = '#ffffff'; for (let i = 0; i < 30; i++) { g.save(); g.translate(rnd() * w, rnd() * h); g.rotate(rnd() * 3); g.fillRect(-200, -8, 400, 16); g.restore(); } g.globalAlpha = 1;
    }
  });
}
function star(g, x, y, r, col) { g.fillStyle = col; g.beginPath(); for (let i = 0; i < 10; i++) { const a = i * Math.PI / 5 - Math.PI / 2, rr = i % 2 ? r * 0.45 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.fill(); }
function texPiramides(tinte) {
  return canvasTex(512, 512, (g, w) => {
    const n = 8, s = w / n;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const x = i * s, y = j * s, c = [x + s / 2, y + s / 2]; const tin = tinte[(i * 3 + j * 5) % tinte.length];
      [[[x, y], [x + s, y], 1], [[x + s, y], [x + s, y + s], 0.75], [[x + s, y + s], [x, y + s], 0.45], [[x, y + s], [x, y], 0.65]].forEach(([a, b, l]) => {
        g.fillStyle = shade(tin, l); g.beginPath(); g.moveTo(...a); g.lineTo(...b); g.lineTo(...c); g.closePath(); g.fill(); });
    }
  }, [10, 2]);
}
function shade(hex, l) { const c = new THREE.Color(hex); c.multiplyScalar(l); return '#' + c.getHexString(); }
function texLED(seed, cols) {
  return canvasTex(1024, 128, (g, w, h) => { const rnd = rnd0(seed); g.fillStyle = '#05060e'; g.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 16) { g.fillStyle = cols[Math.floor(rnd() * cols.length)]; g.globalAlpha = 0.5 + rnd() * 0.5; g.fillRect(x + 2, 6, 12, h - 12); } g.globalAlpha = 1; }, [4, 1]);
}
function texRotulo(txt, { color = '#b04dff', fondo = '#f4f6ff', alto = 128, ancho = 2048, glowc = null, espejo = false } = {}) {
  const t = canvasTex(ancho, alto, (g, w, h) => { g.fillStyle = fondo; g.fillRect(0, 0, w, h); g.font = `900 ${h * 0.62}px "Arial Black", Arial`; g.textAlign = 'center'; g.textBaseline = 'middle'; if (glowc) { g.shadowColor = glowc; g.shadowBlur = h * 0.25; } g.fillStyle = color;
    const m = g.measureText(txt).width, rep = Math.max(1, Math.floor(w / (m + h)));
    for (let i = 0; i < rep; i++) g.fillText(txt, (i + 0.5) * w / rep, h / 2); });
  if (espejo) { t.wrapS = THREE.RepeatWrapping; t.repeat.x = -1; } return t;
}
/** Arco de neón (toro parcial) centrado detrás del plató */
function arcoNeon(r, y, arco, color, tubo = 0.06) { const t = new THREE.Mesh(new THREE.TorusGeometry(r, tubo, 6, 120, arco), glow(color, 2.5)); t.rotation.set(-Math.PI / 2, 0, Math.PI / 2 - arco / 2); t.position.y = y; return t; }
/** thetaStart de un cilindro para que el arco quede centrado detrás (−z) */
const atras = arco => Math.PI - arco / 2;
function texCortina() { return canvasTex(512, 512, (g, w, h) => { for (let x = 0; x < w; x++) { const v = 0.55 + 0.45 * Math.sin(x / w * Math.PI * 24); g.fillStyle = `rgb(${120 * v + 30},${10 * v},${14 * v})`; g.fillRect(x, 0, 1, h); } }, [8, 1]); }

// ---------- piezas ----------
function coche(color = 0xe8e8f0) {
  const g = new THREE.Group(); const pint = new THREE.MeshPhysicalMaterial({ color, metalness: 0.6, roughness: 0.25, clearcoat: 1 });
  const cuerpo = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.6, 1.6), pint); cuerpo.position.y = 0.55; g.add(cuerpo);
  const morro = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.35, 1.58), pint); morro.position.set(1.55, 0.5, 0); g.add(morro);
  const cabina = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.55, 1.45), new THREE.MeshPhysicalMaterial({ color: 0x0a0e1a, metalness: 0.3, roughness: 0.05 })); cabina.position.set(-0.2, 1.1, 0); g.add(cabina);
  const techo = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.06, 1.42), pint); techo.position.set(-0.25, 1.4, 0); g.add(techo);
  const rueda = new THREE.CylinderGeometry(0.34, 0.34, 0.26, 20); const mr = mat(0x111111), ml = mat(0xcccccc, { metalness: 0.9 });
  [[1.15, 0.8], [1.15, -0.8], [-1.15, 0.8], [-1.15, -0.8]].forEach(([x, z]) => { const w = new THREE.Mesh(rueda, mr); w.rotation.x = Math.PI / 2; w.position.set(x, 0.34, z); g.add(w); const l = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.28, 12), ml); l.rotation.x = Math.PI / 2; l.position.set(x, 0.34, z); g.add(l); });
  [[1.98, 0.55], [1.98, -0.55]].forEach(([x, z]) => { const f = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.12, 0.35), glow(0xffffff, 3)); f.position.set(x, 0.62, z); g.add(f); });
  g.traverse(o => { if (o.isMesh) o.castShadow = true; }); return g;
}
function mujer(body = 0xd02a6a, hair = 0x3a2010) {
  const f = figure({ body, legs: 0xd9b08c, skin: 0xd9b08c, hair });
  const falda = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.55, 16, 1, true), mat(body, { roughness: 0.5, side: THREE.DoubleSide })); falda.position.y = 0.72; f.add(falda);
  const pelo = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.25, 4, 8), mat(hair, { roughness: 0.9 })); pelo.position.set(0, 1.4, -0.07); f.add(pelo);
  return f;
}
function publico(n, ancho, filas, z0, col) {
  const g = new THREE.Group(); g.userData.publico = true;
  const cuerpos = new THREE.InstancedMesh(new THREE.CapsuleGeometry(0.2, 0.35, 3, 8), new THREE.MeshStandardMaterial({ roughness: 0.8 }), n);
  const cabezas = new THREE.InstancedMesh(new THREE.SphereGeometry(0.13, 10, 8), mat(0xd9b08c), n);
  const m = new THREE.Matrix4(), c = new THREE.Color(); const rnd = rnd0(5); const pal = col || [0xff4a4a, 0x3a7aff, 0xffd21a, 0x2ab04a, 0xffffff, 0xff7ac0, 0x222222, 0x8a4aff];
  const base = []; for (let i = 0; i < n; i++) { const f = i % filas, x = (rnd() - 0.5) * ancho, y = 0.75 + f * 0.6, z = z0 - f * 0.9; base.push([x, y, z]); m.makeTranslation(x, y, z); cuerpos.setMatrixAt(i, m); m.makeTranslation(x, y + 0.42, z); cabezas.setMatrixAt(i, m); cuerpos.setColorAt(i, c.set(pal[i % pal.length])); }
  g.add(cuerpos, cabezas); g.userData.anim = { cuerpos, cabezas, base, salto: 0 };
  return g;
}
function escaleras(n, ancho, colLuz, x, z, rot) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rot;
  for (let i = 0; i < n; i++) { const s = new THREE.Mesh(new THREE.BoxGeometry(ancho, 0.3, 0.6), mat(0xf0f0f0, { roughness: 0.4 })); s.position.set(0, 0.15 + i * 0.3, -i * 0.6); g.add(s); const l = new THREE.Mesh(new THREE.BoxGeometry(ancho, 0.05, 0.03), glow(colLuz, 2.5)); l.position.set(0, 0.29 + i * 0.3, -i * 0.6 + 0.31); l.userData.tinte = 'b'; g.add(l); }
  return g;
}
function palmera(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const tronco = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.2, 3.4, 8), mat(0x8a5a2a)); tronco.position.y = 1.7; tronco.rotation.z = 0.12; g.add(tronco);
  for (let i = 0; i < 7; i++) { const h = new THREE.Mesh(new THREE.ConeGeometry(0.25, 1.8, 4), mat(0x2aa04a)); h.position.set(0.2, 3.4, 0); h.rotation.set(Math.cos(i) * 0.4, i * 0.9, 1.9); h.translateY(0.8); g.add(h); }
  return g;
}

export function construirPlato(scene, ctx, renderer) {
  const root = new THREE.Group(); scene.add(root);
  scene.background = new THREE.Color(0x06123a); scene.fog = new THREE.Fog(0x06123a, 30, 80);
  // ---------- luces ----------
  const hemi = new THREE.HemisphereLight(0xbfd0ff, 0x202040, 1.0); root.add(hemi);
  const key = new THREE.DirectionalLight(0xffffff, 1.5); key.position.set(4, 16, 10); key.castShadow = true; key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -14, right: 14, top: 14, bottom: -14, near: 1, far: 40 }); root.add(key);
  const fillA = new THREE.PointLight(0xff4fa8, 25, 30, 1.6); fillA.position.set(-8, 6, 2); root.add(fillA);
  const fillB = new THREE.PointLight(0x3a8bff, 25, 30, 1.6); fillB.position.set(8, 6, 2); root.add(fillB);
  const ruedaLuz = new THREE.PointLight(0xffffff, 12, 9, 1.5); ruedaLuz.position.set(0, 4, 0); root.add(ruedaLuz);

  // ---------- suelo ----------
  const sueloMat = new THREE.MeshStandardMaterial({ roughness: 0.15, metalness: 0.35 });
  const suelo = new THREE.Mesh(new THREE.CircleGeometry(19, 72), sueloMat); suelo.rotation.x = -Math.PI / 2; suelo.receiveShadow = true; root.add(suelo);
  const exterior = new THREE.Mesh(new THREE.RingGeometry(19, 60, 48), mat(0x05060e, { roughness: 0.9 })); exterior.rotation.x = -Math.PI / 2; exterior.position.y = -0.01; root.add(exterior);

  // ---------- consola y ruleta ----------
  const ANG = [-38, 0, 38].map(a => a * Math.PI / 180); // desde -z
  const posC = ANG.map(a => new THREE.Vector3(Math.sin(a) * 3.65, 0, -Math.cos(a) * 3.65));
  const consolaMat = mat(0xf4f6fb, { roughness: 0.3, metalness: 0.2 });
  const consola = new THREE.Mesh(new THREE.CylinderGeometry(3.05, 3.15, 1.0, 72), consolaMat); consola.position.y = 0.5; consola.receiveShadow = consola.castShadow = true; root.add(consola);
  const aroConsola = new THREE.Mesh(new THREE.TorusGeometry(3.12, 0.05, 8, 120), glow(0x3ad0ff, 2.5)); aroConsola.rotation.x = Math.PI / 2; aroConsola.position.y = 0.72; aroConsola.userData.tinte = 'a'; root.add(aroConsola);
  const aroConsola2 = aroConsola.clone(); aroConsola2.material = glow(0xff4fa8, 2.5); aroConsola2.material.userData = {}; aroConsola2.userData.tinte = 'b'; aroConsola2.position.y = 0.3; root.add(aroConsola2);
  const tapa = new THREE.Mesh(new THREE.RingGeometry(RADIO + 0.02, 3.05, 72), mat(0xdfe6f2, { metalness: 0.5, roughness: 0.25 })); tapa.rotation.x = -Math.PI / 2; tapa.position.y = 1.005; root.add(tapa);
  const phis = posC.map(p => Math.atan2(-p.z, p.x));
  let clicCb = () => {};
  const rueda = crearRueda(root, phis, { onClic: v => clicCb(v) });
  // barandilla (platós modernos)
  const baranda = new THREE.Group(); root.add(baranda);
  { const mb = mat(0xe8eef8, { metalness: 0.8, roughness: 0.2 }); for (let i = 0; i < 40; i++) { const a = i / 40 * Math.PI * 2; if (phis.some(p => Math.abs(Math.atan2(Math.sin(a - p), Math.cos(a - p))) < 0.32)) continue; const p = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.45, 6), mb); p.position.set(Math.cos(a) * 2.85, 1.22, -Math.sin(a) * 2.85); baranda.add(p); }
    const top = new THREE.Mesh(new THREE.TorusGeometry(2.85, 0.025, 6, 120), mb); top.rotation.x = Math.PI / 2; top.position.y = 1.45; baranda.add(top); }
  // marcadores (atriles) y concursantes
  const atriles = [], figs = [];
  const CUERPOS = [0x2a5aff, 0xe03a3a, 0xf0c020];
  posC.forEach((p, i) => {
    const a = new THREE.Group(); const r = 2.98; a.position.set(p.x / 3.65 * r, 1.0, p.z / 3.65 * r); a.rotation.y = Math.atan2(-p.x, -p.z); root.add(a);
    const c = document.createElement('canvas'); c.width = 512; c.height = 192; const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const caja = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.5, 0.12), mat(0x1a1d2a, { metalness: 0.5 })); caja.position.y = 0.32; caja.rotation.x = -0.25; a.add(caja);
    const pant = new THREE.Mesh(new THREE.PlaneGeometry(1.18, 0.44), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false })); pant.position.set(0, 0.33, 0.065); pant.rotation.x = -0.25; a.add(pant);
    const f = figure({ body: CUERPOS[i], legs: 0x22223a, skin: [0xd9b08c, 0xc8956a, 0xe8c4a0][i], hair: [0x2a1a10, 0x6a3a1a, 0x111111][i] }); f.position.copy(p); f.rotation.y = Math.atan2(-p.x, -p.z); root.add(f);
    atriles.push({ g: a, c, tex, datos: { nombre: ['AZUL', 'ROJO', 'AMARILLO'][i], dinero: 0, activo: false }, color: COLORES_CONC[i] }); figs.push(f);
  });
  function setMarcador(i, d) { const A = atriles[i]; Object.assign(A.datos, d); const g = A.c.getContext('2d'), w = 512, h = 192; const D = A.datos;
    g.fillStyle = '#0a0e1e'; g.fillRect(0, 0, w, h); g.fillStyle = A.color; g.fillRect(0, 0, w, 64); if (D.activo) { g.strokeStyle = '#ffffff'; g.lineWidth = 12; g.strokeRect(6, 6, w - 12, h - 12); }
    g.fillStyle = i === 2 ? '#111' : '#fff'; g.font = '900 46px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(String(D.nombre).toUpperCase().slice(0, 16), w / 2, 34);
    g.fillStyle = '#ffe066'; g.font = '900 84px "Arial Black", Arial'; g.fillText(D.texto ?? (D.dinero + ' €'), w / 2, 130); A.tex.needsUpdate = true; }
  atriles.forEach((_, i) => setMarcador(i, {}));
  const mamparas = new THREE.Group(); root.add(mamparas); mamparas.visible = false;
  [-19, 19].forEach(a => { const r = a * Math.PI / 180; const m = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 2), new THREE.MeshPhysicalMaterial({ color: 0xcfe8ff, transmission: 0.9, transparent: true, opacity: 0.35, roughness: 0.05, side: THREE.DoubleSide })); m.position.set(Math.sin(r) * 3.7, 1.0, -Math.cos(r) * 3.7); m.rotation.y = -r + Math.PI / 2; mamparas.add(m); });

  // ---------- presentador y copresentadora ----------
  const presentador = figure({ body: 0x1a1d2a, legs: 0x15151f, skin: 0xd9b08c, hair: 0x2a1a10 }); presentador.position.set(-3.95, 0, 0.35); presentador.rotation.y = 1.15; root.add(presentador);
  const corbata = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.3, 0.02), mat(0xc02a2a)); corbata.position.set(0, 1.15, 0.15); presentador.add(corbata);
  const tarjetas = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.2, 0.01), mat(0xffffff)); tarjetas.position.set(0.3, 0.9, 0.2); presentador.add(tarjetas);
  // panel
  const PW = 8.4, PH = 4.2; const panelG = new THREE.Group(); panelG.position.set(-7.6, 0, -6.4); panelG.rotation.y = 0.62; root.add(panelG);
  const panCanvas = document.createElement('canvas'); panCanvas.width = 1680; panCanvas.height = 840; const panTex = new THREE.CanvasTexture(panCanvas); panTex.colorSpace = THREE.SRGBColorSpace; panTex.anisotropy = 8;
  const marcoPanel = new THREE.Mesh(new THREE.BoxGeometry(PW + 0.4, PH + 0.4, 0.4), mat(0x1a1d2a, { metalness: 0.6 })); marcoPanel.position.y = 1.0 + PH / 2; panelG.add(marcoPanel);
  const panMesh = new THREE.Mesh(new THREE.PlaneGeometry(PW, PH), new THREE.MeshBasicMaterial({ map: panTex, toneMapped: false })); panMesh.position.set(0, 1.0 + PH / 2, 0.21); panelG.add(panMesh);
  const tarima = new THREE.Mesh(new THREE.BoxGeometry(PW + 1.6, 0.25, 2.2), mat(0xe8eef8, { roughness: 0.3 })); tarima.position.set(0, 0.12, 0.8); panelG.add(tarima);
  const tiraTarima = new THREE.Mesh(new THREE.BoxGeometry(PW + 1.6, 0.05, 0.02), glow(0x3ad0ff, 2.5)); tiraTarima.position.set(0, 0.2, 1.91); tiraTarima.userData.tinte = 'a'; panelG.add(tiraTarima);
  const copre = mujer(0xd02a6a); copre.position.set(0, 0.25, 0.95); panelG.add(copre);
  const copreDest = { x: 2.5 };
  // coche en peana
  const peana = new THREE.Group(); peana.position.set(7.2, 0, -5.6); root.add(peana);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.3, 0.35, 48), mat(0xf0f2f8, { metalness: 0.4, roughness: 0.25 })); base.position.y = 0.17; peana.add(base);
  const aroPeana = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.05, 8, 80), glow(0x3ad0ff, 2.5)); aroPeana.rotation.x = Math.PI / 2; aroPeana.position.y = 0.3; aroPeana.userData.tinte = 'a'; peana.add(aroPeana);
  const giratorio = new THREE.Group(); giratorio.position.y = 0.35; peana.add(giratorio); let elCoche = coche(0xf2f2f6); giratorio.add(elCoche);

  // ---------- grada con público y banda ----------
  const grada = new THREE.Group(); root.add(grada);
  for (let f = 0; f < 4; f++) { const s = new THREE.Mesh(new THREE.BoxGeometry(14, 0.6, 0.9), mat(0x2a2d3a)); s.position.set(1, 0.3 + f * 0.6, -12.4 - f * 0.9); grada.add(s); }
  const gente = publico(90, 13, 4, -12.4, null); grada.add(gente);
  const banda = new THREE.Group(); banda.position.set(9.6, 0, -9.6); banda.rotation.y = -0.7; root.add(banda);
  { const tar = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.6, 2.4), mat(0x1a1a24)); tar.position.y = 0.3; banda.add(tar);
    const bombo = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.35, 20), mat(0xffffff)); bombo.rotation.x = Math.PI / 2; bombo.position.set(0, 1.0, -0.4); banda.add(bombo);
    [[-0.5, 1.2], [0.5, 1.25]].forEach(([x, y]) => { const pl = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.02, 16), mat(0xd4a020, { metalness: 0.9 })); pl.position.set(x, y + 0.3, -0.4); banda.add(pl); });
    const tecl = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.08, 0.35), mat(0x111111)); tecl.position.set(1.4, 1.4, 0.2); banda.add(tecl);
    [[-1.5, 0.3, 0xff8a1a], [0, -0.9, 0x333333], [1.4, -0.2, 0x2a5aff]].forEach(([x, z, c]) => { const m = figure({ body: c, legs: 0x111111 }); m.position.set(x, 0.6, z); banda.add(m); }); }
  banda.userData.banda = true;

  // ---------- decorado por etapa ----------
  const deco = new THREE.Group(); root.add(deco);
  const tintables = [];
  const focos = [];
  let etapa = 'piramides', est = ESTILOS.piramides; const fondoBase = { color: 0x06123a };
  function limpiarDeco() { deco.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) { [].concat(o.material).forEach(m => { if (m.map) m.map.dispose(); if (m.emissiveMap) m.emissiveMap.dispose(); m.dispose(); }); } }); deco.clear(); focos.length = 0; }
  function cicloramaPared(tex, radio = 16.5, alto = 12, desde = 0.2, arco = 2.75, extra = {}) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(radio, radio, alto, 64, 1, true, atras(arco) + desde, arco), new THREE.MeshStandardMaterial({ map: tex, side: THREE.BackSide, roughness: 0.7, ...extra }));
    m.position.y = alto / 2; m.rotation.y = 0; deco.add(m); return m;
  }
  function rigFocos(cols, n = 10) {
    const truss = new THREE.Mesh(new THREE.TorusGeometry(9, 0.12, 6, 60), mat(0x333344, { metalness: 0.8 })); truss.rotation.x = Math.PI / 2; truss.position.y = 11; deco.add(truss);
    for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2; const piv = new THREE.Group(); piv.position.set(Math.cos(a) * 9, 11, Math.sin(a) * 9); deco.add(piv);
      const cone = new THREE.Mesh(new THREE.ConeGeometry(1.1, 10, 24, 1, true), new THREE.MeshBasicMaterial({ color: cols[i % cols.length], transparent: true, opacity: 0.035, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      cone.position.y = -5; piv.add(cone); const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.28, 0.4, 10), mat(0x111111)); piv.add(lamp); focos.push({ piv, cone, fase: i * 1.7 }); }
  }
  function aroColgante(r, y, alto, txt, colorTxt, off = 0, arco = 2.2) {
    const rotY = atras(arco) + off;
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, alto, 64, 1, true, rotY, arco), new THREE.MeshStandardMaterial({ color: 0xf4f6ff, roughness: 0.3, emissive: 0x404860, side: THREE.DoubleSide })); m.position.y = y; deco.add(m);
    if (txt) { const t = texRotulo(txt, { color: colorTxt, fondo: '#2a1060', glowc: colorTxt, ancho: 4096, espejo: true }); const s = new THREE.Mesh(new THREE.CylinderGeometry(r - 0.03, r - 0.03, alto * 0.5, 64, 1, true, rotY + 0.1, arco - 0.2), emis(t, 1.6, { side: THREE.BackSide })); s.position.y = y; deco.add(s); }
    return m;
  }
  function anillosNeon(cx, cz, radios, cols, y = 0.03) { radios.forEach((r, i) => { const t = new THREE.Mesh(new THREE.TorusGeometry(r, 0.09, 6, 140), glow(cols[i % cols.length], 3)); t.rotation.x = Math.PI / 2; t.position.set(cx, y, cz); t.userData.tinteIdx = i; deco.add(t); tintables.push(t); }); }
  const DECO = {
    fortuna() {
      cicloramaPared(texCortina(), 16.5, 12);
      const marq = new THREE.Mesh(new THREE.BoxGeometry(12, 1.6, 0.4), mat(0x3a0a06)); marq.position.set(0, 8.5, -14.2); deco.add(marq);
      const rt = new THREE.Mesh(new THREE.PlaneGeometry(11.4, 1.2), emis(texRotulo('LA RULETA DE LA FORTUNA', { color: '#ffe9a0', fondo: '#3a0a06', glowc: '#ffb000' }), 1.4)); rt.position.set(0, 8.5, -13.98); deco.add(rt);
      for (let i = 0; i < 30; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), glow(0xffe9a0, 3)); b.position.set(-6 + i * 12 / 29, i % 2 ? 9.35 : 7.65, -13.95); deco.add(b); }
      for (let i = -3; i <= 3; i++) { const col = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 7, 16), mat(0xc9962a, { metalness: 0.8, roughness: 0.3 })); col.position.set(i * 3.6, 3.5, -14.6 + Math.abs(i) * 0.9); deco.add(col); }
      rigFocos([0xffe9a0, 0xffb060], 8);
    },
    a2006() {
      cicloramaPared(canvasTex(64, 512, (g, w, h) => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#5ab0ff'); gr.addColorStop(0.5, '#1a5aff'); gr.addColorStop(1, '#0a2a9a'); g.fillStyle = gr; g.fillRect(0, 0, w, h); }), 17, 14, -0.1, 3.4, { emissive: 0x1a3a9a, emissiveIntensity: 0.6 });
      const led = new THREE.Mesh(new THREE.CylinderGeometry(15.4, 15.4, 2.4, 64, 1, true, atras(2.65), 2.65), emis(texLED(3, ['#ff2a6a', '#ffd21a', '#2aff8a', '#33c6ff', '#ff7a1a', '#ffffff', '#a04dff']), 1.4, { side: THREE.BackSide })); led.position.y = 1.2; deco.add(led);
      deco.add(arcoNeon(15.35, 2.45, 2.65, 0xffffff));
      aroColgante(9.5, 7.2, 1.0, 'LA RULETA DE LA SUERTE', '#c070ff', 0.25, 1.9); aroColgante(7.6, 6.0, 0.6, null, null, -0.3, 1.5); aroColgante(11.5, 8.4, 0.9, 'LA RULETA DE LA SUERTE', '#c070ff', -0.95, 1.5);
      deco.add(escaleras(7, 2.2, 0xffd21a, -4.2, -11.2, 0), escaleras(7, 2.2, 0xffd21a, 6.0, -11.2, 0));
      const plat = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.8, 0.12, 64), mat(0x0a1a5a, { metalness: 0.5, roughness: 0.2 })); plat.position.y = 0.06; deco.add(plat);
      anillosNeon(0, 0, [3.6, 4.0, 4.4], [0xff7a1a, 0xff4fa8, 0xffd21a], 0.13);
      rigFocos([0xffffff, 0x9fd8ff], 10);
    },
    piramides(azul) {
      const tinte = azul ? ['#e8f0ff', '#5a9aff', '#2ae0a0', '#ffffff'] : ['#ffffff', '#cfe0ff', '#7ac8ff', '#9af0c0', '#ffffff'];
      cicloramaPared(texPiramides(tinte), 16.5, 11, 0.2, 2.75, { emissive: 0x405080, emissiveIntensity: 0.25 });
      const viga = arcoNeon(15.8, 10.8, 2.4, 0x000000, 0.25); viga.material = mat(0xe8eef8, { metalness: 0.6 }); deco.add(viga);
      for (let i = 0; i < 6; i++) { const a = Math.PI + 0.45 + i * 0.45; const c = new THREE.Mesh(new THREE.BoxGeometry(0.35, 11, 0.35), mat(0xf0f4ff, { metalness: 0.5 })); const b = Math.PI - 1.2 + i * 0.48; c.position.set(Math.sin(b) * 15.9, 5.5, Math.cos(b) * 15.9); deco.add(c); }
      const franja = new THREE.Mesh(new THREE.CylinderGeometry(13.6, 13.6, 0.5, 64, 1, true, atras(1.9), 1.9), emis(texRotulo('LA RULETA DE LA SUERTE', { color: '#ffffff', fondo: '#0a1a50', espejo: true }), 1.1, { side: THREE.BackSide })); franja.position.y = 2.9; deco.add(franja);
      deco.add(escaleras(7, 2.2, 0x3ad0ff, -4.4, -11.2, 0));
      rigFocos([0xffffff, 0xbfe0ff], 10);
    },
    verano() {
      DECO.piramides(false);
      const arco = new THREE.Mesh(new THREE.CylinderGeometry(12.5, 12.5, 1.3, 64, 1, true, atras(1.55), 1.55), new THREE.MeshStandardMaterial({ color: 0xf4f6ff, roughness: 0.3, side: THREE.DoubleSide })); arco.position.y = 8.8; deco.add(arco);
      const neon = new THREE.Mesh(new THREE.CylinderGeometry(12.4, 12.4, 0.9, 64, 1, true, atras(1.4), 1.4), emis(texRotulo('LA RULETA DE LA SUERTE', { color: '#ff7a3a', fondo: '#f4f6ff', glowc: '#ff5a1a', ancho: 2048, espejo: true }), 1.2, { side: THREE.BackSide })); neon.position.y = 8.8; deco.add(neon);
      for (let i = 0; i < 9; i++) { const ola = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.14, 6, 16, Math.PI), mat(0x1a7ad8, { emissive: 0x0a3a8a })); ola.position.set(-1.2 + i * 0.85, 0.08, 4.2); deco.add(ola); const espuma = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.12, 0.2), mat(0x2a9af0)); espuma.position.set(-1.2 + i * 0.85, 0.06, 4.2); deco.add(espuma); }
      for (let i = 0; i < 6; i++) { const ola = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.14, 6, 16, Math.PI), mat(0x1a7ad8, { emissive: 0x0a3a8a })); ola.position.set(4.4 + i * 0.85, 0.08, -1.5); deco.add(ola); }
      deco.add(palmera(-11, -5), palmera(11.5, -3.5), palmera(-3.2, -10.6), palmera(12, -8));
      const somb = new THREE.Group(); somb.position.set(-12.2, 0, 0.6); const palo = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.8, 6), mat(0xffffff)); palo.position.y = 1.4; somb.add(palo);
      const tela = new THREE.Mesh(new THREE.ConeGeometry(1.3, 0.5, 12, 1, true), new THREE.MeshStandardMaterial({ map: canvasTex(256, 32, (g, w, h) => { for (let i = 0; i < 12; i++) { g.fillStyle = i % 2 ? '#ff3a3a' : '#ffffff'; g.fillRect(i * w / 12, 0, w / 12, h); } }), side: THREE.DoubleSide })); tela.position.y = 2.8; somb.add(tela); deco.add(somb);
    },
    neon() {
      cicloramaPared(canvasTex(1024, 512, (g, w, h) => { g.fillStyle = '#0a0418'; g.fillRect(0, 0, w, h); const cs = ['#ff3a6a', '#3ad0ff', '#ffd21a', '#ff7a1a', '#a04dff']; for (let i = 0; i < 9; i++) { g.strokeStyle = cs[i % 5]; g.lineWidth = 6; g.shadowColor = cs[i % 5]; g.shadowBlur = 16; g.beginPath(); g.moveTo(0, 60 + i * 26); g.bezierCurveTo(w * 0.3, 20 + i * 30, w * 0.7, 120 + i * 24, w, 50 + i * 28); g.stroke(); } }), 17, 12, 0.1, 2.95, { emissive: 0xffffff, emissiveIntensity: 0.5 });
      deco.children[deco.children.length - 1].material.emissiveMap = deco.children[deco.children.length - 1].material.map;
      anillosNeon(0, 0, [3.5, 4.0, 4.6, 5.3, 6.1, 7.0, 8.0], [0xffd21a, 0x1fa3ff, 0xff7a1a, 0xff2a4a], 0.04);
      anillosNeon(-7.6, -6.4, [3.0, 3.6], [0xc64dff, 0x1fa3ff], 0.05);
      const esc = escaleras(8, 3.0, 0x3ad0ff, 3.4, -10.6, -0.2); deco.add(esc); const esc2 = escaleras(8, 3.0, 0xff7a1a, -3.8, -10.8, 0.2); deco.add(esc2);
      for (let k = 0; k < 4; k++) { const t = arcoNeon(14.8 - k * 0.5, 2.6 + k * 0.6, 2.6, [0xffd21a, 0x1fa3ff, 0xff7a1a, 0xff2a4a][k]); deco.add(t); tintables.push(t); t.userData.tinteIdx = k; }
      rigFocos([0xffffff, 0x9fd8ff, 0xff9ad8], 12);
    },
  };
  const PANEL_ALTO = { neon: 0x3b1680 };
  function setEtapa(id) {
    if (!ESCENARIOS[id]) id = 'piramides'; etapa = id; const E = ESCENARIOS[id]; est = ESTILOS[E.panel];
    limpiarDeco(); tintables.length = 0;
    if (id === 'piramides' || id === 'pirazul') DECO.piramides(id === 'pirazul'); else DECO[id]();
    sueloMat.map?.dispose(); sueloMat.map = texSuelo(id === 'pirazul' ? 'azul' : id); sueloMat.metalness = id === 'verano' ? 0.55 : 0.35; sueloMat.roughness = id === 'verano' ? 0.06 : 0.15; sueloMat.needsUpdate = true;
    fondoBase.color = E.fondo; scene.background.set(E.fondo); scene.fog.color.set(E.niebla[0]); scene.fog.near = E.niebla[1]; scene.fog.far = E.niebla[2]; if (renderer) renderer.toneMappingExposure = E.expo;
    baranda.visible = id !== 'fortuna' && id !== 'a2006'; banda.visible = !['fortuna', 'a2006'].includes(id);
    rueda.setRetro(id === 'fortuna');
    marcoPanel.material.color.set(id === 'neon' ? PANEL_ALTO.neon : id === 'fortuna' ? 0x3a1a08 : 0x1a1d2a);
    copre.children[0].material.color.set(id === 'fortuna' ? 0x2a6a3a : id === 'verano' ? 0xff8a2a : id === 'neon' ? 0x8a2ad8 : 0xd02a6a);
    giratorio.remove(elCoche); elCoche = coche(id === 'fortuna' ? 0xb02a1a : id === 'a2006' ? 0xf2f2f6 : id === 'neon' ? 0x111118 : id === 'verano' ? 0x6a1a5a : 0x1a6aff); giratorio.add(elCoche);
    pintarPanel(0); aplicarTinte();
  }
  // ---------- panel (estado) ----------
  let panelE = panelTexto(' LA RULETA DE LA SUERTE', ''); let panelT = 0; let panelSucio = true;
  function pintarPanel(t) { const g = panCanvas.getContext('2d'); dibujarPanel(g, panCanvas.width, panCanvas.height, panelE, est, { franja: 0.16, t }); panTex.needsUpdate = true; panelSucio = false; }
  function textoLogo() { return etapa === 'fortuna' ? 'LA RULETA DE LA FORTUNA' : 'LA RULETA DE LA SUERTE'; }

  // ---------- tema (especiales): tinte de neones y luces ----------
  let pal = null;
  function aplicarTinte() {
    const cols = pal?.neones || null;
    tintables.forEach(t => { const def = t.userData.defColor ?? (t.userData.defColor = t.material.emissive.getHex()); t.material.emissive.set(cols ? cols[t.userData.tinteIdx % cols.length] : def); });
    [aroConsola, aroConsola2, tiraTarima, aroPeana].forEach((m, i) => { const def = m.userData.defColor ?? (m.userData.defColor = m.material.emissive.getHex()); m.material.emissive.set(cols ? cols[i % cols.length] : def); });
    fillA.color.set(pal?.luzA ?? 0xff4fa8); fillB.color.set(pal?.luzB ?? 0x3a8bff);
    focos.forEach((f, i) => { if (pal?.focos) f.cone.material.color.set(pal.focos[i % pal.focos.length]); });
    scene.background.set(pal?.fondo ?? fondoBase.color);
  }
  function setTema(p) { pal = p || null; aplicarTinte(); }

  // ---------- paseo ----------
  const walker = figure({ body: 0xff7a1a, legs: 0x223355 }); walker.visible = false; root.add(walker);
  const marca = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.06, 8, 36), glow(0x33ff88, 3)); marca.rotation.x = Math.PI / 2; marca.visible = false; root.add(marca);
  const posAtril = i => { const v = new THREE.Vector3(); figs[i].getWorldPosition(v); return v; };
  function bloqueado(x, z) {
    if (Math.hypot(x, z) > 17) return true; if (Math.hypot(x, z) < 3.3) return true;
    const p = new THREE.Vector3(x, 0, z); panelG.worldToLocal(p); if (Math.abs(p.x) < PW / 2 + 0.8 && p.z < 0.4 && p.z > -1) return true;
    if (Math.hypot(x - 7.2, z + 5.6) < 2.4) return true; if (z < -11.6) return true; if (Math.hypot(x - 9.6, z + 9.6) < 2.6) return true;
    return false;
  }
  // ---------- confeti ----------
  let confeti = null;
  function celebrar() {
    if (confeti) root.remove(confeti);
    const n = 500, geo = new THREE.BufferGeometry(), pos = new Float32Array(n * 3), col = new Float32Array(n * 3), vel = [];
    const cs = [0xffd21a, 0x1f6bff, 0xff2a2a, 0xffffff, 0x2ab04a].map(c => new THREE.Color(c));
    for (let i = 0; i < n; i++) { pos.set([(Math.random() - 0.5) * 22, 10 + Math.random() * 7, (Math.random() - 0.5) * 18], i * 3); const c = cs[i % cs.length]; col.set([c.r, c.g, c.b], i * 3); vel.push(1 + Math.random() * 2); }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    confeti = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.16, vertexColors: true })); confeti.userData = { vel, t: 0 }; root.add(confeti);
    gente.userData.anim.salto = 4;
  }
  // ---------- copresentadora: va hasta la columna de la casilla ----------
  function copreA(col) { copreDest.x = -PW / 2 + (col + 0.5) * PW / 14; }
  const tmpM = new THREE.Matrix4();
  function update(t, dt) {
    rueda.update(dt * (window.__VEL || 1), t);
    panelT += dt; if (panelSucio || panelT > 0.25) { pintarPanel(t); panelT = 0; }
    focos.forEach(f => { f.piv.rotation.z = Math.sin(t * 0.6 + f.fase) * 0.5; f.piv.rotation.x = Math.cos(t * 0.45 + f.fase * 1.3) * 0.35; });
    giratorio.rotation.y += dt * 0.25;
    copre.position.x += (copreDest.x - copre.position.x) * Math.min(1, dt * 4); copre.rotation.y = Math.abs(copreDest.x - copre.position.x) > 0.1 ? Math.sign(copreDest.x - copre.position.x) * 1.2 : 0.35;
    presentador.rotation.y = 1.15 + Math.sin(t * 0.6) * 0.2;
    const A = gente.userData.anim; if (A.salto > 0 || Math.floor(t * 4) % 8 === 0) { A.salto = Math.max(0, A.salto - dt); for (let i = 0; i < A.base.length; i++) { const [x, y, z] = A.base[i]; const dy = A.salto > 0 ? Math.abs(Math.sin(t * 9 + i)) * 0.15 : 0; tmpM.makeTranslation(x, y + dy, z); A.cuerpos.setMatrixAt(i, tmpM); tmpM.makeTranslation(x, y + 0.42 + dy, z); A.cabezas.setMatrixAt(i, tmpM); } A.cuerpos.instanceMatrix.needsUpdate = A.cabezas.instanceMatrix.needsUpdate = true; }
    tintables.forEach((m, i) => { m.material.emissiveIntensity = 2.4 + Math.sin(t * 2 + i) * 0.7; });
    if (confeti) { const p = confeti.geometry.attributes.position; confeti.userData.t += dt; for (let i = 0; i < p.count; i++) { p.setX(i, p.getX(i) + Math.sin(t * 3 + i) * dt * 0.5); p.setY(i, p.getY(i) - confeti.userData.vel[i] * dt); } p.needsUpdate = true; if (confeti.userData.t > 9) { root.remove(confeti); confeti = null; } }
  }
  setEtapa('piramides');
  return {
    root, update, setTema, setEtapa, celebrar, presentador, copre, figs, atriles, setMarcador, walker, marca, posAtril, bloqueado, alturaEn: () => 0,
    rueda, panelG, peana, mamparas, gente, get etapa() { return etapa; }, get estilo() { return est; },
    onClic(f) { clicCb = f; }, copreA,
    panel(E) { panelE = E || panelTexto(textoLogo()); panelSucio = true; },
    panelActual: () => panelE,
    pantalla(modo, datos = {}) { if (modo === 'info') panelE = panelTexto(String(datos.title || '').slice(0, 50), (datos.rows || []).map(r => r.join(': ')).join(' · ').slice(0, 60)); else panelE = panelTexto(textoLogo()); panelSucio = true; },
    refrescarPantalla() { rueda.setLogo(ctx.logoPantalla); panelSucio = true; },
    ocultarFig(i, v) { if (figs[i]) figs[i].visible = !v; },
    bombilla() {},
    reset() { rueda.setFinal(false); rueda.activar(-1); panelE = panelTexto(textoLogo()); panelSucio = true; figs.forEach(f => { f.visible = true; }); copreDest.x = 2.5; atriles.forEach((a, i) => setMarcador(i, { activo: false, texto: null })); },
  };
}
export { drawLogo };
