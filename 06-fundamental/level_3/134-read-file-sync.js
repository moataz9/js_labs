/**
 * Get an array of lines from the specified file
 */

const fs = require('fs');

function readFileLines (filename) {
  return fs.readFileSync(filename).toString('utf8').split('\n');
}

console.log(readFileLines('./134-read-file-sync.txt'));
