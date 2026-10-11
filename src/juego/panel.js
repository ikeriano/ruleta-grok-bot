// Panel de 52 casillas (filas de 12, 14, 14 y 12) como el del programa: colocación de la frase,
// letras destapadas y dibujo en canvas (se usa igual para el panel 3D del plató y para el panel 2D del HUD).
export const FILAS = [12, 14, 14, 12];
const INICIOS = { 1: [1], 2: [1], 3: [1, 0], 4: [0] };
export const VOCALES = ['A', 'E', 'I', 'O', 'U'];
export const ABC = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
export const CONSONANTES = ABC.filter(l => !VOCALES.includes(l));
/** Letra normalizada (sin tildes; la Ñ se mantiene) */
export const nl = ch => { const u = String(ch).toUpperCase(); if (u === 'Ñ') return 'Ñ'; return u.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); };
export const esLetra = ch => /[A-ZÑ]/.test(nl(ch));
export const normFrase = s => String(s || '').toUpperCase().split('').map(nl).join('').replace(/[^A-ZÑ0-9]/g, '');
function lineas(f, anchos) {
  const out = []; let cur = '';
  for (const w of f.split(/\s+/).filter(Boolean)) {
    const cand = (cur + ' ' + w).trim();
    if (out.length < anchos.length && cand.length <= anchos[out.length]) { cur = cand; continue; }
    if (!cur) return null; out.push(cur); cur = w;
    if (out.length >= anchos.length || cur.length > anchos[out.length]) return null;
  }
  if (cur) out.push(cur); return out;
}
export function colocar(f) {
  for (const n of [1, 2, 3, 4]) for (const s of INICIOS[n]) { const r = lineas(f, FILAS.slice(s, s + n)); if (r) return { ini: s, lineas: r }; }
  return { ini: 0, lineas: [f.slice(0, 12), f.slice(12, 26), f.slice(26, 40), f.slice(40, 52)] };
}
/** Celdas [fila][col 0..13] -> carácter o null (fuera) / '' (casilla vacía) */
export function rejilla(f) {
  const { ini, lineas: L } = colocar(f); const g = [];
  for (let r = 0; r < 4; r++) { g.push([]); for (let c = 0; c < 14; c++) g[r].push((r === 0 || r === 3) && (c === 0 || c === 13) ? null : ''); }
  L.forEach((ln, k) => { const r = ini + k; const W = FILAS[r], base = r === 0 || r === 3 ? 1 : 0; const off = base + Math.floor((W - ln.length) / 2); [...ln].forEach((ch, i) => { if (ch !== ' ') g[r][off + i] = ch; }); });
  return g;
}
export function nuevoPanel(p) {
  return { f: p.f, tema: p.tema, g: rejilla(p.f), rev: new Set(), luz: new Set(), vis: new Set(), usadas: new Set(), modo: 'juego', resuelto: false };
}
export const cuenta = (E, L) => [...E.f].filter(ch => nl(ch) === L).length;
export const quedan = (E, lista) => lista.filter(l => !E.rev.has(l) && cuenta(E, l) > 0);
export const letrasTotales = E => [...E.f].filter(esLetra).length;
export const letrasVistas = E => { let n = 0; E.g.forEach((row, r) => row.forEach((ch, c) => { if (ch && esLetra(ch) && (E.rev.has(nl(ch)) || E.vis.has(r + ',' + c))) n++; })); return n; };
export const fraccion = E => letrasVistas(E) / Math.max(1, letrasTotales(E));
/** Celdas de una letra (para que la copresentadora las vaya destapando) */
export const celdasLetra = E => { const o = []; E.g.forEach((row, r) => row.forEach((ch, c) => { if (ch && esLetra(ch)) o.push(r + ',' + c); })); return o; };
export const celdasDe = (E, L) => { const o = []; E.g.forEach((row, r) => row.forEach((ch, c) => { if (ch && nl(ch) === L) o.push(r + ',' + c); })); return o; };
/** Panel con un texto cualquiera (logo, títulos de la historia…) */
export function panelTexto(t, tema = '') { const E = nuevoPanel({ f: t, tema }); E.modo = 'texto'; return E; }

export const ESTILOS = {
  fortuna: { fondo: '#1a0c06', marco: '#c9962a', bombillas: '#ffe9a0', vacia: '#0e4a24', ficha: '#f3eedb', letra: '#101010', luz: '#ffd34a', franja: '#7a1a12', franjaTxt: '#ffe9a0' },
  a2006: { fondo: '#0a1a3a', marco: '#e8eef8', bombillas: null, vacia: '#14b07a', ficha: '#ffffff', letra: '#0a1a3a', luz: '#3ad0ff', franja: '#1a5adf', franjaTxt: '#ffffff' },
  piramides: { fondo: '#0a1a50', marco: '#d9b24a', bombillas: '#fff2b0', vacia: '#1a46c8', ficha: '#ffffff', letra: '#0a1a50', luz: '#3ad0ff', franja: '#0d2f9a', franjaTxt: '#ffffff' },
  verano: { fondo: '#0a1a50', marco: '#f0a020', bombillas: '#fff2b0', vacia: '#1a8ad8', ficha: '#ffffff', letra: '#0a1a50', luz: '#ffd34a', franja: '#0a6ab0', franjaTxt: '#ffffff' },
  neon: { fondo: '#12052a', marco: '#c64dff', bombillas: null, neon: true, vacia: '#3b1680', ficha: '#ffffff', letra: '#1a0640', luz: '#33e6ff', franja: '#5a1aa8', franjaTxt: '#ffffff' },
};
function rr(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
/** Dibuja el panel en un canvas 2D. franja = altura relativa de la franja del tema (0 = sin franja) */
export function dibujarPanel(g, W, H, E, est = ESTILOS.piramides, { franja = 0.16, t = 0 } = {}) {
  g.clearRect(0, 0, W, H);
  const FH = franja ? H * franja : 0, PH = H - FH;
  g.fillStyle = est.fondo; rr(g, 0, 0, W, PH, H * 0.04); g.fill();
  // marco
  g.lineWidth = H * 0.03; g.strokeStyle = est.marco; if (est.neon) { g.shadowColor = est.marco; g.shadowBlur = H * 0.05; } rr(g, H * 0.02, H * 0.02, W - H * 0.04, PH - H * 0.04, H * 0.04); g.stroke(); g.shadowBlur = 0;
  if (est.bombillas) { const n = 40, per = 2 * (W + PH); for (let i = 0; i < n; i++) { let d = (i / n) * per, x, y; const m = H * 0.02; if (d < W) { x = d; y = m; } else if (d < W + PH) { x = W - m; y = d - W; } else if (d < 2 * W + PH) { x = W - (d - W - PH); y = PH - m; } else { x = m; y = PH - (d - 2 * W - PH); }
    const on = (Math.floor(t * 4) + i) % 3 !== 0; g.fillStyle = on ? est.bombillas : '#6a5a30'; g.beginPath(); g.arc(Math.min(W - m, Math.max(m, x)), Math.min(PH - m, Math.max(m, y)), H * 0.012, 0, 7); g.fill(); } }
  const mx = W * 0.05, my = PH * 0.09; const cw = (W - mx * 2) / 14, ch = (PH - my * 2) / 4; const gap = Math.max(1, cw * 0.06);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 14; c++) {
    const v = E.g[r][c]; if (v === null) continue; const x = mx + c * cw + gap / 2, y = my + r * ch + gap / 2, w = cw - gap, h = ch - gap;
    const k = r + ',' + c; const letra = v && v !== ''; const vista = letra && (E.modo === 'texto' || E.resuelto || E.rev.has(nl(v)) || (E.vis && E.vis.has(k)) || !/[A-ZÑÁÉÍÓÚÜ]/i.test(v));
    if (!letra) { g.fillStyle = est.vacia; rr(g, x, y, w, h, w * 0.08); g.fill(); g.fillStyle = 'rgba(255,255,255,.08)'; g.fillRect(x + w * 0.1, y + h * 0.08, w * 0.8, h * 0.12); continue; }
    const lit = E.luz.has(k);
    g.fillStyle = lit ? est.luz : est.ficha; if (lit) { g.shadowColor = est.luz; g.shadowBlur = w * 0.5; } rr(g, x, y, w, h, w * 0.08); g.fill(); g.shadowBlur = 0;
    g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 1; g.stroke();
    if (vista && !lit) { g.fillStyle = est.letra; g.font = `900 ${h * 0.72}px Arial, Helvetica, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(v.toUpperCase(), x + w / 2, y + h * 0.55); }
  }
  if (FH) {
    g.fillStyle = est.franja; rr(g, W * 0.04, PH + FH * 0.1, W * 0.92, FH * 0.8, FH * 0.2); g.fill();
    g.strokeStyle = 'rgba(255,255,255,.6)'; g.lineWidth = 2; g.stroke();
    g.fillStyle = est.franjaTxt; g.font = `900 ${FH * 0.5}px Arial, Helvetica, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(String(E.tema || '').toUpperCase(), W / 2, PH + FH * 0.52);
  }
}
