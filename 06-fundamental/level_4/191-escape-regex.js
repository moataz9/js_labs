/**
 * Escape a string to use in a regular expression
 */

const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
console.log(escapeRegExp('(test)'));