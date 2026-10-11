// Prueba automática de un flujo completo: node tools/flujo.mjs <modo> <tema> [prefijo] [extra-query] [etapa]
import puppeteer from 'puppeteer-core';
const [modo = 'programa', tema = 'normal', pref = 'capturas/flujo', extra = '', etapa = 'piramides'] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
let err = 0; p.on('error', e => { console.log('CRASH', e.message); }); b.on('disconnected', () => console.log('DESCONECTADO')); p.on('pageerror', e => { console.log('PAGEERROR', e.message, e.stack?.split('\n')[1]); err++; }); p.on('console', m => { const t = m.text(); if (/\[ruleta\]/.test(t)) console.log(t); if (m.type() === 'error' && !/Failed to load resource|ERR_FILE|404/.test(t)) { console.log('console.error', t); err++; } });
await p.goto(`http://localhost:8769/index.html?capture&auto&vel=${process.env.VEL || 6}&tema=${tema}&${extra}`); await p.waitForFunction('window.__plato && window.__plato.ok', { timeout: 90000 });
await p.evaluate((m, e) => { const c = window.__rs.cfg; c.voz = false; c.etapa = e; window.__rs.iniciar(m); }, modo, etapa);
let n = 0, ultimo = ''; const t0 = Date.now();
while (Date.now() - t0 < 900000) {
  await new Promise(r => setTimeout(r, +(process.env.PASO || 6000)));
  const st = await p.evaluate(() => ({ menu: !document.querySelector('#menu').classList.contains('hidden'), ronda: document.querySelector('#roundTxt').textContent.slice(0, 50), tb: document.querySelector('#tablero .tb-tit')?.textContent || '', ov: document.querySelector('#overlay').innerText.slice(0, 60).replace(/\n/g, ' '), acc: document.querySelector('#actions').innerText.replace(/\n/g, '|'), hud: document.querySelector('#hudConc').innerText.replace(/\n/g, ' ').slice(0, 120), mem: Math.round((performance.memory?.usedJSHeapSize || 0) / 1e6), tit: document.querySelector('.ba-t')?.textContent || '' }));
  const k = JSON.stringify(st); if (k !== ultimo) { console.log(((Date.now() - t0) / 1000 | 0) + 's', k); ultimo = k; }
  if (n < 40) await p.screenshot({ path: `${pref}_${String(n++).padStart(2, '0')}.png` });
  if (st.menu || /Jugar otra vez|Repetir|Siguiente/.test(st.acc)) break;
}
await p.screenshot({ path: `${pref}_fin.png` }); console.log('errores', err, 'tiempo', (Date.now() - t0) / 1000 | 0); await b.close();
