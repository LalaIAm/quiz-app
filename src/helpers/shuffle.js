
export function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    // Pick a remaining element
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element
    let temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}