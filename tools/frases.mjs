// Vuelca las frases fijas del juego (window.__frases()) a tools/frases.json para tools/gen_voces.py
import puppeteer from 'puppeteer-core'; import fs from 'fs';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage(); await p.goto('http://localhost:8769/index.html'); await p.waitForFunction('window.__frases', { timeout: 90000 });
const L = await p.evaluate(() => window.__frases()); const u = [...new Map(L.map(x => [x.v + '|' + x.t + '|' + x.q, x])).values()];
fs.writeFileSync('tools/frases.json', JSON.stringify(u)); console.log(u.length, 'frases'); await b.close();
