// Uso: node tools/shot.mjs "<query>" salida.png [espera_ms] [js a evaluar]
import puppeteer from 'puppeteer-core';
const [q = '', out = 'capturas/_tmp.png', ms = '5000', js = ''] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
let err = 0; p.on('pageerror', e => { console.log('PAGEERROR', e.message); err++; }); p.on('console', m => { if (m.type() === 'error' && !/Failed to load resource|ERR_FILE|404/.test(m.text())) { console.log('console.error', m.text()); err++; } });
await p.goto(`http://localhost:8769/index.html?capture&${q}`); await p.waitForFunction('window.__plato && window.__plato.ok', { timeout: 90000 });
if (js) await p.evaluate(js);
await new Promise(r => setTimeout(r, +ms));
await p.screenshot({ path: out }); console.log('ok', out, 'errores', err); await b.close();
