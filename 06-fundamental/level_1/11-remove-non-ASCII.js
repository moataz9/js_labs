/**
 * removes non-printable ASCII characters from a given string.
 */

const remove_non_ASCII = str => str.replace(/[^\x20-\x7E]/g, '');
console.log(remove_non_ASCII('äÄmçoÇaétÉêöaÖzÐþúÚ'));