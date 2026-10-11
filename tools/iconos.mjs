// Genera icon-192.png e icon-512.png (ruleta de colores con «RULETA», original)
import puppeteer from 'puppeteer-core'; import fs from 'fs';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox'] });
const p = await b.newPage();
for (const S of [192, 512]) {
  const data = await p.evaluate(S => {
    const c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d');
    const gr = g.createRadialGradient(S / 2, S / 2, 4, S / 2, S / 2, S * 0.72); gr.addColorStop(0, '#2a5aff'); gr.addColorStop(1, '#06123a'); g.fillStyle = gr; g.fillRect(0, 0, S, S);
    const cols = ['#e8322b', '#f7a21b', '#ffe12e', '#3cc24a', '#1fa3e8', '#2a52d8', '#8d3ad8', '#e83ca0'];
    g.save(); g.translate(S / 2, S / 2); const r = S * 0.42; for (let i = 0; i < 24; i++) { g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, r, i * Math.PI / 12, (i + 1) * Math.PI / 12); g.closePath(); g.fillStyle = cols[i % 8]; g.fill(); g.strokeStyle = '#fff'; g.lineWidth = S * 0.006; g.stroke(); }
    g.lineWidth = S * 0.03; g.strokeStyle = '#fff'; g.beginPath(); g.arc(0, 0, r, 0, 7); g.stroke(); g.fillStyle = '#0a1a7a'; g.beginPath(); g.arc(0, 0, r * 0.42, 0, 7); g.fill(); g.strokeStyle = '#ffd21a'; g.lineWidth = S * 0.02; g.stroke(); g.restore();
    g.fillStyle = '#ffd21a'; g.beginPath(); g.moveTo(S / 2, S * 0.13); g.lineTo(S * 0.46, S * 0.03); g.lineTo(S * 0.54, S * 0.03); g.closePath(); g.fill();
    g.font = `900 ${S * 0.1}px Arial Black, Arial`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#fff'; g.fillText('RULETA', S / 2, S / 2);
    return c.toDataURL('image/png').split(',')[1];
  }, S);
  fs.writeFileSync(`icon-${S}.png`, Buffer.from(data, 'base64'));
}
await b.close(); console.log('iconos ok');
