/**
 * Create a base-64 encoded ASCII string from a String object in
 * which each character in the string is treated as a byte of binary data
 */

function btoa(str) {
  return new Buffer(str, 'binary').toString('base64');
}

console.log(btoa('foobar'));
