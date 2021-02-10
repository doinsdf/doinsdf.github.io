function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function randomname() {
  var vowel = ['ai', 'ee', 'oa', 'ea', 'ou', 'oi', 'ie', "a", "a", "e", "e", "e", "i", "i", "i","o", "o", "o", "u", "u", "u", "u", 'ai', 'ee', 'oa', 'ea', "a", "a", "e", "e", "e", "i", "i", "i","o", "o", "o", "u", "u", "u", "u", 'ai', 'ee', 'oa', 'ea', "a", "a", "e", "e", "e", "i", "i", "i","o", "o", "o", "u", "u", "u", "u", 'à', 'ä', 'ó', 'õ', 'ê', 'ï', 'í', 'ù', 'û'];
  var vnoe = ['ai', 'ee', 'oa', 'ea', 'ai', 'ee', 'oa', 'ea', "a", "a", "i", "i", "i","o", "o", "o", "u", "u", 'ai', 'ee', 'oa', 'ea', "a", "a", "i", "i", "i","o", "o", "o", "u", "u", "a", "a", "i", "i", "i","o", "o", "o", "u", "u", 'à', 'ä', 'ó', 'õ', 'ï', 'í', 'ù', 'û'];
  var conso_be = ['kw', 'bl', 'br', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr', 'pl', 'pr', 'sc', 'sl', 'sn', 'sw', 'tr', 'tw', 'wh', 'wr', 'sch', 'scr', 'shr', 'spl', 'spr', 'squ', 'str', 'thr'];
  var conso_bo = ['sh','sm', 'sk', 'sph', 'th', 'st', 'sp', 'ch'];
  var conso_en = ['ng', 'nd', 'rt', 'lp', 'ck', 'rb', 'lt', 'nk', 'lk', 'ff', 'll', 'ds', 'cs', 'tt'];
  var ven = ['aw', 'ay', 'ow', 'ia'];
  var conso = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  var fantasyname = '';
  var fantasynametype = getRandomInt(7);
  if (fantasynametype == 0) {
    fantasyname = conso_be[getRandomInt(conso_be.length)] + ven[getRandomInt(ven.length)];
  } else if (fantasynametype == 1) {
    fantasyname = conso_be[getRandomInt(conso_be.length)] + vowel[getRandomInt(vowel.length)]+conso_en[getRandomInt(conso_en.length)];
  } else if (fantasynametype == 2) {
    fantasyname = conso_bo[getRandomInt(conso_bo.length)] + vowel[getRandomInt(vowel.length)]+conso_en[getRandomInt(conso_en.length)];
  } else if (fantasynametype == 3) {
    fantasyname = conso_bo[getRandomInt(conso_bo.length)] + vowel[getRandomInt(vowel.length)]+conso_en[getRandomInt(conso_en.length)]+vowel[getRandomInt(vowel.length)];
  } else if (fantasynametype == 4) {
    fantasyname = conso_bo[getRandomInt(conso_bo.length)] + vowel[getRandomInt(vowel.length)]+conso_en[getRandomInt(conso_en.length)]+vowel[getRandomInt(vowel.length)];
  } else if (fantasynametype == 5) {
    fantasyname = vowel[getRandomInt(vowel.length)]+conso_en[getRandomInt(conso_en.length)]+vowel[getRandomInt(vowel.length)];
  } else if (fantasynametype == 6) {
    fantasyname = vowel[getRandomInt(vowel.length)]+conso_en[getRandomInt(conso_en.length)]+vowel[getRandomInt(vowel.length)]+conso_bo[getRandomInt(conso_bo.length)];
  } else if (fantasynametype == 7) {
    fantasyname = conso_be[getRandomInt(conso_be.length)] + vowel[getRandomInt(vowel.length)];
  }
  fantasyname = fantasyname.toString().toLowerCase();
  fantasyname = fantasyname.charAt(0).toUpperCase() + fantasyname.slice(1)
}
document.write(randomname());