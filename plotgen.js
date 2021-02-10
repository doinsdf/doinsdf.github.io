function randomname() {
  var vowel = ['ai', 'ee', 'oa', 'ea', 'ou', 'oi', 'ie', "a", "a", "e", "e", "e", "i", "i", "i","o", "o", "o", "u", "u", "u", "u", 'ai', 'ee', 'oa', 'ea', "a", "a", "e", "e", "e", "i", "i", "i","o", "o", "o", "u", "u", "u", "u", 'ai', 'ee', 'oa', 'ea', "a", "a", "e", "e", "e", "i", "i", "i","o", "o", "o", "u", "u", "u", "u", 'à', 'ä', 'ó', 'õ', 'ê', 'ï', 'í', 'ù', 'û'];
  var vnoe = ['ai', 'ee', 'oa', 'ea', 'ai', 'ee', 'oa', 'ea', "a", "a", "i", "i", "i","o", "o", "o", "u", "u", 'ai', 'ee', 'oa', 'ea', "a", "a", "i", "i", "i","o", "o", "o", "u", "u", "a", "a", "i", "i", "i","o", "o", "o", "u", "u", 'à', 'ä', 'ó', 'õ', 'ï', 'í', 'ù', 'û'];
  var conso_be = ['kw', 'bl', 'br', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr', 'pl', 'pr', 'sc', 'sl', 'sn', 'sw', 'tr', 'tw', 'wh', 'wr', 'sch', 'scr', 'shr', 'spl', 'spr', 'squ', 'str', 'thr'];
  var conso_bo = ['sh','sm', 'sk', 'sph', 'th', 'st', 'sp', 'ch'];
  var conso_en = ['ng', 'nd', 'rt', 'lp', 'ck', 'rb', 'lt', 'nk', 'lk', 'ff', 'll', 'ds', 'cs', 'tt'];
  var ven = ['aw', 'ay', 'ow', 'ia'];
  var conso = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  var fantasyname = '';
  var fantasynametype = [1,2,3,4,5,6,7,8,9][Math.random(6)];
  if (fantasynametype == 1) {
    fantasyname = conso_be[Math.random(conso_be.size())] + vowel[Math.random(vowel.size())]+conso_en[Math.random(conso_en.size())];
  } else if (fantasynametype == 2) {
    fantasyname = conso_bo[Math.random(conso_bo.size())] + vowel[Math.random(vowel.size())]+conso_en[Math.random(conso_en.size())];
  } else if (fantasynametype == 3) {
    fantasyname = conso_bo[Math.random(conso_bo.size())] + vowel[Math.random(vowel.size())]+conso_en[Math.random(conso_en.size())]+vowel[Math.random(vowel.size())];
  } else if (fantasynametype == 4) {
    fantasyname = conso_bo[Math.random(conso_bo.size())] + vowel[Math.random(vowel.size())]+conso_en[Math.random(conso_en.size())]+vowel[Math.random(vowel.size())];
  } else if (fantasynametype == 5) {
    fantasyname = vowel[Math.random(vowel.size())]+conso_en[Math.random(conso_en.size())]+vowel[Math.random(vowel.size())];
  } else if (fantasynametype == 6) {
    fantasyname = vowel[Math.random(vowel.size())]+conso_en[Math.random(conso_en.size())]+vowel[Math.random(vowel.size())]+conso_bo[Math.random(conso_bo.size())];
  } else if (fantasynametype == 7) {
    fantasyname = conso_be[Math.random(conso_be.size())] + vowel[Math.random(vowel.size())];
  } else if (fantasynametype == 8) {
    fantasyname = conso_be[Math.random(conso_be.size())] + ven[Math.random(ven.size())];
  }
  fantasyname = fantasyname.toString();
  return fantasyname
}
document.write(randomname());