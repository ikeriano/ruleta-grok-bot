// Logo ORIGINAL dibujado por código (no es el logo oficial; el usuario puede subir el suyo desde Opciones):
// una ruleta de colores detrás y «LA RULETA DE LA SUERTE» (o «DE LA FORTUNA» en la etapa retro).
export const GAJO_COLORES = ['#e8322b', '#f7a21b', '#ffe12e', '#3cc24a', '#1fa3e8', '#2a52d8', '#8d3ad8', '#e83ca0'];
export function miniRueda(g, cx, cy, r, t = 0, cols = GAJO_COLORES) {
  g.save(); g.translate(cx, cy); g.rotate(t * 0.4);
  const n = 24; for (let i = 0; i < n; i++) { g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, r, i * Math.PI * 2 / n, (i + 1) * Math.PI * 2 / n); g.closePath(); g.fillStyle = cols[i % cols.length]; g.fill(); }
  g.lineWidth = r * 0.05; g.strokeStyle = '#fff'; g.beginPath(); g.arc(0, 0, r, 0, 7); g.stroke();
  for (let i = 0; i < n; i++) { const a = i * Math.PI * 2 / n; g.fillStyle = '#fff'; g.beginPath(); g.arc(Math.cos(a) * r * 0.95, Math.sin(a) * r * 0.95, r * 0.025, 0, 7); g.fill(); }
  g.fillStyle = '#1a2a8a'; g.beginPath(); g.arc(0, 0, r * 0.28, 0, 7); g.fill(); g.strokeStyle = '#ffe12e'; g.lineWidth = r * 0.03; g.stroke();
  g.restore();
}
/** Dibuja el logo centrado en (cx, cy) con ancho w */
export function drawLogo(g, cx, cy, w, t = 0, { retro = false } = {}) {
  const H = w * 0.2;
  g.save(); g.globalAlpha = 0.95; miniRueda(g, cx, cy - H * 0.15, H * 1.55, t, retro ? ['#b8862b', '#7a1a1a', '#e8c66a', '#2a4a2a'] : GAJO_COLORES); g.restore();
  // halo para que se lea el texto
  g.save(); const hal = g.createRadialGradient(cx, cy, H * 0.2, cx, cy, w * 0.55); hal.addColorStop(0, 'rgba(5,10,60,0.55)'); hal.addColorStop(1, 'rgba(5,10,60,0)'); g.fillStyle = hal; g.fillRect(cx - w, cy - w, w * 2, w * 2); g.restore();
  const txt = (s, y, size, fill, stroke, skew = -0.12) => {
    g.save(); g.translate(cx, y); g.transform(1, 0, skew, 1, 0, 0); g.font = `900 ${size}px "Arial Black", Impact, Arial`; g.textAlign = 'center'; g.textBaseline = 'middle';
    let m = g.measureText(s).width; if (m > w) { const k = w / m; g.scale(k, k); }
    g.lineJoin = 'round'; g.lineWidth = size * 0.22; g.strokeStyle = stroke; g.strokeText(s, 0, 0); g.lineWidth = size * 0.07; g.strokeStyle = '#fff'; g.strokeText(s, 0, 0);
    g.fillStyle = fill; g.shadowColor = 'rgba(0,0,0,.5)'; g.shadowBlur = size * 0.15; g.fillText(s, 0, 0); g.restore();
  };
  const grad = (y, a, b) => { const gr = g.createLinearGradient(0, y - H / 2, 0, y + H / 2); gr.addColorStop(0, a); gr.addColorStop(1, b); return gr; };
  if (retro) {
    txt('LA RULETA', cy - H * 0.55, H * 1.0, grad(cy - H * 0.55, '#fff6c0', '#d4a020'), '#4a1a08', 0);
    txt('DE LA FORTUNA', cy + H * 0.55, H * 0.62, grad(cy + H * 0.55, '#ffffff', '#e8c66a'), '#4a1a08', 0);
  } else {
    txt('LA', cy - H * 0.95, H * 0.42, '#ffffff', '#0a1a6a');
    txt('RULETA', cy - H * 0.2, H * 1.15, grad(cy - H * 0.2, '#ffffff', '#5fc8ff'), '#0a1a6a');
    txt('DE LA SUERTE', cy + H * 0.75, H * 0.55, grad(cy + H * 0.75, '#fff6a0', '#ffb000'), '#5a1a00');
  }
}
