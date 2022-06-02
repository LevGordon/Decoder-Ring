// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
//
//
//
  function caesar(input, shift, encode = true) {
    let inputLC = input.toLowerCase();                        // declared a new variable to be able to modify the input to lowercase and use the modified version instead. 

    let result = "";                                          // declared empty string variable to fill up letter by letter and to return at the end.
    let newShift = shift                                      // declared a new variable identical to the shift parameter so that I can modify it later.

    if (typeof shift === "undefined" || shift > 25 || shift < -25 || shift === 0) {
      return false
    };                                                        // if the shift is undefined, larger than 25, smaller than -25 or equal to 0 - will return false

    encode ? newShift : newShift *= -1                        // if encode is set to true - it stays the same, if its false (we are decoding) - the value becomes negative

                                                              // with a negative shift value the encoded input reverts to its original state

    for (let i = 0; i < inputLC.length; i++) {                // using a for loop to access and iterate through each letter of the input

                                                              // everything beneath this line will execute for each iteration (letter in input)

      let numLetter = inputLC[i].charCodeAt();                // declared a variable to transform the currently iterated letter to its numerical value according to ascii values
      let shiftedNumLetter = (numLetter + newShift);          // declared a variable to hold the shifted numerical value of each letter 

      if (numLetter < 97 || numLetter > 122) {                // protecting from an edge case if there are characters in the input message. Lower case letters range from 97 to 122.
        result += String.fromCharCode(numLetter);             // if its not a lowercase letter, add the charachter represented by the NONshifted value to our return string, (eg: %, " ", #)
      }
      
      else if ((shiftedNumLetter) < 97) {                     // if the shift caused the numerical ascii value of the currently iterated letter to be less than 97 (anything below 97 will not be a letter)
        shiftedNumLetter += 26;                               // add the length of the alphabet to the already shifted numerical value to compensate for the negative shift
        result += String.fromCharCode(shiftedNumLetter);      // transform the numerical value to the corresponding letter and add that to the return string
      }

      else if ((shiftedNumLetter) > 122) {                    // if the shift caused the numerical ascii value of the currently iterated letter to be larger than 122 (anything above 122 will not be a letter)
        shiftedNumLetter -= 26;                               // deduct the length of the alphabet from the already shifted numerical value to compensate for the excessive positive shift
        result += String.fromCharCode(shiftedNumLetter);      // transform the numerical value to the corresponding letter and add that to the return string
      }

      else if (shiftedNumLetter >= 97 && shiftedNumLetter <= 122) {   // if the shifted numerical value is within the code range of 97-122 (lowercase letters)
        result += String.fromCharCode(shiftedNumLetter);      // transform that shifted value into a letter and add it to the result string
      }
    }
    return result                                             // after all iterations of the for loop are complete (the whole input was transformed letter by letter), return the accumulated string
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
