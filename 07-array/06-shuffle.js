/**
 * shuffle items in array
 */ 

function shuffle(arra1) {
  let ctr = arra1.length
  let index
  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr)
    // Decrease ctr by 1
    ctr--
    // And swap the last element with it
    ;[arra1[ctr], arra1[index]] = [arra1[index], arra1[ctr]]
  }
  return arra1
}

let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(shuffle(myArray))
