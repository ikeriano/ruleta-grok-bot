import puppeteer from 'puppeteer-core';
const [etapa, pref] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
let err = 0, resol = []; p.on('pageerror', e => { console.log('PAGEERROR', e.message); err++; }); p.on('console', m => { const t = m.text(); if (/\[ruleta\]/.test(t)) { console.log(t); resol.push(t); } if (m.type() === 'error' && !/Failed to load resource|404/.test(t)) { console.log('console.error', t); err++; } });
await p.goto(`http://localhost:8769/index.html?capture&auto&vel=10`); await p.waitForFunction('window.__plato && window.__plato.ok', { timeout: 90000 });
await p.evaluate(e => { const c = window.__rs.cfg; c.voz = false; c.etapa = e; window.__rs.iniciar('programa'); }, etapa);
const t0 = Date.now(); const euros = new Set(); let dobles = 0, velShot = 0;
while (Date.now() - t0 < 900000) {
  await new Promise(r => setTimeout(r, 250));
  const s = await p.evaluate(() => ({ bub: document.querySelector('#bubble').innerText, p2: !document.querySelector('#panel2d').classList.contains('hidden'), jug: document.querySelector('#jugada').className, acc: document.querySelector('#actions').innerText, ov: document.querySelector('#overlay').innerText }));
  if (/euro/i.test(s.bub)) euros.add(s.bub.slice(0, 120)); if (/VELOCIDAD/.test(s.ov) && Date.now() - velShot > 20000) { velShot = Date.now(); setTimeout(() => p.screenshot({ path: pref + '_vel' + (dobles++) + '.png' }).catch(() => {}), 2500); }
  if (/Jugar otra vez/.test(s.acc)) break;
}
console.log(etapa, 'errores', err, 'frases con euro:', [...euros]); await b.close();
