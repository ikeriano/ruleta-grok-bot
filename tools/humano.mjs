// Juega como humano (sin modo auto): pulsa Girar (mantener y soltar), elige letras, compra vocales y resuelve escribiendo.
// node tools/humano.mjs <modo> [prefijo] [etapa]   (modo: entreno:panel, entreno:velocidad, entreno:final, entreno:crono, entreno:girar, programa)
import puppeteer from 'puppeteer-core';
const [modo = 'entreno:panel', pref = 'capturas/t/hum', etapa = 'piramides'] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
let err = 0; p.on('pageerror', e => { console.log('PAGEERROR', e.message, e.stack?.split('\n')[1]); err++; }); p.on('console', m => { const t = m.text(); if (/\[ruleta\]/.test(t)) console.log(t); if (m.type() === 'error' && !/Failed to load resource|404/.test(t)) { console.log('console.error', t); err++; } });
await p.goto(`http://localhost:8769/index.html?capture&vel=${process.env.VEL || 4}`); await p.waitForFunction('window.__plato && window.__plato.ok', { timeout: 90000 });
await p.evaluate((m, e) => { const c = window.__rs.cfg; c.voz = false; c.etapa = e; c.nombre = 'Iker'; window.__rs.iniciar(m); }, modo, etapa);
const w = ms => new Promise(r => setTimeout(r, ms)); const t0 = Date.now(); let n = 0; const vistos = new Set();
while (Date.now() - t0 < 600000) {
  await w(700);
  const st = await p.evaluate(() => { const j = document.querySelector('#jugada'); const g = document.querySelector('#giro'); return { j: j.className, btns: [...j.querySelectorAll('button')].map(b => (b.disabled ? '-' : '') + b.textContent.trim()), giro: !g.classList.contains('hidden'), acc: document.querySelector('#actions').innerText, sol: window.__rs.P.panelActual()?.f || '', menu: !document.querySelector('#menu').classList.contains('hidden') }; });
  const shot = async k => { if (!vistos.has(k) || n < 3) { vistos.add(k); await p.screenshot({ path: `${pref}_${String(n++).padStart(2, '0')}_${k}.png` }); } };
  if (st.menu || /Repetir|Jugar otra vez/.test(st.acc)) { await shot('fin'); break; }
  if (st.giro) { await shot('giro'); const bb = await p.$('#btnGiro'); const box = await bb.boundingBox(); await p.mouse.move(box.x + box.width / 2, box.y + box.height / 2); await p.mouse.down(); await w(500 + Math.random() * 700); await p.mouse.up(); continue; }
  if (st.j === 'botonera') { await shot('botonera'); const libres = st.btns.filter(x => x[0] !== '-'); const quiero = libres.find(x => /Resolver/.test(x) && (Math.random() < 0.5 || process.env.RES)) || libres.find(x => /vocal/.test(x) && Math.random() < 0.3) || libres.find(x => /Girar/.test(x)) || libres.find(x => /Resolver/.test(x)); await p.evaluate(t => [...document.querySelectorAll('#jugada button')].find(b => b.textContent.trim() === t).click(), quiero); continue; }
  if (st.j === 'teclado') { await shot('teclado'); await p.evaluate(sol => { const bs = [...document.querySelectorAll('#jugada .tecla')].filter(b => !b.disabled); const pres = bs.filter(b => sol.includes(b.textContent)); (pres.length && Math.random() < 0.7 ? pres[0] : bs[0]).click(); }, st.sol); continue; }
  if (st.j === 'resolver') { await shot('resolver'); await p.type('#solucion', st.sol.toLowerCase(), { delay: 5 }); await w(300); await p.click('#btnSol'); continue; }
  if (st.j === 'pulsador') { await w(1500); await shot('pulsador'); await p.evaluate(() => document.querySelector('#jugada .pulsar')?.click()); continue; }
}
await p.screenshot({ path: `${pref}_zfin.png` }); console.log('errores', err, 'tiempo', (Date.now() - t0) / 1000 | 0); await b.close();
