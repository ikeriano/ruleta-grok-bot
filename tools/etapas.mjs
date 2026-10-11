// Capturas de cada plató desde varias cámaras: node tools/etapas.mjs [etapas] [camaras]
import puppeteer from 'puppeteer-core';
const ets = (process.argv[2] || 'fortuna,a2006,piramides,pirazul,verano,neon').split(','); const cams = (process.argv[3] || 'general').split(',');
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
let err = 0; p.on('pageerror', e => { console.log('PAGEERROR', e.message); err++; });
await p.goto('http://localhost:8769/index.html?capture&main'); await p.waitForFunction('window.__plato && window.__plato.ok', { timeout: 90000 });
await p.evaluate(() => { document.querySelector('#menu').classList.add('hidden'); window.__rs.cfg.quality = 'alta'; });
for (const e of ets) for (const c of cams) {
  await p.evaluate((e, c) => { const R = window.__rs; R.P.setEtapa(e); R.aplicarTema('normal', false); R.show(...R.CAMS[c], true); }, e, c);
  await new Promise(r => setTimeout(r, 2500)); await p.screenshot({ path: `capturas/plato_${e}_${c}.png` }); console.log(e, c);
}
console.log('errores', err); await b.close();
