// Las pruebas de La ruleta de la suerte: prueba de velocidad, panel con ruleta (girar / comprar vocal / resolver),
// panel con crono y ruleta final. IA sencilla de los rivales. Todo cancelable con ☰ (token de core.js).
import { me } from '../lib/audio.js';
import { $, esc, euros, baraja, azar, Dt, Zi, VEL, hud, banner, habla, hablaC, di, textoGrande, rotulo, toast, Reloj, check } from './core.js';
import { cfg } from '../cfg.js';
import { F, FC, CONC, NOMBRE_LETRA } from './frases.js';
import { nuevoPanel, dibujarPanel, CONSONANTES, VOCALES, cuenta, quedan, celdasDe, celdasLetra, fraccion, normFrase, letrasTotales, letrasVistas } from './panel.js';
import { GAJOS } from '../plato/rueda.js';
import DATA from '../data/paneles.json';

const FREC_C = 'SRNDLCTMPBGVYQHFZJÑXKW'.split(''); const FREC_V = 'AEOIU'.split('');
export const temaFrase = t => `El tema es: ${t}.`;
export const letraVoz = L => `La ${NOMBRE_LETRA[L] || L}.`;

// ---------- banco de paneles ----------
export function bancoPaneles(temaEsp) {
  const extra = (window.PANELES_EXTRA && window.PANELES_EXTRA.paneles) || [];
  const base = [...DATA.paneles, ...extra.filter(p => p && p.f && p.tema).map(p => ({ f: String(p.f).toUpperCase(), tema: String(p.tema).toUpperCase() }))];
  return { base, esp: (temaEsp && DATA.especiales[temaEsp]) || [] };
}
function elegirPanel(G, { max = 99 } = {}) {
  const { base, esp } = bancoPaneles(G.T.paneles);
  const libres = l => l.filter(p => !G.usados.has(p.f) && p.f.length <= max);
  let l = libres(esp); if (!l.length || Math.random() < 0.45) l = libres(base); if (!l.length) { G.usados.clear(); l = base.filter(p => p.f.length <= max); }
  const p = azar(l); G.usados.add(p.f); return p;
}

// ---------- panel en pantalla (2D) + 3D ----------
function pintar(G, E) { G.P.panel(E); const c = $('#panel2d canvas'); if (c) dibujarPanel(c.getContext('2d'), c.width, c.height, E, G.P.estilo, { franja: 0.18, t: performance.now() / 1000 }); }
function mostrarPanel(G, E, v = true) { $('#panel2d').classList.toggle('hidden', !v); if (v) pintar(G, E); }
export function ocultarPanel() { $('#panel2d').classList.add('hidden'); cerrarJugada(); }
async function destapar(G, E, L) {
  const cs = celdasDe(E, L); if (!cs.length) return 0;
  if (Math.random() < 0.5) di(azar(FC.destapa), 1400, 'copre', cfg.copresentadora);
  for (const k of cs) { E.luz.add(k); G.P.copreA(+k.split(',')[1]); pintar(G, E); me.play('ding'); await Dt(260); }
  await Dt(300); for (const k of cs) { E.luz.delete(k); E.vis.add(k); pintar(G, E); me.play('volteo'); await Dt(140); }
  E.rev.add(L); pintar(G, E); return cs.length;
}

// ---------- marcadores ----------
export function refrescar(G, act = G.activo ?? -1) {
  hud.set(G, act);
  G.conc.forEach((c, i) => G.P.setMarcador(i, { nombre: c.nombre, texto: euros(c.ronda || 0), activo: i === act }));
}

// ---------- interfaz de la jugada (botones, teclado de letras, resolver, pulsador) ----------
const J = () => $('#jugada');
export function cerrarJugada() { const j = J(); if (j) { j.innerHTML = ''; j.className = 'hidden'; } }
function botonera(lista) {
  const j = J(); j.className = 'botonera'; j.innerHTML = '';
  return Zi(new Promise(res => { lista.forEach(x => { const b = document.createElement('button'); b.className = 'jbtn ' + (x.cls || ''); b.innerHTML = x.label; b.disabled = !!x.disabled; b.onclick = e => { e.stopPropagation(); me.play('tecla'); cerrarJugada(); res(x.v); }; j.appendChild(b); }); })).finally(cerrarJugada);
}
function teclado(G, permitidas, titulo) {
  const j = J(); j.className = 'teclado'; j.innerHTML = `<div class="jt">${esc(titulo)}</div><div class="teclas"></div>`;
  const t = j.querySelector('.teclas'); const ABCs = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  return Zi(new Promise(res => {
    ABCs.forEach(L => { const b = document.createElement('button'); b.className = 'tecla' + (VOCALES.includes(L) ? ' voc' : ''); b.textContent = L; b.disabled = !permitidas.includes(L); b.onclick = e => { e.stopPropagation(); me.play('tecla'); res(L); }; t.appendChild(b); });
    const kb = e => { const L = e.key.toUpperCase(); if (permitidas.includes(L)) { e.preventDefault(); res(L); } }; addEventListener('keydown', kb); G.limpiar.push(() => removeEventListener('keydown', kb));
  })).finally(() => { G.limpiar.splice(0).forEach(f => f()); cerrarJugada(); });
}
function cajaResolver(G, seg = 20) {
  const j = J(); j.className = 'resolver'; j.innerHTML = `<div class="jt">✍️ Escribe la solución del panel</div><div class="fila"><input id="solucion" autocomplete="off" spellcheck="false" placeholder="Escribe aquí…"><button class="jbtn gold" id="btnSol">Resolver</button><button class="jbtn" id="btnRend">No lo sé</button></div><div class="jcrono"></div>`;
  const i = j.querySelector('#solucion'); setTimeout(() => i.focus(), 50);
  const r = new Reloj(seg, s => { const c = j.querySelector('.jcrono'); if (c) c.textContent = '⏱️ ' + Math.ceil(s); }); r.start();
  return Zi(Promise.race([new Promise(res => { j.querySelector('#btnSol').onclick = e => { e.stopPropagation(); res(i.value); }; j.querySelector('#btnRend').onclick = e => { e.stopPropagation(); res(''); }; i.onkeydown = e => { e.stopPropagation(); if (e.key === 'Enter') res(i.value); }; }), r.fin.then(() => '')])).finally(() => { r.stop(); cerrarJugada(); });
}
const humanoJuega = (G, c) => c.humano && !G.auto;

// ---------- IA ----------
function iaConsonante(G, E, c) {
  const libres = CONSONANTES.filter(l => !E.usadas.has(l)); const presentes = quedan(E, CONSONANTES).filter(l => !E.usadas.has(l));
  if (presentes.length && Math.random() < c.habil) return FREC_C.find(l => presentes.includes(l)) || presentes[0];
  return FREC_C.find(l => libres.includes(l) && Math.random() < 0.6) || libres[0];
}
function iaVocal(E, c) { const libres = VOCALES.filter(l => !E.usadas.has(l)); const pres = libres.filter(l => cuenta(E, l) > 0); if (pres.length && Math.random() < 0.85) return FREC_V.find(l => pres.includes(l)); return libres[0]; }
function iaSabe(E, c) { const f = fraccion(E); return Math.random() < Math.max(0, Math.min(0.97, (f - 0.3) * 1.6 * (0.6 + c.habil * 0.6))); }

// ---------- resolver ----------
async function resolver(G, E, c, seg = 20) {
  if (humanoJuega(G, c)) { const t = await cajaResolver(G, seg); if (!t) { di('…', 1000, c.fig, c.nombre); return false; } di(t.toUpperCase(), 2500, c.fig, c.nombre); return normFrase(t) === normFrase(E.f); }
  await hablaC(c, azar(CONC.resuelvo));
  return letrasVistas(E) >= letrasTotales(E) || iaSabe(E, c) || (G.auto && c.humano && fraccion(E) > 0.4);
}
async function panelResuelto(G, E, c) {
  E.resuelto = true; pintar(G, E); me.play('resuelto'); me.play('aplausos'); G.P.celebrar && fraccion(E) < 0.5 && G.P.celebrar();
  await Promise.all([cfg.lee && cfg.voz ? me.say(E.f, 'davefx', { pregunta: true }) : Dt(800), Dt(1200)]);
  await habla(F.correcto); await hablaC(c, azar(CONC.bien));
}

// ---------- PRUEBA DE VELOCIDAD ----------
export async function velocidad(G, premio, { titulo = 'PRUEBA DE VELOCIDAD', explicar = F.velocidad } = {}) {
  const p = elegirPanel(G); const E = nuevoPanel(p); E.vis = new Set(); refrescar(G, -1);
  await banner(titulo, `Premio: ${euros(premio)}`); mostrarPanel(G, E); G.cam('panel');
  await habla(explicar); await habla(temaFrase(p.tema));
  const orden = baraja(celdasLetra(E)); const bloq = new Set(); let ganador = null;
  const H = G.conc.find(c => humanoJuega(G, c));
  let pulsado = null; const pulsar = c => { if (!pulsado && !bloq.has(c)) pulsado = c; };
  const btn = () => { const j = J(); if (!H || bloq.has(H)) { cerrarJugada(); return; } j.className = 'pulsador'; j.innerHTML = '<button class="jbtn pulsar">🔔 ¡PULSAR!<small>(o barra espaciadora)</small></button>'; j.querySelector('button').onclick = e => { e.stopPropagation(); pulsar(H); }; };
  const kb = e => { if (e.code === 'Space' && H && document.activeElement?.id !== 'solucion') { e.preventDefault(); pulsar(H); } }; addEventListener('keydown', kb);
  try {
    me.music('velocidad'); btn();
    while (orden.length && !ganador) {
      for (let k = 0; k < 6 && !pulsado; k++) { await Dt(130); for (const c of G.conc) if (!humanoJuega(G, c) && !bloq.has(c) && !pulsado && Math.random() < Math.max(0, fraccion(E) - 0.42) * 0.22 * (0.5 + c.habil)) pulsar(c); }
      if (pulsado) {
        const c = pulsado; me.stopMusic(); me.play('pulsador'); cerrarJugada(); G.activo = G.conc.indexOf(c); refrescar(G); G.cam('conc', G.activo);
        if (humanoJuega(G, c)) await habla(F.pulsa);
        const ok = await resolver(G, E, c, 15);
        if (ok) { console.info('[ruleta] velocidad →', c.nombre, '+' + premio); ganador = c; c.dinero += premio; await panelResuelto(G, E, c); refrescar(G); break; }
        me.play('fallo'); await habla(F.incorrecto); bloq.add(c); pulsado = null; G.activo = -1; refrescar(G);
        if (bloq.size >= G.conc.length) break; G.cam('panel'); me.music('velocidad'); btn(); continue;
      }
      const k = orden.shift(); E.vis.add(k); pintar(G, E); me.play('ding');
    }
    if (!ganador) { me.stopMusic(); E.resuelto = true; pintar(G, E); await habla(F.nadie); if (cfg.lee && cfg.voz) await me.say(E.f, 'davefx', { pregunta: true }); }
  } finally { removeEventListener('keydown', kb); cerrarJugada(); me.stopMusic(); }
  await Dt(1200); mostrarPanel(G, E, false); G.activo = -1; refrescar(G, -1);
  return ganador;
}

// ---------- PANEL CON RULETA ----------
const precioVocal = G => 50 * G.factor;
async function decidir(G, E, c, crono) {
  const consQ = quedan(E, CONSONANTES).length > 0, vocLibres = VOCALES.some(l => !E.usadas.has(l)), puedeVocal = vocLibres && c.ronda >= precioVocal(G);
  if (letrasVistas(E) >= letrasTotales(E)) return 'resolver';
  if (humanoJuega(G, c)) {
    const lista = [{ label: '🎡 Girar la ruleta', v: 'girar', cls: 'gold', disabled: !consQ }, { label: `🔤 Comprar vocal <small>${euros(precioVocal(G))}</small>`, v: 'vocal', disabled: !puedeVocal }, { label: '💡 Resolver', v: 'resolver' }];
    const p = botonera(lista); if (!crono) return p;
    return Promise.race([p, crono.fin.then(() => 'tiempo')]).finally(cerrarJugada);
  }
  await Dt(700);
  if (!consQ && !puedeVocal) return 'resolver';
  if (iaSabe(E, c) && fraccion(E) > 0.45) return 'resolver';
  if (puedeVocal && (Math.random() < 0.3 || !consQ)) return 'vocal';
  return consQ ? 'girar' : 'resolver';
}
async function pedirLetra(G, E, c, tipo) {
  const lista = tipo === 'vocal' ? VOCALES : CONSONANTES; const permit = lista.filter(l => !E.usadas.has(l));
  let L;
  if (humanoJuega(G, c)) L = await teclado(G, permit, tipo === 'vocal' ? '🔤 Elige una vocal' : '🔤 Elige una consonante');
  else { await Dt(500); L = tipo === 'vocal' ? iaVocal(E, c) : iaConsonante(G, E, c); }
  di(`¡La ${L}!`, 1800, c.fig, c.nombre); if (cfg.voz) await Zi(Promise.race([me.say(letraVoz(L), c.voz || 'sharvard'), Dt(2500)])); else await Dt(600);
  return L;
}
async function perderTurno(G, c, frase) {
  if (frase) await habla(frase);
  if (c.comodines > 0) { c.comodines--; refrescar(G); me.play('comodin'); await habla(F.usaComodin); return false; }
  me.play('fallo'); return true;
}
async function turno(G, E, c, { crono = false } = {}) {
  for (;;) {
    G.activo = G.conc.indexOf(c); refrescar(G); G.P.rueda.activar(G.activo, c.color);
    let reloj = null; if (crono && !G.ilimitado) { reloj = new Reloj(10, s => hud.timer(s, 4)); reloj.start(); }
    let acc;
    try { acc = await decidir(G, E, c, reloj); } finally { if (reloj && acc !== 'tiempo') reloj.stop(); }
    if (acc === 'tiempo') { hud.sinTimer(); me.play('fallo'); await habla(F.cronoFin); return 'pasa'; }
    if (reloj) { reloj.stop(); hud.sinTimer(); }
    if (acc === 'resolver') {
      const ok = await resolver(G, E, c); if (ok) { await panelResuelto(G, E, c); return 'resuelto'; }
      me.play('fallo'); await habla(F.incorrecto); return 'pasa';
    }
    if (acc === 'vocal') {
      if (!humanoJuega(G, c)) await hablaC(c, azar(CONC.vocal)); else await habla(F.vocal);
      c.ronda -= precioVocal(G); refrescar(G); me.play('caja');
      const L = await pedirLetra(G, E, c, 'vocal'); const ya = E.usadas.has(L); E.usadas.add(L); const n = ya ? 0 : cuenta(E, L);
      if (n > 0) { await habla(F.hayN[Math.min(7, n - 1)]); await destapar(G, E, L); continue; }
      if (await perderTurno(G, c, ya ? F.yaDicha : F.noHay)) return 'pasa'; continue;
    }
    // girar
    if (!humanoJuega(G, c)) await hablaC(c, azar(CONC.giro));
    G.cam('ruleta'); const gi = await G.api.girar(c); const g = GAJOS[gi]; G.cam('conc', G.activo);
    const valor = (g.v ?? 0) * G.mult * G.factor;
    if (g.tipo === 'quiebra') { me.play('quiebra'); me.play('ooh'); c.ronda = 0; refrescar(G); if (await perderTurno(G, c, F.quiebra)) return 'pasa'; continue; }
    if (g.tipo === 'pierde') { me.play('ooh'); if (await perderTurno(G, c, F.pierde)) return 'pasa'; continue; }
    if (g.tipo === 'comodin') { c.comodines++; me.play('comodin'); refrescar(G); await habla(F.comodin); }
    else if (g.tipo === 'num') await habla(`${valor} ${G.factor > 1 ? 'pesetas' : 'euros'}.`);
    else await habla(F[g.tipo]);
    if (humanoJuega(G, c)) await habla(F.consonante);
    const L = await pedirLetra(G, E, c, 'consonante'); const ya = E.usadas.has(L); E.usadas.add(L); const n = ya ? 0 : cuenta(E, L);
    if (n > 0) {
      await habla(F.hayN[Math.min(7, n - 1)]); await destapar(G, E, L);
      if (g.tipo === 'num' || g.tipo === 'comodin') c.ronda += valor * n;
      else if (g.tipo === 'x2') c.ronda = Math.max(c.ronda * 2, 0);
      else if (g.tipo === 'mitad') c.ronda = Math.floor(c.ronda / 2);
      else if (g.tipo === 'melo') { const r = G.conc.filter(x => x !== c).sort((a, b) => b.ronda - a.ronda)[0]; c.ronda += r.ronda; if (r.ronda) toast(`💰 ${c.nombre} se queda los ${euros(r.ronda)} de ${r.nombre}`); r.ronda = 0; }
      else if (g.tipo === 'selodoy') { const r = G.conc.filter(x => x !== c).sort((a, b) => a.ronda - b.ronda)[0]; r.ronda += c.ronda; if (c.ronda) toast(`🎁 ${c.nombre} le da ${euros(c.ronda)} a ${r.nombre}`); c.ronda = 0; }
      me.play('caja'); refrescar(G);
      if (!quedan(E, CONSONANTES).length && letrasVistas(E) < letrasTotales(E)) await habla(F.sinConsonantes);
      continue;
    }
    if (await perderTurno(G, c, ya ? F.yaDicha : F.noHay)) return 'pasa';
  }
}
export async function panel(G, { num = 1, crono = false } = {}) {
  const p = elegirPanel(G); const E = nuevoPanel(p);
  G.conc.forEach(c => { c.ronda = 0; }); refrescar(G, -1);
  await banner(crono ? 'PANEL CON CRONO' : `PANEL ${num}`, p.tema);
  mostrarPanel(G, E); G.cam('panel');
  if (crono) await habla(F.panelCrono); else if (num === 1 || G.entreno) await habla(F.panel);
  await habla(temaFrase(p.tema));
  me.music('panel', { cancion: true });
  let t = G.turno % G.conc.length; let ganador = null; let vueltas = 0;
  while (!ganador && vueltas < 60) {
    const c = G.conc[t]; G.cam('conc', t);
    if (humanoJuega(G, c)) await habla(F.turnoTuyo); else di(`Te toca, ${c.nombre}.`, 1500);
    const r = await turno(G, E, c, { crono });
    if (r === 'resuelto') { ganador = c; break; }
    t = (t + 1) % G.conc.length; vueltas++;
  }
  me.stopMusic();
  console.info('[ruleta] panel', num, crono ? 'crono' : '', '→', ganador ? ganador.nombre + ' +' + ganador.ronda : 'nadie', G.conc.map(c => c.nombre + ':' + c.dinero + '/' + c.ronda).join(' '));
  if (ganador) { const gan = Math.max(ganador.ronda, 0); ganador.dinero += gan; G.conc.forEach(c => { c.ronda = 0; }); await rotulo(`${ganador.nombre} gana ${euros(gan)}`, 'Panel resuelto', 2200); }
  G.activo = -1; G.P.rueda.activar(-5); refrescar(G, -1); hud.sinTimer(); await Dt(600); mostrarPanel(G, E, false);
  G.turno = (t + 1) % G.conc.length;
  return ganador;
}

// ---------- RULETA FINAL ----------
export async function ruletaFinal(G, c) {
  const premios = baraja(G.T.premios || G.premiosBase);
  G.activo = G.conc.indexOf(c); refrescar(G); await banner('RULETA FINAL', c.nombre);
  G.cam('ruleta'); G.P.rueda.setFinal(true); G.P.rueda.activar(G.activo, c.color);
  await habla(F.final);
  const gi = await G.api.girar(c); const premio = premios[gi % premios.length];
  me.play('bote'); await habla(F.finalSobre); G.P.rueda.setFinal(false);
  const p = elegirPanel(G, { max: 28 }); const E = nuevoPanel(p); mostrarPanel(G, E); G.cam('panel');
  await habla(temaFrase(p.tema)); di(FC.final, 2500, 'copre', cfg.copresentadora); await Zi(me.say(FC.final, 'daniela'));
  await habla(F.finalLetras);
  const elegidas = [];
  for (let k = 0; k < 5; k++) { const tipo = k < 4 ? 'consonante' : 'vocal'; const L = await pedirLetra(G, E, c, tipo); E.usadas.add(L); elegidas.push(L); }
  for (const L of elegidas) if (cuenta(E, L)) await destapar(G, E, L);
  await habla(F.finalTiempo); me.music('velocidad');
  let ok;
  if (humanoJuega(G, c)) { const t = await cajaResolver(G, G.ilimitado ? 600 : 10); ok = normFrase(t) === normFrase(E.f); if (t) di(t.toUpperCase(), 2500, c.fig, c.nombre); }
  else { await Dt(2500); ok = iaSabe(E, c) || (G.auto && fraccion(E) > 0.35) || Math.random() < 0.35; await hablaC(c, azar(CONC.resuelvo)); }
  me.stopMusic(); E.resuelto = true; pintar(G, E);
  if (cfg.lee && cfg.voz) await me.say(E.f, 'davefx', { pregunta: true });
  if (ok) { me.play('resuelto'); me.play('ovacion'); await habla(F.finalGana); } else { me.play('ooh'); await habla(F.finalPierde); }
  G.cam('coche'); await Dt(800);
  await habla(`En el sobre había… ${premio.t.replace(/[^\p{L}\p{N} .,!¡€]/gu, '').trim()}.`);
  await textoGrande(`✉️ ${esc(premio.t)}`, ok ? '¡PREMIO CONSEGUIDO!' : 'Esta vez no ha podido ser', 2600);
  if (ok) { G.P.celebrar(); me.play('ovacion'); if (premio.coche) { G.cam('coche'); await habla(F.coche); } else if (premio.v) c.dinero += premio.v; }
  mostrarPanel(G, E, false); return { ok, premio };
}
