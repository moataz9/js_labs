/**
 * Split a multiline string into an array of lines
 */

function splitLines (str) {
  return str.split(/\r?\n/)
}

console.log(splitLines('This\nis a\nmultiline\nstring.\n'));
