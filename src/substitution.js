// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //
  //
  // 

  function substitution(input, alphabet, encode = true) {
    // 

    if (alphabet === undefined || alphabet.length !== 26) {               // guard clause to protect against edge cases of no alphabet passed in or the length not being 26
      return false;
    } else {                                                              // if correct length alphabet is passed in
      let checkedAlphabet = alphabet.split("");                           // splits the string into an array of substrings
      for (let i = 0; i < alphabet.length; i++) {                         // loop through the alphabet letter by letter
        if (checkedAlphabet.filter((letter) => letter === alphabet[i + 1]).length > 1) { // filter through the alphabet to check for any duplicate letters
          return false;                                                   // if there are any duplicates - return false
        }
      }

      let actualAlphabet = "abcdefghijklmnopqrstuvwxyz";                  // declared an actual alphabet variable

      if (encode === true) {                                              // encoding 
        let newInput = input.toLowerCase();                               // declared new variable with input changed to lowercase
        let encodedMessage = "";                                          // declared the return string to add to later

        for (let i = 0; i < newInput.length; i++) {                       // started a for loop through the input, iterating through each character
          if (newInput[i] === " ") {                                      // if the character is a space -
            encodedMessage += " ";                                        // - add the space unchanged to the result message

          } else {                                                        // and if its a letter -
            encodedMessage += alphabet[actualAlphabet.indexOf(newInput[i])];  // add the letter from the inputted alphabet that has the same index as the real one to the return string
          }
        }
        return encodedMessage;                                            // return the string after all iterations complete

      } else {                                                            // decoding
        let decodedMessage = "";                                          // declared the return string to add to later
        for (let i = 0; i < input.length; i++) {                          // started a for loop through the input, iterating through each character
          if (input[i] === " ") {                                         // if the character is a space - 
            decodedMessage += " ";                                        // - add the space unchanged to the result message

          } else {                                                        // and if its a letter -
            decodedMessage += actualAlphabet[alphabet.indexOf(input[i])]; // add the letter from the real alphabet that has the same index as the inputted one to the return string
          }
        }

        return decodedMessage;                                            // return the string after all iterations complete
      }
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
