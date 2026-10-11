import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 }); let e = 0;
p.on('pageerror', x => { console.log('ERR', x.message); e++; });
await p.goto('https://ikeriano.github.io/altatension-grok-bot/'); await p.waitForFunction('window.__plato && window.__plato.ok', { timeout: 90000 });
await new Promise(r => setTimeout(r, 3000)); await p.screenshot({ path: 'capturas/web_publicada.png' }); console.log('ok errores', e); await b.close();
