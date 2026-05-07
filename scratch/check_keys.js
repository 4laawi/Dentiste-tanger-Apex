import { TRANSLATIONS } from './constants';

function getKeys(obj, prefix = '') {
  let keys = [];
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getKeys(obj[key], prefix + key + '.'));
    } else {
      keys.push(prefix + key);
    }
  }
  return keys;
}

const enKeys = getKeys(TRANSLATIONS.en);
const frKeys = getKeys(TRANSLATIONS.fr);

const missingInFr = enKeys.filter(k => !frKeys.includes(k));
const missingInEn = frKeys.filter(k => !enKeys.includes(k));

console.log('Missing in FR:', missingInFr);
console.log('Missing in EN:', missingInEn);
