// La ruleta de 24 gajos: textura dibujada por código, pivotes, flechas de cada concursante y física de giro
// (velocidad angular con rozamiento; cada pivote que pasa por la flecha suena «clic» y frena un poco).
import * as THREE from 'three';
import { mat, glow } from '../lib/helpers.js';
import { miniRueda } from './logo.js';

const C = { r: '#e8322b', o: '#f7a21b', y: '#ffd21a', g: '#2fb64a', c: '#1fa3e8', b: '#2a52d8', p: '#8d3ad8', m: '#e83ca0' };
const NUM = [C.r, C.o, C.y, C.g, C.c, C.b, C.p, C.m];
const N = (v) => ({ tipo: 'num', v, t: String(v) });
export const GAJOS = [N(100), N(25), { tipo: 'quiebra', t: 'QUIEBRA' }, N(75), N(150), { tipo: 'pierde', t: 'PIERDE TURNO' }, N(50), N(200), { tipo: 'x2', t: 'X2' }, N(25), N(100), { tipo: 'comodin', t: 'COMODÍN', v: 50 },
  N(75), N(125), { tipo: 'quiebra', t: 'QUIEBRA' }, N(50), N(150), { tipo: 'melo', t: 'ME LO QUEDO' }, N(0), N(100), { tipo: 'mitad', t: '1/2' }, N(200), { tipo: 'selodoy', t: 'SE LO DOY' }, N(50)];
let k = 0; GAJOS.forEach(g => { if (g.tipo === 'num') g.color = NUM[k++ % NUM.length]; });
Object.assign(GAJOS[2], { color: '#0a0a0a', txt: '#ffffff' }); Object.assign(GAJOS[14], { color: '#0a0a0a', txt: '#ffffff' });
Object.assign(GAJOS[5], { color: '#ffffff', txt: '#111111' }); Object.assign(GAJOS[8], { color: '#c0c0c8', txt: '#5a1a9a' });
Object.assign(GAJOS[11], { color: '#18a050', txt: '#ffe14a' }); Object.assign(GAJOS[17], { color: '#ff69b4', txt: '#ffffff' });
Object.assign(GAJOS[20], { color: '#00b8b0', txt: '#ffffff' }); Object.assign(GAJOS[22], { color: '#ff7a1a', txt: '#ffffff' });
export const NG = GAJOS.length; const STEP = Math.PI * 2 / NG;
export const RADIO = 2.55;

function texRueda(final = false, retro = false) {
  const S = 2048, c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d'); const cx = S / 2, R = S / 2 * 0.985;
  for (let i = 0; i < NG; i++) {
    const G = GAJOS[i]; const b0 = -(i + 1) * STEP, b1 = -i * STEP;
    let col = final ? (i % 2 ? '#d4a020' : '#f3d36a') : G.color; if (retro && !final && G.tipo === 'num') col = ['#b83a2a', '#d48a2a', '#e8c66a', '#3a7a3a', '#2a5a9a', '#6a3a8a'][i % 6];
    g.beginPath(); g.moveTo(cx, cx); g.arc(cx, cx, R, b0, b1); g.closePath(); g.fillStyle = col; g.fill();
    const gr = g.createRadialGradient(cx, cx, R * 0.3, cx, cx, R); gr.addColorStop(0, 'rgba(255,255,255,0.18)'); gr.addColorStop(1, 'rgba(0,0,0,0.12)'); g.fillStyle = gr; g.fill();
    g.strokeStyle = retro ? '#e8c66a' : '#ffffff'; g.lineWidth = 6; g.stroke();
    // texto radial (del borde hacia el centro)
    const txt = final ? '★ SOBRE ★' : G.t; g.save(); g.translate(cx, cx); g.rotate((b0 + b1) / 2 + Math.PI);
    const largo = R * 0.6; let fs = R * 0.115; g.font = `900 ${fs}px "Arial Black", Arial`; const m = g.measureText(txt).width; if (m > largo) { fs *= largo / m; g.font = `900 ${fs}px "Arial Black", Arial`; }
    g.textAlign = 'left'; g.textBaseline = 'middle'; g.fillStyle = final ? '#5a2a00' : G.txt || '#ffffff'; g.lineWidth = fs * 0.12; g.strokeStyle = 'rgba(0,0,0,.45)';
    if (!G.txt && !final) g.strokeText(txt, -R * 0.94, 0); g.fillText(txt, -R * 0.94, 0);
    if (G.tipo === 'num' && !final) { g.font = `900 ${fs * 0.55}px Arial`; g.fillText('€', -R * 0.94 + g.measureText(txt).width + fs * 0.9, 0); }
    g.restore();
  }
  g.lineWidth = 18; g.strokeStyle = retro ? '#c9962a' : '#ffffff'; g.beginPath(); g.arc(cx, cx, R - 9, 0, 7); g.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
function texCentro(logoImg) {
  const S = 512, c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d');
  const gr = g.createRadialGradient(S / 2, S / 2, 10, S / 2, S / 2, S / 2); gr.addColorStop(0, '#3a6aff'); gr.addColorStop(1, '#0a1a7a'); g.fillStyle = gr; g.fillRect(0, 0, S, S);
  if (logoImg && logoImg.naturalWidth) { const s = Math.min(S * 0.8 / logoImg.naturalWidth, S * 0.8 / logoImg.naturalHeight); g.drawImage(logoImg, S / 2 - logoImg.naturalWidth * s / 2, S / 2 - logoImg.naturalHeight * s / 2, logoImg.naturalWidth * s, logoImg.naturalHeight * s); }
  else { g.fillStyle = '#fff'; g.font = '900 92px "Arial Black", Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.save(); g.translate(S / 2, S / 2); g.transform(1, 0, -0.15, 1, 0, 0); g.fillText('RULETA', 0, -10); g.font = '900 44px Arial'; g.fillStyle = '#ffd21a'; g.fillText('DE LA SUERTE', 0, 62); g.restore(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

/** Crea la ruleta. punteros: ángulos (mundo) de las flechas de los concursantes */
export function crearRueda(parent, punteros, { onClic = () => {} } = {}) {
  const g = new THREE.Group(); parent.add(g);
  const disco = new THREE.Group(); disco.position.y = 1.08; g.add(disco);
  const mDisco = new THREE.MeshStandardMaterial({ map: texRueda(), roughness: 0.35, metalness: 0.1, emissive: 0xffffff, emissiveIntensity: 0.12 });
  mDisco.emissiveMap = mDisco.map;
  const cara = new THREE.Mesh(new THREE.CircleGeometry(RADIO, 96), mDisco); cara.rotation.x = -Math.PI / 2; cara.receiveShadow = true; disco.add(cara);
  const canto = new THREE.Mesh(new THREE.CylinderGeometry(RADIO, RADIO, 0.08, 96, 1, true), mat(0xe8e8f0, { metalness: 0.6, roughness: 0.3 })); canto.position.y = -0.04; disco.add(canto);
  const mCentro = new THREE.MeshStandardMaterial({ map: texCentro(null), roughness: 0.3, emissive: 0xffffff, emissiveIntensity: 0.25 }); mCentro.emissiveMap = mCentro.map;
  const centro = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.66, 0.12, 48), [mat(0xd0d8ff, { metalness: 0.7 }), mCentro, mat(0x223388)]); centro.position.y = 0.06; disco.add(centro);
  const mPivote = mat(0xf2f2f2, { metalness: 0.9, roughness: 0.2 });
  for (let i = 0; i < NG; i++) { const a = i * STEP; const p = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.12, 8), mPivote); p.position.set(Math.cos(a) * (RADIO - 0.06), 0.06, -Math.sin(a) * (RADIO - 0.06)); disco.add(p); }
  // flechas (una delante de cada concursante)
  const flechas = punteros.map(phi => {
    const piv = new THREE.Group(); piv.position.set(Math.cos(phi) * (RADIO + 0.12), 1.16, -Math.sin(phi) * (RADIO + 0.12)); piv.rotation.y = phi; g.add(piv);
    const m = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x000000, metalness: 0.4, roughness: 0.3 });
    const f = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.42, 3), m); f.rotation.z = Math.PI / 2; f.position.x = -0.12; f.scale.z = 0.4; piv.add(f);
    return { piv, m, phi, kick: 0 };
  });
  const st = { ang: Math.random() * Math.PI * 2, omega: 0, activo: 0, ultimo: -1, res: null, final: false, retro: false };
  const idxEn = phi => { let a = (phi - st.ang) % (Math.PI * 2); if (a < 0) a += Math.PI * 2; return Math.floor(a / STEP) % NG; };
  const R = {
    grupo: g, disco, flechas, st, GAJOS,
    get girando() { return st.omega !== 0; },
    activar(i, color) { st.activo = i; flechas.forEach((f, k) => { f.m.emissive.set(k === i ? color || 0xffd21a : 0x000000); f.m.emissiveIntensity = k === i ? 1.6 : 0; f.m.color.set(k === i ? color || 0xffd21a : 0xdddddd); }); },
    gajoActual() { return idxEn((flechas[st.activo] || flechas[0]).phi); },
    /** Da un impulso y espera a que pare. Devuelve el índice del gajo */
    girar(omega) { if (!flechas[st.activo]) st.activo = 0; st.omega = omega; st.ultimo = idxEn(flechas[st.activo].phi); return new Promise(r => { st.res = r; }); },
    empujar(dAng) { st.ang += dAng; disco.rotation.y = st.ang; },
    setFinal(f) { st.final = f; mDisco.map.dispose(); mDisco.map = mDisco.emissiveMap = texRueda(f, st.retro); mDisco.needsUpdate = true; },
    setRetro(r) { st.retro = r; this.setFinal(st.final); },
    setLogo(img) { mCentro.map.dispose(); mCentro.map = mCentro.emissiveMap = texCentro(img); mCentro.needsUpdate = true; },
    update(dt, t) {
      if (st.omega !== 0) {
        const v = Math.abs(st.omega), s = Math.sign(st.omega);
        st.ang += st.omega * dt;
        const nv = Math.max(0, v - (0.28 + 0.16 * v) * dt); st.omega = s * nv;
        const i = idxEn((flechas[st.activo] || flechas[0]).phi);
        if (i !== st.ultimo) { st.ultimo = i; onClic(v); (flechas[st.activo] || flechas[0]).kick = Math.min(0.6, 0.15 + v * 0.05); if (v < 2.5) st.omega *= 0.93; }
        if (nv < 0.05) { st.omega = 0; const r = st.res; st.res = null; r && r(this.gajoActual()); }
        disco.rotation.y = st.ang;
      }
      flechas.forEach(f => { f.kick *= Math.exp(-dt * 14); f.piv.rotation.y = f.phi + f.kick * (st.omega >= 0 ? 1 : -1); });
      void t;
    },
  };
  disco.rotation.y = st.ang;
  return R;
}
export { miniRueda };
