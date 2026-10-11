// Monólogos ORIGINALES del presentador virtual (con el público, al teléfono y cambiando las normas)
export const TIPO_ICONO = { publico: '👏', telefono: '📞', normas: '📜' };
export const TIPO_TXT = { publico: 'Con el público', telefono: 'Al teléfono', normas: 'Las normas' };
export const MONOLOGOS = [
  { id: 'pub-saludo', tipo: 'publico', titulo: 'Bajando a saludar', cam: 'publico', lineas: [
    '¡Un momento! Antes de girar voy a saludar a la gente de las gradas.',
    'Señora de la primera fila, ¡ese vestido tiene más colores que nuestra ruleta!',
    'Caballero, ¿usted viene todos los días? ¡Si ya se sabe los paneles de memoria!',
    '¡Muchas gracias! Me vuelvo al plató antes de que alguien compre una vocal sin pagar.'] },
  { id: 'pub-cumple', tipo: 'publico', titulo: 'Un cumpleaños en el público', cam: 'publico', lineas: [
    'Me dicen que hoy hay alguien de cumpleaños en el público.',
    '¡Felicidades! Aquí no tenemos tarta, pero tenemos veinticuatro gajos. Uno por cada vela, más o menos.',
    'Pide un deseo… y que no sea la quiebra.',
    '¡Un aplauso para nuestro cumpleañero!'] },
  { id: 'tel-madre', tipo: 'telefono', titulo: 'Llama mi madre', cam: 'presentador', lineas: [
    'Perdonad, que me suena el móvil… ¡Es mi madre!',
    '¿Sí, mamá? Sí, estoy en directo. No, no puedo decirte el panel.',
    '¿Que ya lo has resuelto desde el sofá? ¡Pues ven tú a concursar!',
    'Vale, mamá, un beso. Me dice que os salude a todos… y que compréis la E.'] },
  { id: 'tel-banda', tipo: 'telefono', titulo: 'Llamada de la banda', cam: 'banda', lineas: [
    '¡Me llama el batería de nuestra banda! Y eso que está ahí mismo.',
    '¿Qué dices? ¿Que quieres tocar más fuerte en la quiebra? ¡Más fuerte todavía no, por favor!',
    'Dice que la ruleta va a tres por cuatro. Yo no sé lo que es eso, pero suena muy bien.',
    '¡Un aplauso para la banda!'] },
  { id: 'norma-vocal', tipo: 'normas', titulo: 'La vocal gratis', cam: 'ruleta', lineas: [
    'Atención, que voy a cambiar una norma.',
    'A partir de hoy, las vocales son gratis… ¡Es broma! Siguen costando cincuenta euros.',
    'Pero os doy un consejo: la E y la A casi nunca fallan.',
    'Y ahora, sigamos, que la ruleta se enfría.'] },
  { id: 'norma-quiebra', tipo: 'normas', titulo: 'Prohibida la quiebra', cam: 'ruleta', lineas: [
    'Me han pedido los concursantes que quitemos la quiebra.',
    'He hablado con la dirección y me han dicho… que ni hablar.',
    'Así que, si cae en quiebra, ya sabéis: sonrisa, aplauso y a esperar el siguiente turno.',
    '¡Que siga la ruleta!'] },
];
