// function palindrom(word) {
//   let wordArray = [];

//   for (let i = word.length - 1; i >= 0; i--) {
//     wordArray.push(word[i]);
//   }

//   let reverseWord = wordArray.join("");

//   console.log(word);
//   console.log(wordArray);
//   console.log(reverseWord);

//   if (word === reverseWord) {
//     console.log("Es palíndromo!");
//   } else {
//     console.log("NO es palíndromo!");
//   }
// }

// palindrom("hola");
// palindrom("oto");

////VERSIÓN REDUCIDA

function isPalindrom(word) {
  let reverseWord = word.split("").reverse().join("");
  console.log(reverseWord);
  word === reverseWord
    ? console.log("Es un palíndromo!")
    : console.log("NO es un palíndromo!");
  return word === reverseWord;
}

isPalindrom("hola");
isPalindrom("oto");


