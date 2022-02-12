/**
 * Detect JavaScript Data Types
 */

function detectDataTypes(value) {
  let dTypes = [Function, RegExp, Number, String, Boolean, Object]

  if (typeof value === 'object' || typeof value === 'function') {
    for (let i = 0; i < dTypes.length; i++) {
      if (value instanceof dTypes[i]) return dTypes[i]
    }
  }

  return typeof value;
}

console.log('detectDataTypes(12):', detectDataTypes(12));
console.log('detectDataTypes(\'string\'):', detectDataTypes("string"));
console.log('detectDataTypes(false):', detectDataTypes(false));
console.log('detectDataTypes(/[a-zA-Z]/igm):', detectDataTypes(/[a-zA-Z]/igm));
console.log('detectDataTypes({red: \'red\'}):', detectDataTypes({red: 'red'}));