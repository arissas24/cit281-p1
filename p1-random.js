/*
    CIT 281 Project 1
    Name: Arissa Samaniego
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const length = getRandomInteger(5, 26);
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomString = "";
for (let i = 0; i < length; i++){
    const letterIndex = getRandomInteger(0, alphabet.length);
  randomString += alphabet[letterIndex];
}

console.log(`${length} lowercase letters: ${randomString}`);