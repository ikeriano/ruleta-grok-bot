// Flujos de juego con la organización del APK: Programa completo, Clásico (La ruleta de la fortuna), Entrenamiento.
import { me } from '../lib/audio.js';
import { $, esc, euros, azar, Dt, Zi, hud, banner, habla, hablaC, di, textoGrande, hashtag, rotulo, acciones, rodarCreditos, ocultarCreditos, setMoneda, toast } from './core.js';
import { cfg } from '../cfg.js';
import { F, FC, CHISTES, PROFESIONES_JUEGO, CONC } from './frases.js';
import * as R from './rondas.js';
import { THEMES, PREMIOS_BASE } from '../temas.js';
import { COLORES_CONC } from '../plato/plato.js';
import { GAJOS } from '../plato/rueda.js';
import { CREDITOS_VOCES } from '../lib/voces.js';

export const ETAPAS = {
  fortuna: { id: 'fortuna', nombre: 'La ruleta de la fortuna (1990-1997)', corto: 'Fortuna · 1990', escenario: 'fortuna', moneda: 'pts', factor: 100, nota: 'Plató retro de los 90: telón rojo, columnas doradas, rótulo de bombillas y suelo granate con estrellas. Se juega en pesetas.' },
  a2006: { id: 'a2006', nombre: 'Antena 3 (2006-2013) · plató azul', corto: 'Antena 3 · 2006', escenario: 'a2006', nota: 'Fondo azul, anillos blancos colgantes con letras moradas, paredes de LED de colores, escaleras amarillas y suelo azul con espirales.' },
  piramides: { id: 'piramides', nombre: 'Plató de las pirámides · suelo dorado', corto: 'Pirámides · oro', escenario: 'piramides', nota: 'Paredes de pirámides blancas, azules y verdes, suelo dorado con líneas blancas, panel con marco de bombillas y banda en la grada.' },
  pirazul: { id: 'pirazul', nombre: 'Plató de las pirámides · suelo azul', corto: 'Pirámides · azul', escenario: 'pirazul', nota: 'La misma escenografía de pirámides con el suelo azul brillante y líneas blancas.' },
  verano: { id: 'verano', nombre: 'Plató de verano', corto: 'Verano', escenario: 'verano', nota: 'Pirámides con rótulo de neón naranja, olas azules en el suelo, palmeras, sombrilla y suelo reflectante (también se pone solo en el especial de verano).' },
  neon: { id: 'neon', nombre: 'Plató actual · aros de neón', corto: 'Neón · actual', escenario: 'neon', nota: 'Suelo negro con aros de neón amarillos, azules, naranjas y rojos, escaleras iluminadas, panel morado con marco de neón y ruleta con barandilla.' },
};
Object.values(ETAPAS).forEach(e => { e.archivosMusica = ['cabecera_' + e.id, 'cabecera']; e.archivosLogo = ['logo_' + e.id, 'logo']; e.factor = e.factor || 1; e.moneda = e.moneda || '€'; });

export const AYUDA = `<p><b>Objetivo:</b> resolver los paneles de letras y acabar el programa con más dinero que los rivales para jugar la <b>Ruleta final</b>.</p>
<p><b>El panel</b> tiene 52 casillas (filas de 12, 14, 14 y 12) y una franja con el <b>tema</b> o pista.</p>
<p><b>En tu turno</b> puedes: 🎡 <b>Girar la ruleta</b> y decir una consonante (cobras el valor del gajo por cada vez que aparezca), 🔤 <b>Comprar una vocal</b> por 50 € o 💡 <b>Resolver</b> el panel escribiendo la solución. Si la letra no está, pasa el turno.</p>
<p><b>Los gajos:</b> cifras de 0 a 200 €, <b>Quiebra</b> (pierdes lo del panel), <b>Pierde turno</b>, <b>Comodín</b> (te salva una vez de perder el turno), <b>X2</b> (duplica lo que llevas), <b>1/2</b> (lo divide), <b>Me lo quedo</b> (te quedas el dinero de un rival) y <b>Se lo doy</b> (regalas el tuyo).</p>
<p>Solo cobra el dinero de un panel <b>quien lo resuelve</b>.</p>
<p><b>Prueba de velocidad:</b> las letras se destapan solas. Pulsa 🔔 (o la barra espaciadora) y escribe la solución. Si fallas, ya no puedes pulsar en ese panel.</p>
<p><b>Panel con crono:</b> cada jugada tiene 10 segundos.</p>
<p><b>Ruleta final:</b> el ganador gira la ruleta de los sobres, elige 4 consonantes y 1 vocal y tiene 10 segundos para resolver. En el sobre puede haber dinero, un viaje… ¡o el coche!</p>
<p><b>Girar:</b> mantén pulsado «Girar» para cargar la fuerza y suelta, o <b>arrastra la ruleta</b> con el dedo o el ratón.</p>
<p><b>Controles 3D:</b> ☰ menú · 👁 cámara · 💡 luces · «Saltar ⏭» pasa la cabecera, los monólogos y la despedida. En «Explorar el plató»: joystick o WASD.</p>`;

export const PRUEBAS_ENTRENO = {
  panel: ['Panel con ruleta', 'Gira, di consonantes, compra vocales y resuelve'], velocidad: ['Prueba de velocidad', 'Pulsa antes que nadie'], crono: ['Panel con crono', '10 segundos por jugada'],
  final: ['Ruleta final', '4 consonantes + 1 vocal y 10 segundos'], girar: ['Girar la ruleta', 'Practica el giro: botón o arrastre'],
};

export function creditos(G) {
  const cs = G ? G.conc : PROFESIONES_JUEGO.slice(0, 3);
  return [['Presentado por', [`${cfg.presentador || 'Tito Giros'} (presentador virtual)`]], ['Copresentadora', [`${cfg.copresentadora || 'Lola Letras'} (copresentadora virtual)`]],
    ['Concursantes', cs.map((c, i) => `${['🟦', '🟥', '🟨'][i] || ''} ${c.nombre} · ${c.prof}`)],
    ['Juego creado por', ['Iker']], ['Basado en', ['El concurso «La ruleta de la suerte» y «La ruleta de la fortuna» (adaptación no oficial)', 'Formato basado en «Wheel of Fortune» (EE. UU.)']],
    ['Platós, logo, ruleta y grafismos', ['Creación original en 3D (Three.js), inspirada en las fotos de cada etapa']],
    ['Paneles', ['Originales del juego (data/paneles_extra.js para añadir más)']],
    ['Música y sonidos', ['Los que subas tú desde Opciones (Mis canciones, cabecera)', 'o efectos y bucles sintetizados por el propio juego', 'Clics de los pivotes generados por código']],
    CREDITOS_VOCES, ['Público de las gradas', ['Aplausos, «ooh» y risas sintetizados (no son grabaciones)']],
    ['Interfaz', ['Basada en el APK «¡Ahora Caigo! El juego 3D» de Iker']], ['Programación', ['Grok Bot']]];
}

export function crearG({ etapa, tema = 'normal', entreno = false, ilimitado = false }, api) {
  const E = ETAPAS[etapa] || ETAPAS.piramides; const T = THEMES[tema] || THEMES.normal; setMoneda(E.moneda);
  const rivales = [...PROFESIONES_JUEGO].sort(() => Math.random() - 0.5).slice(0, 2);
  const yo = { nombre: cfg.nombre || 'Tú', prof: cfg.profesion || 'Concursante', voz: 'sharvard', emoji: '🙋', humano: true, habil: 0.75 };
  const conc = [yo, ...rivales.map(r => ({ ...r, habil: 0.55 + Math.random() * 0.25 }))].map((c, i) => ({ ...c, color: COLORES_CONC[i], dinero: 0, ronda: 0, comodines: 0, atril: i, fig: i }));
  const premiosBase = E.factor > 1 ? [{ t: '🚗 ¡Un coche!', coche: true }, { t: '500.000 pesetas', v: 500000 }, { t: '1.000.000 de pesetas', v: 1000000 }, { t: '✈️ Un viaje para dos', viaje: true }, { t: '250.000 pesetas', v: 250000 }] : PREMIOS_BASE;
  const G = { P: api.P(), api, conc, E, T, mult: T.mult || 1, factor: E.factor, usados: new Set(), turno: 0, activo: -1, limpiar: [], auto: !!window.__AUTO, entreno, ilimitado, cam: (n, a) => api.cam(n, a), premiosBase };
  G.P.mamparas.visible = !!T.mamparas; G.P.gente.visible = cfg.gradas && !T.sinPublico;
  R.refrescar(G, -1); return G;
}
async function chiste() { if (!cfg.chistes || Math.random() > 0.6) return; await habla(azar(CHISTES)); me.play('badumtss'); me.play('risas'); }
async function intro(G, api, T) {
  hud.show(false); await api.cabecera();
  api.cam('presentador'); me.play('aplausos'); me.music('trilha');
  await habla(T.saludo || (G.E.id === 'fortuna' ? F.bienvenidaFortuna : F.bienvenida));
  for (const x of T.extra || []) await habla(x);
  if (T.festivo) { G.P.celebrar(); me.play('ovacion'); }
  await habla(F.copreEntra); api.cam('panel'); me.play('aplausos'); di(FC.hola, 4000, 'copre', cfg.copresentadora); await Zi(cfg.voz ? me.say(FC.hola, 'daniela') : Dt(2500));
  if (cfg.monologo) await api.monologo(null, true);
}
async function presentar(G, api) {
  if (!cfg.presentaciones) return;
  api.cam('presentador'); await habla(F.presentacion);
  rotulo(`Presentado por ${cfg.presentador || 'Tito Giros'}`, `Con ${cfg.copresentadora || 'Lola Letras'} en el panel`, 2600);
  for (const c of G.conc) { api.cam('conc', c.atril); await rotulo(`${['🟦', '🟥', '🟨'][c.atril]} ${c.nombre}${c.humano ? ' (TÚ)' : ''}`, c.prof, 2400); if (!c.humano) await hablaC(c, azar(CONC.hola)); }
}
export function jugarPrograma(modo, api) { const temaId = api.tema(); const T = THEMES[temaId] || THEMES.normal; return programa(api, T, temaId, modo); }
async function fin(api, G, modo, lineas) {
  me.stopMusic(); me.play('ovacion'); hud.show(false); R.ocultarPanel();
  api.orbita(); me.music('trilha'); G.P.celebrar();
  const despide = (async () => { await habla(F.despedida); di(FC.adios, 3000, 'copre', cfg.copresentadora); if (cfg.voz) await me.say(FC.adios, 'daniela'); })();
  await api.saltable(Promise.all([despide, rodarCreditos(creditos(G), 16000)])); ocultarCreditos();
  await textoGrande('FIN DEL PROGRAMA', lineas, 3200);
  api.marcador(lineas);
  acciones([{ label: 'Jugar otra vez', cls: 'gold', fn: () => api.iniciar(modo) }, { label: 'Menú', fn: () => api.menu('play') }]);
  await Zi(new Promise(() => {}));
}
export const ranking = G => [...G.conc].sort((a, b) => b.dinero - a.dinero);

async function programa(api, T, temaId, modo) {
  const clasico = modo === 'clasico';
  const etapa = clasico ? 'fortuna' : T.plato || cfg.etapa; api.setEtapa(etapa);
  const G = crearG({ etapa, tema: temaId }, api); const P1 = 150 * G.mult * G.factor;
  hashtag(T.hashtag && temaId !== 'normal' ? T.hashtag : clasico ? '#LaRuletaDeLaFortuna' : '#LaRuletaDeLaSuerte');
  await intro(G, api, T);
  await presentar(G, api);
  if (G.conc[0].humano) { hud.show(false); await api.paseo(0); }
  hud.show(true); R.refrescar(G, -1); G.cam('general');
  const v1 = await R.velocidad(G, P1); if (v1) G.turno = G.conc.indexOf(v1);
  await R.panel(G, { num: 1 }); await chiste();
  await R.panel(G, { num: 2 });
  if (!clasico) { const v2 = await R.velocidad(G, P1 * 2, { titulo: 'VELOCIDAD 2', explicar: F.velocidad2 }); if (v2) G.turno = G.conc.indexOf(v2); await chiste(); }
  await R.panel(G, { num: 3, crono: true });
  let rk = ranking(G);
  await textoGrande('MARCADOR', rk.map((c, i) => `${i + 1}. ${esc(c.nombre)} · ${euros(c.dinero)}`).join('<br>'), 3000);
  if (rk[0].dinero === rk[1].dinero) { await habla(F.empate); const empatados = rk.filter(c => c.dinero === rk[0].dinero); const w = await R.velocidad(G, 50 * G.factor, { titulo: 'DESEMPATE', explicar: F.velocidad }); const g = empatados.includes(w) ? w : azar(empatados); g.dinero += 1; rk = ranking(G); }
  const gana = rk[0]; G.cam('conc', gana.atril); await habla(F.ganaDia); await rotulo(`🏆 ${gana.nombre}`, `Ganador del día · ${euros(gana.dinero)}`, 2600);
  const r = await R.ruletaFinal(G, gana);
  const yo = G.conc.find(c => c.humano);
  const linea = `${r.ok ? '🏆' : '🎡'} ${esc(gana.nombre)} ${r.ok ? 'gana ' + esc(r.premio.t) : 'no resolvió la ruleta final'}<br>${G.conc.map(x => `${esc(x.nombre)}: ${euros(Math.max(0, x.dinero))}`).join(' · ')}${yo ? `<br>Tú: ${yo === gana ? (r.ok ? '¡ganador absoluto!' : 'ganador del día') : 'gracias por jugar'}` : ''}`;
  await fin(api, G, modo, linea);
}

export async function entrenamiento(fase, api, { ilimitado = false } = {}) {
  for (;;) {
    const etapa = api.tema() === 'verano' ? 'verano' : cfg.etapa; api.setEtapa(etapa);
    const G = crearG({ etapa, entreno: true, ilimitado, tema: api.tema() }, api);
    hud.show(true); hashtag('#RuletaEntrena'); G.cam('general');
    const yo = G.conc[0]; let res = '';
    if (fase === 'velocidad') { const w = await R.velocidad(G, 150 * G.factor); res = w === yo ? '¡Lo has resuelto el primero!' : w ? `Lo ha resuelto ${w.nombre}` : 'Nadie lo ha resuelto'; }
    if (fase === 'panel') { const w = await R.panel(G, { num: 1 }); res = w === yo ? `¡Resuelto! Ganas ${euros(yo.dinero)}` : `Lo ha resuelto ${w ? w.nombre : 'nadie'}`; }
    if (fase === 'crono') { const w = await R.panel(G, { num: 1, crono: true }); res = w === yo ? `¡Resuelto! Ganas ${euros(yo.dinero)}` : `Lo ha resuelto ${w ? w.nombre : 'nadie'}`; }
    if (fase === 'final') { const r = await R.ruletaFinal(G, yo); res = r.ok ? `¡Resuelto! En el sobre: ${r.premio.t}` : `No resuelto. En el sobre había: ${r.premio.t}`; }
    if (fase === 'girar') {
      await habla(F.girarLibre); G.activo = 0; R.refrescar(G); const vistos = [];
      for (let k = 0; k < (G.auto ? 3 : 6); k++) { G.cam('ruleta'); const gi = await api.girar(yo); const g = GAJOS[gi]; vistos.push(g.t); me.play(g.tipo === 'quiebra' ? 'quiebra' : 'caja'); toast(`🎡 ${g.t}${g.tipo === 'num' ? ' €' : ''}`, 1500); await Dt(900); }
      res = 'Has sacado: ' + vistos.join(' · ');
    }
    me.stopMusic(); hud.show(false); R.ocultarPanel(); api.marcador(`${esc(PRUEBAS_ENTRENO[fase][0])}<br><small>${esc(res)}</small>`);
    const z = await Zi(new Promise(r => acciones([{ label: 'Repetir', cls: 'gold', fn: () => r('otra') }, { label: 'Entrenamiento', fn: () => r('menu') }])));
    api.marcador(null);
    if (z === 'menu') return api.menu('train');
  }
}
