// Núcleo del flujo (misma organización que el APK de referencia): token de cancelación, esperas
// cancelables, overlay de rótulos/elecciones, bocadillo del presentador, HUD de 4 concursantes, avisos.
import { me } from '../lib/audio.js';
import { cfg } from '../cfg.js';

export const $ = s => document.querySelector(s);
export const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const VEL = () => window.__VEL || 1;
let moneda = '€';
export const setMoneda = m => { moneda = m; };
export const miles = n => { const v = Math.round(Number(n) || 0); return (v < 0 ? '-' : '') + String(Math.abs(v)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); };
/** En el plató de 1990-97 (pesetas) el presentador no dice «euros» */
const PTS = [[/cien mil euros/gi, 'diez millones de pesetas'], [/doscientos euros/gi, 'veinte mil pesetas'], [/cincuenta euros/gi, 'cinco mil pesetas'], [/(\d)\s*€/g, '$1 pesetas'], [/\beuros\b/gi, 'pesetas'], [/\beuro\b/gi, 'peseta']];
export const enPesetas = t => PTS.reduce((a, [r, x]) => a.replace(r, x), String(t));
export const textoMoneda = t => (moneda === 'pts' ? enPesetas(t) : t);
export const euros = n => miles(n) + (moneda === 'pts' ? ' ptas.' : ' €');
export const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9ñ ]/g, '').replace(/\s+/g, ' ').trim();
export const baraja = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const azar = a => a[Math.floor(Math.random() * a.length)];

// ---------- cancelación (☰ vuelve al menú desde cualquier punto) ----------
export const ABORT = { abort: true };
let token = 0; let limpiezas = new Set();
export function nuevoToken() { token++; const l = [...limpiezas]; limpiezas = new Set(); l.forEach(f => f()); return token; }
export function check(t) { if (t !== token) throw ABORT; }
export const Dt = (ms, t = token) => new Promise((res, rej) => { const f = () => { clearTimeout(id); rej(ABORT); }; const id = setTimeout(() => { limpiezas.delete(f); t === token ? res() : rej(ABORT); }, ms / VEL()); limpiezas.add(f); });
export const Zi = p => new Promise((res, rej) => { const f = () => rej(ABORT); limpiezas.add(f); p.then(v => { limpiezas.delete(f); res(v); }, e => { limpiezas.delete(f); rej(e); }); });
export const alLimpiar = f => limpiezas.add(f);
addEventListener('unhandledrejection', e => { if (e.reason === ABORT) e.preventDefault(); });

/** Cronómetro. fin: promesa que se resuelve con 'TIEMPO' al agotarse */
export class Reloj {
  constructor(seg, onTick) {
    this.ilimitado = !seg || seg === Infinity; this.rest = this.ilimitado ? Infinity : seg; this.onTick = onTick; this.corriendo = false; this.terminado = false;
    this.fin = new Promise(r => (this._res = r)); let ult = Math.ceil(this.rest);
    this._iv = setInterval(() => {
      if (!this.corriendo || this.terminado || this.ilimitado) return;
      this.rest = Math.max(0, this.rest - 0.1 * VEL()); this.onTick && this.onTick(this.rest);
      if (Math.ceil(this.rest) !== ult) { ult = Math.ceil(this.rest); if (ult <= 10) me.play('tictac'); }
      if (this.rest <= 0) { this.terminado = true; clearInterval(this._iv); this._res('TIEMPO'); }
    }, 100);
    this._l = () => this.stop(); limpiezas.add(this._l);
    onTick && onTick(this.rest);
  }
  start() { this.corriendo = true; return this; }
  pause() { this.corriendo = false; }
  sumar(s) { if (!this.ilimitado) this.rest = Math.max(0.1, this.rest + s); this.onTick && this.onTick(this.rest); }
  stop() { limpiezas.delete(this._l); if (this.terminado) return; this.terminado = true; clearInterval(this._iv); this._res('STOP'); }
}
export const fmtT = s => s === Infinity ? '∞' : String(Math.ceil(s));

// ---------- overlay ----------
const ov = () => $('#overlay');
export function cerrarOverlay() { ov().classList.add('hidden'); ov().innerHTML = ''; }
export function mostrar(html) { ov().innerHTML = html; ov().classList.remove('hidden'); ov().onclick = null; }
/** Rótulo de ronda con rayo (estilo grafismo de Alta Tensión) */
export async function banner(titulo, sub = '', ms = 2600) {
  me.play('banner');
  mostrar(`<div class="banner-at"><div class="ba-rayo">🎡</div><div class="ba-t">${esc(titulo)}</div>${sub ? `<div class="ba-s">${esc(sub)}</div>` : ''}</div>`);
  await Dt(ms); cerrarOverlay();
}
/** Elección en overlay: resuelve con data-z del botón pulsado */
export function elegir(html, sel = '[data-z]') {
  mostrar(html);
  return Zi(new Promise(res => { const bs = ov().querySelectorAll(sel); bs.forEach(b => b.onclick = e => { e.stopPropagation(); me.play('tecla'); res(b.dataset.z); }); if (window.__AUTO && bs.length) setTimeout(() => res(bs[Math.min(bs.length - 1, window.__AUTO_ELIGE || 0)].dataset.z), 400 / VEL()); })).finally(cerrarOverlay);
}
export async function textoGrande(t, sub = '', ms = 2600) { mostrar(`<div class="txt">${t}</div>${sub ? `<div class="sub">${sub}</div>` : ''}`); await Dt(ms); cerrarOverlay(); }
/** Bote grande dorado */
export async function boteGrande(n, sub = '', ms = 2800) { me.play('bote'); mostrar(`<div class="bote-at"><span>${euros(n)}</span></div>${sub ? `<div class="sub">${esc(sub)}</div>` : ''}`); await Dt(ms); cerrarOverlay(); }

// ---------- bocadillo del presentador y voces ----------
export const bubble = { hasta: 0, nombre: 'Presentador', quien: null };
export function di(texto, ms = 3500, quien = null, nombre = null) { const b = $('#bubble'); b.innerHTML = `<b>${esc(nombre || bubble.nombre)}:</b> ${esc(texto)}`; b.classList.toggle('conc', !!quien); b.classList.remove('hidden'); bubble.hasta = performance.now() + ms / VEL(); bubble.quien = quien; }
const espera = t => Dt(Math.max(1400, String(t).length * 55));
/** El presentador dice una frase (bocadillo + voz Piper davefx) y espera a que termine */
export async function habla(texto, ms = 3800) {
  texto = textoMoneda(texto);
  di(texto, ms + 1500);
  if (!cfg.voz) return espera(texto);
  await Zi(me.say(texto, 'davefx'));
}
/** Un concursante dice algo con su voz Piper */
export async function hablaC(c, texto) {
  di(texto, 2600, c.fig ?? null, c.nombre);
  if (!cfg.voz) return Dt(1100);
  await Zi(Promise.race([me.say(texto, c.voz || 'sharvard'), new Promise(r => setTimeout(r, 4000))]));
}
/** El presentador lee una pregunta / categoría (voz de preguntas pregenerada) */
export function leer(texto) { if (cfg.lee && cfg.voz) return me.say(texto, 'davefx', { pregunta: true }); return Promise.resolve(); }

// ---------- HUD de los concursantes ----------
export const hud = {
  show(v) { $('#hud').classList.toggle('hidden', !v); },
  set(G, activo = -1) {
    if (!G) return;
    $('#hudConc').innerHTML = G.conc.map((c, i) => `<div class="hc ${i === activo ? 'act' : ''} ${c.fuera ? 'fuera' : ''} ${c.plantado ? 'plant' : ''}" style="--c:${c.color}"><div class="n">${esc(c.nombre)}${c.humano && c.nombre !== 'Tú' ? ' (TÚ)' : ''}</div><div class="d">${euros(c.dinero)}</div><div class="x">${c.ronda ? (c.ronda > 0 ? '+' : '') + euros(c.ronda) : ''}${c.comodines ? ' <i class="cmd">' + '🃏'.repeat(c.comodines) + '</i>' : ''}${c.plantado ? ' ✋' : ''}</div></div>`).join('');
  },
  timer(s, low = 10) { const t = $('#timer'); t.textContent = fmtT(s); t.classList.toggle('low', s !== Infinity && s <= low); },
  sinTimer() { $('#timer').textContent = ''; $('#timer').classList.remove('low'); },
  ronda(txt) { $('#roundTxt').textContent = txt; },
};

// ---------- piezas del HUD del APK: hashtag, rótulos, avisos, botones de fin, créditos ----------
export function hashtag(t) { const h = $('#hashtag'); h.textContent = t || ''; h.classList.toggle('on', !!t); }
export async function rotulo(titulo, sub = '', ms = 3200) {
  const l = $('#lower3'); const d = document.createElement('div'); d.className = 'l3'; d.innerHTML = `<b>${esc(titulo)}</b>${sub ? `<span>${esc(sub)}</span>` : ''}`;
  l.appendChild(d); l.classList.remove('hidden'); await Dt(ms); d.classList.add('out'); setTimeout(() => { d.remove(); if (!l.children.length) l.classList.add('hidden'); }, 400);
}
export function limpiarRotulos() { $('#lower3').innerHTML = ''; $('#lower3').classList.add('hidden'); }
export function toast(t, ms = 2500) { const e = $('#toast'); e.textContent = t; e.classList.remove('hidden'); clearTimeout(toast._t); toast._t = setTimeout(() => e.classList.add('hidden'), ms); }
export function acciones(lista) { const a = $('#actions'); a.innerHTML = ''; (lista || []).forEach(x => { const b = document.createElement('button'); b.className = 'abtn ' + (x.cls || ''); b.textContent = x.label; b.onclick = e => { e.stopPropagation(); me.play('tecla'); a.innerHTML = ''; x.fn(); }; a.appendChild(b); }); }
export async function rodarCreditos(bloques, ms = 14000) {
  const c = $('#credits'), r = $('#creditsRoll'); r.innerHTML = bloques.map(([t, l]) => `<h4>${esc(t)}</h4>${l.map(esc).join('<br>')}`).join('');
  c.classList.remove('hidden', 'fadeout'); r.style.transition = 'none'; r.style.transform = 'translateY(0)'; r.offsetHeight;
  const dur = ms / VEL(); r.style.transition = `transform ${dur}ms linear`; r.style.transform = `translateY(calc(-100% - ${c.clientHeight}px))`;
  try { await Dt(ms); } finally { c.classList.add('hidden'); }
}
export function ocultarCreditos() { $('#credits').classList.add('hidden'); }
