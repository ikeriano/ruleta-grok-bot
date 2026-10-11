# Misma colocación que src/juego/panel.js (filas 12-14-14-12, centrado, mínimo de filas)
FILAS = [12, 14, 14, 12]
INICIOS = {1: [1], 2: [1], 3: [1, 0], 4: [0]}
def lineas(f, anchos):
    out = []; cur = ''
    for w in f.split():
        cand = (cur + ' ' + w).strip()
        if len(out) < len(anchos) and len(cand) <= anchos[len(out)]: cur = cand; continue
        if not cur: return None
        out.append(cur); cur = w
        if len(out) >= len(anchos) or len(cur) > anchos[len(out)]: return None
    if cur: out.append(cur)
    return out
def colocar(f):
    for n in (1, 2, 3, 4):
        for s in INICIOS[n]:
            r = lineas(f, FILAS[s:s + n])
            if r: return (s, r)
    return None
