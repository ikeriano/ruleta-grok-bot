# La ruleta de la suerte · El juego 3D

Juego web 3D (Three.js + esbuild, PWA instalable) inspirado en el concurso español «La ruleta de la suerte» y en su antecesor «La ruleta de la fortuna». Proyecto de fans, sin ánimo de lucro.
Misma interfaz que la plantilla de menús del APK «¡Ahora Caigo! El juego 3D» (título «Toca para empezar», menú, Jugar, Opciones, Historia, Cómo se juega, Créditos, Instalar app).

**Juego creado por: Iker**

## Modos
- **Programa completo**: cabecera, saludo del presentador y la copresentadora, presentación de concursantes, paseo hasta tu marcador, prueba de velocidad, panel 1, panel 2, velocidad 2, panel con crono, marcador, ruleta final (sobre + 4 consonantes + 1 vocal + 10 s) y despedida con créditos.
- **Clásico**: «La ruleta de la fortuna» (1990-97) en el plató retro y en pesetas.
- **Entrenamiento** (panel, velocidad, crono, ruleta final, girar la ruleta), **Explorar el plató**, **Monólogos** y **Programa especial** (Black Friday, Navidad, Fin de Año, Pandemia, Ruleta Noche, Verano, Halloween, San Valentín, Niños, 300 suscriptores).

## Platós (Opciones → Etapa / plató)
La ruleta de la fortuna 1990 (retro), Antena 3 2006 (azul), Pirámides con suelo dorado, Pirámides con suelo azul, Verano (también en el especial de verano) y Neón (actual).

## Desarrollo
```
npm install
npx esbuild src/main.js --bundle --format=iife --minify --outfile=js/app.js
python3 -m http.server 8769
```
- Paneles: `src/data/paneles.json` (generado con `python3 tools/gen_paneles.py`, que comprueba que cada frase cabe en las 52 casillas). Para añadir paneles sin recompilar, edita `data/paneles_extra.js`.
- Voces Piper pregeneradas: `node tools/frases.mjs` y `python tools/gen_voces.py tools/frases.json .` (presentador es_ES davefx; copresentadora daniela; concursantes sharvard, carlfm, ald, daniela). Lo variable lo lee la voz del navegador (masculina si existe).
- Pruebas: `node tools/menus.mjs`, `node tools/flujo.mjs programa normal capturas/flujo "" <etapa>` y `node tools/etapas.mjs`.
- Música y logo propios: Opciones → Música de la cabecera / Logo propio / Mis canciones (se guardan en IndexedDB, solo en tu dispositivo), o deja archivos en `audio/` (`cabecera_<etapa>.mp3`, `musica_panel.mp3`…) y `logos/` (`logo_<etapa>.png`).

## Cómo se juega (resumen)
Gira la ruleta (mantén pulsado «Girar» y suelta, o arrastra la ruleta), di una consonante y ganas el valor del gajo por cada vez que aparece. Comprar vocal cuesta 50 €. Quiebra te deja la ronda a 0 y Pierde turno pasa el turno. Resuelve el panel para quedarte el dinero de la ronda. En la prueba de velocidad las letras se destapan solas: pulsa y resuelve. En el panel con crono tienes pocos segundos por jugada. El que más gane juega la ruleta final: elige sobre, 4 consonantes y 1 vocal y tiene 10 segundos para resolver.

## Simplificaciones
- Presentador, copresentadora, concursantes y público son muñecos 3D originales (sin caras de personas reales).
- Las cabeceras y la música son sintetizadas; puedes subir las tuyas.
- El coche y los premios son genéricos; los gajos especiales (Comodín, x2, 1/2, Se lo doy, Me lo quedo) siguen reglas simplificadas.
- Las frases fijas tienen voz Piper pregrabada; nombres, cifras y paneles los lee la voz del navegador.

## Licencias de las voces
Piper TTS (MIT), voces es_ES davefx, sharvard, carlfm, ald y es_MX/es_AR daniela con sus licencias de datos originales (ver Créditos en el juego).
