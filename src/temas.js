// Programas especiales (rejilla «Programa especial» del APK): neones del plató, saludo, hashtag, rótulo y paneles propios.
// mult = multiplica los gajos y los premios · premios = sobres de la ruleta final · plato = fuerza un plató (verano).
const pal = (neones, luzA, luzB, focos, fondo = null) => ({ neones, luzA, luzB, focos, fondo });
export const PREMIOS_BASE = [{ t: '🚗 ¡Un coche!', coche: true }, { t: '5.000 €', v: 5000 }, { t: '10.000 €', v: 10000 }, { t: '20.000 €', v: 20000 }, { t: '✈️ Un viaje para dos', viaje: true }, { t: '3.000 €', v: 3000 }];
export const THEMES = {
  normal: { name: 'Normal', emoji: '🎡', paleta: null, hashtag: '#LaRuletaDeLaSuerte' },
  blackfriday: { name: 'Black Friday', emoji: '🛍️', banner: 'ESPECIAL BLACK FRIDAY', hashtag: '#RuletaBlackFriday', paneles: 'blackfriday', mult: 1.5, paleta: pal([0x111111, 0xffd21a, 0xffffff], 0xffd21a, 0x222222, [0xffd21a, 0xffffff], 0x030303),
    saludo: '¡Bienvenidos al especial Black Friday de La ruleta de la suerte! Hoy todo está rebajado… menos los premios, que están más gordos que nunca.', extra: ['Los gajos valen más, así que ¡a llenar el carrito!'] },
  navidad: { name: 'Navidad', emoji: '🎄', banner: 'ESPECIAL NAVIDAD', hashtag: '#RuletaNavidad', paneles: 'navidad', festivo: true, paleta: pal([0xff2a2a, 0x2aff6a, 0xffd21a], 0xff2a2a, 0x2aff6a, [0xffffff, 0xff4a4a], 0x020c06),
    saludo: '¡Feliz Navidad! Bienvenidos a La ruleta de la suerte más navideña, con turrón, villancicos de nuestra banda y paneles con espumillón.' },
  finano: { name: 'Fin de Año', emoji: '🥂', banner: 'ESPECIAL FIN DE AÑO', hashtag: '#RuletaFinDeAño', festivo: true, paleta: pal([0xffd21a, 0xc0c0ff, 0xffffff], 0xffd21a, 0xc0c0ff, [0xffffff, 0xffd21a], 0x030308),
    saludo: '¡Bienvenidos a la última ruleta del año! Antes de las uvas, unos cuantos giros.' },
  pandemia: { name: 'Pandemia', emoji: '😷', banner: 'PROGRAMA SIN PÚBLICO', hashtag: '#RuletaEnCasa', paneles: 'pandemia', sinPublico: true, mamparas: true, paleta: pal([0x3ad0ff, 0xffffff], 0x3ad0ff, 0xffffff, [0xffffff]),
    saludo: 'Bienvenidos a La ruleta de la suerte. Hoy estamos sin público, con mamparas y mucha distancia… pero con las mismas ganas de girar.', extra: ['Un saludo enorme a todos los que nos veis desde casa. ¡Este aplauso es para vosotros!'] },
  noche: { name: 'Ruleta Noche', emoji: '🌙', banner: 'LA RULETA DE LA SUERTE NOCHE', hashtag: '#RuletaNoche', paneles: 'noche', festivo: true, mult: 5, premios: [{ t: '100.000 €', v: 100000 }, { t: '50.000 €', v: 50000 }, { t: '🚗 ¡Un coche!', coche: true }, { t: '25.000 €', v: 25000 }, { t: '30.000 €', v: 30000 }, { t: '60.000 €', v: 60000 }],
    paleta: pal([0xa04dff, 0xffd21a, 0x3ad0ff], 0xa04dff, 0xffd21a, [0xffd21a, 0xa04dff], 0x05020e),
    saludo: '¡Buenas noches! Bienvenidos a la gran noche de La ruleta de la suerte. Esta noche los gajos valen cinco veces más… ¡y en la ruleta final hay hasta cien mil euros!' },
  verano: { name: 'Verano', emoji: '🏖️', banner: 'ESPECIAL VERANO', hashtag: '#RuletaVerano', paneles: 'verano', plato: 'verano', paleta: null,
    saludo: '¡Bienvenidos al especial de verano! Hoy el plató huele a crema solar: tenemos olas, palmeras y una sombrilla. ¡Que no se os queme la ruleta!' },
  halloween: { name: 'Halloween', emoji: '🎃', banner: 'ESPECIAL HALLOWEEN', hashtag: '#RuletaHalloween', paleta: pal([0xff7a00, 0x9b30ff, 0x30ff60], 0xff7a00, 0x9b30ff, [0xff7a00, 0x9b30ff], 0x050208),
    saludo: '¡Muajaja! Bienvenidos al especial de Halloween. Cuidado con la quiebra: esta noche da todavía más miedo.' },
  sanvalentin: { name: 'San Valentín', emoji: '💘', banner: 'ESPECIAL SAN VALENTÍN', hashtag: '#RuletaSanValentín', paleta: pal([0xff4d6d, 0xffccd5], 0xff4d6d, 0xffccd5, [0xffccd5, 0xff4d6d], 0x0c0204),
    saludo: '¡Feliz San Valentín! Hoy la ruleta gira… ¡con mucho amor!' },
  ninos: { name: 'Niños', emoji: '🧸', banner: 'ESPECIAL NIÑOS', hashtag: '#RuletaNiños', festivo: true, paleta: pal([0xff5ca8, 0xffd60a, 0x33e6ff], 0xff5ca8, 0x33e6ff, [0xffffff, 0xffd60a]),
    saludo: '¡Hola, chicos y chicas! Bienvenidos al especial infantil. ¡Hoy los más pequeños hacen girar la ruleta!' },
  especial300: { name: 'Especial 300 suscriptores', emoji: '🏆', banner: 'ESPECIAL 300 SUSCRIPTORES', hashtag: '#Ruleta300', festivo: true, mult: 2, paleta: pal([0xffd21a, 0xffffff, 0xffb000], 0xffd21a, 0xffffff, [0xffffff, 0xffe680], 0x070502),
    saludo: '¡Bienvenidos a esta ruleta tan especial! Está dedicada a los suscriptores del canal de YouTube «Ikeriano el campeón 2».', extra: ['¡Ya sois trescientos! Muchas gracias. Hoy, para celebrarlo, los gajos valen el doble.'] },
};
