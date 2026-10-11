// Gestor de audio con la misma API que el APK de referencia (play / music / voz / stopAll).
// Sin audios del programa real: usa lo que el usuario suba (IndexedDB) o ponga en audio/, y si no hay,
// efectos y bucles sintetizados por el propio juego. Las voces son Piper TTS pregeneradas (voz/).
import { audioCtx, synth, findAudioFile, recursoEpoca } from './media.js';
import { decir, callar, configurarVoces } from './voces.js';
import { cfg } from '../cfg.js';
const PUBLICO = new Set(['aplausos', 'risas', 'ovacion', 'ooh']);
let canciones = [];
const vivos = new Set(); let musica = null; let master = null;
const out = () => { const c = audioCtx(); if (!master) { master = c.createGain(); master.connect(c.destination); } return [c, master]; };
configurarVoces({ activo: () => cfg.voz, volumen: () => 1, rapida: () => cfg.leeVel === 'rapida', velocidad: () => (window.__VEL || 1) });

const FX = {
  tecla: (c, d, t) => synth.tone(c, d, t, 900, 0.05, 'square', 0.05),
  pop: (c, d, t) => { synth.tone(c, d, t, 500, 0.08, 'sine', 0.2); synth.tone(c, d, t + 0.05, 900, 0.1, 'sine', 0.15); },
  // bombilla que se enciende: «ding» brillante con chispa eléctrica
  acierto: (c, d, t) => { synth.tone(c, d, t, 1046, 0.18, 'triangle', 0.22); synth.tone(c, d, t + 0.09, 1568, 0.45, 'sine', 0.18); synth.hat(c, d, t, 0.08); },
  // bombilla que se rompe: golpe + cristales
  fallo: (c, d, t) => { synth.kick(c, d, t, 0.35); const n = c.createBufferSource(); n.buffer = synth.noiseBuffer(c, 0.6); const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 3500; const g = c.createGain(); g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.55); n.connect(f).connect(g).connect(d); n.start(t); for (let i = 0; i < 8; i++) synth.tone(c, d, t + 0.05 + Math.random() * 0.4, 2500 + Math.random() * 3000, 0.08, 'sine', 0.05); synth.tone(c, d, t + 0.1, 140, 0.5, 'sawtooth', 0.06); },
  rayo: (c, d, t) => { const n = c.createBufferSource(); n.buffer = synth.noiseBuffer(c, 0.5); const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.setValueAtTime(5000, t); f.frequency.exponentialRampToValueAtTime(300, t + 0.45); const g = c.createGain(); g.gain.setValueAtTime(0.45, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5); n.connect(f).connect(g).connect(d); n.start(t); synth.tone(c, d, t, 60, 0.4, 'sawtooth', 0.1); },
  pulsador: (c, d, t) => { synth.tone(c, d, t, 330, 0.25, 'square', 0.12); synth.tone(c, d, t, 495, 0.25, 'square', 0.08); },
  comodin: (c, d, t) => { [784, 988, 1175, 1568].forEach((f, i) => synth.tone(c, d, t + i * 0.07, f, 0.25, 'triangle', 0.15)); },
  tictac: (c, d, t) => synth.tone(c, d, t, 1500, 0.03, 'square', 0.05),
  aplausos: (c, d, t) => synth.applause(c, d, t, 3, 0.4),
  ovacion: (c, d, t) => synth.applause(c, d, t, 5, 0.55),
  ooh: (c, d, t) => { const o = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 700; o.type = 'sawtooth'; o.frequency.setValueAtTime(260, t); o.frequency.linearRampToValueAtTime(170, t + 1); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.15); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1); o.connect(f).connect(g).connect(d); o.start(t); o.stop(t + 1.2); },
  risas: (c, d, t) => { for (let i = 0; i < 10; i++) synth.tone(c, d, t + i * 0.13, 300 + Math.random() * 200, 0.1, 'sawtooth', 0.03); synth.applause(c, d, t, 1.6, 0.15); },
  badumtss: (c, d, t) => { synth.kick(c, d, t, 0.4); synth.kick(c, d, t + 0.16, 0.4); synth.hat(c, d, t + 0.35, 0.2); },
  banner: (c, d, t) => { synth.chord(c, d, t, [392, 494, 587], 0.6, 0.06); FX.rayo(c, d, t); },
  bote: (c, d, t) => { [523, 659, 784, 1046].forEach((f, i) => synth.tone(c, d, t + i * 0.12, f, 0.3, 'triangle', 0.15)); },
  // clic de un pivote de la ruleta contra la flecha (generado: golpe corto de ruido filtrado + tono seco)
  clic: (c, d, t) => { const n = c.createBufferSource(); n.buffer = synth.noiseBuffer(c, 0.03); const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2400 + Math.random() * 600; f.Q.value = 4; const g = c.createGain(); g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.03); n.connect(f).connect(g).connect(d); n.start(t); synth.tone(c, d, t, 1800, 0.015, 'square', 0.05); },
  ding: (c, d, t) => { synth.tone(c, d, t, 1318, 0.25, 'sine', 0.16); synth.tone(c, d, t, 2637, 0.12, 'sine', 0.05); },
  volteo: (c, d, t) => synth.tone(c, d, t, 700, 0.06, 'triangle', 0.08),
  caja: (c, d, t) => { [1568, 2093].forEach((f, i) => synth.tone(c, d, t + i * 0.08, f, 0.2, 'triangle', 0.12)); synth.hat(c, d, t, 0.1); },
  resuelto: (c, d, t) => { [523, 659, 784, 1046, 1318].forEach((f, i) => synth.tone(c, d, t + i * 0.09, f, 0.5, 'triangle', 0.13)); synth.chord(c, d, t + 0.45, [523, 659, 784], 1.2, 0.05); },
  quiebra: (c, d, t) => { [440, 370, 311, 220].forEach((f, i) => synth.tone(c, d, t + i * 0.16, f, 0.25, 'sawtooth', 0.08)); synth.kick(c, d, t + 0.64, 0.4); },
  tension: (c, d, t) => { for (let i = 0; i < 6; i++) synth.tone(c, d, t + i * 0.18, 110 + i * 15, 0.2, 'sawtooth', 0.05); },
};
// bucles sencillos generados (no imitan ninguna sintonía)
const LOOPS = {
  menu: { bpm: 118, notas: [220, 277, 330, 277, 247, 311, 370, 311], bajo: 110 },
  tension: { bpm: 138, notas: [110, 110, 131, 110, 98, 110, 147, 131], bajo: 55 },
  trilha: { bpm: 122, notas: [196, 247, 294, 247, 220, 262, 330, 262], bajo: 98 },
  musical: { bpm: 104, notas: [262, 330, 392, 523, 392, 330, 294, 349], bajo: 131 },
  velocidad: { bpm: 150, notas: [330, 392, 440, 392, 330, 294, 262, 294], bajo: 82 },
  panel: { bpm: 112, notas: [262, 330, 392, 330, 294, 349, 440, 349], bajo: 131 },
  diabolico: { bpm: 160, notas: [147, 147, 175, 147, 131, 147, 196, 175], bajo: 73 },
};

export const me = {
  aplicarNiveles() { if (musica?.a) musica.a.volume = cfg.music ? cfg.musicVol : 0; if (musica?.g) musica.g.gain.value = cfg.music ? 0.5 * cfg.musicVol : 0; },
  async play(k, { volume = 1 } = {}) {
    const pub = PUBLICO.has(k); if (pub ? !cfg.publico : !cfg.sfx) return null;
    volume *= pub ? cfg.publicoVol : cfg.sfxVol;
    const url = await findAudioFile(k);
    if (url) { const a = new Audio(url); a.volume = Math.min(1, volume); vivos.add(a); a.onended = () => vivos.delete(a); a.play().catch(() => {}); return a; }
    try { const [c, d0] = out(); const d = c.createGain(); d.gain.value = volume; d.connect(d0); FX[k]?.(c, d, c.currentTime + 0.01); setTimeout(() => d.disconnect(), 7000); } catch (e) { /* sin audio */ }
    return null;
  },
  /** Música: la subida para esa etapa, una de «Mis canciones» (musical), audio/musica_<k>.mp3 o un bucle sintetizado */
  async music(k, { etapa = null, cancion = false } = {}) {
    this.stopMusic(); const mia = {}; musica = mia;
    let url = null;
    if (etapa) { const r = await recursoEpoca('musica', etapa); if (r) url = r.url; }
    if (!url && cancion && canciones.length) url = canciones[Math.floor(Math.random() * canciones.length)];
    if (!url) url = await findAudioFile('musica_' + k);
    if (musica !== mia) return;
    if (url) { const a = new Audio(url); a.loop = k !== 'cabecera'; a.volume = cfg.music ? cfg.musicVol : 0; mia.a = a; a.play().catch(() => {}); return; }
    const L = LOOPS[k]; if (!L) return;
    try {
      const [c, d] = out(); const g = c.createGain(); g.gain.value = cfg.music ? 0.5 * cfg.musicVol : 0; g.connect(d); let t = c.currentTime + 0.05, i = 0; const paso = 60 / L.bpm / 2;
      mia.iv = setInterval(() => { while (t < c.currentTime + 0.4) { synth.tone(c, g, t, L.notas[i % L.notas.length], paso * 0.9, 'triangle', 0.05); if (i % 4 === 0) { synth.kick(c, g, t, 0.12); synth.tone(c, g, t, L.bajo, paso * 1.8, 'sawtooth', 0.03); } if (i % 2) synth.hat(c, g, t, 0.015); t += paso; i++; } }, 120);
      mia.g = g;
    } catch (e) { /* */ }
  },
  hayCanciones: () => canciones.length > 0,
  setCanciones(l) { canciones = l || []; },
  stopMusic() { const m = musica; musica = null; if (!m) return; if (m.a) m.a.pause(); if (m.iv) { clearInterval(m.iv); try { m.g.disconnect(); } catch (e) { /* */ } } },
  /** Voz: frase pregenerada con Piper (voz/<hash>.mp3) o, si no está, speechSynthesis con voz masculina */
  say(texto, voz = 'davefx', o = {}) { if (window.__frasesUsadas) window.__frasesUsadas.add(JSON.stringify({ v: voz, t: String(texto).trim(), q: !!o.pregunta })); return decir(String(texto || '').replace(/<[^>]+>/g, ''), { voz, ...o }); },
  stopVoice() { callar(); },
  stopAll() { vivos.forEach(a => a.pause()); vivos.clear(); this.stopMusic(); this.stopVoice(); },
};
