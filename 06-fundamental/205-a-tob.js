/**
 * Decode a string of data which has been encoded using base-64 encoding
 */

const atob = str => new Buffer(str, 'base64').toString('binary');
console.log(atob('Zm9vYmFy'));
