/**
 * Returns the n rows by n columns identity matrix
 */

function makeMatrix(number) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      if (i === j) {
        console.log(' 1 ')
      } else {
        console.log(' 0 ')
      }
    }
    console.log('----------')
  }
}

matrix(4)
