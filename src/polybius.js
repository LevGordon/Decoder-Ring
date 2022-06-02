// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
 
  // used this space to induce some data into our scope. 
  // Since a single encoded letter results to 2 numbers - 1 from the row and 1 from the column, we can declare a row and column objects with key value pairs.
  // the key will be the one of the two encoded numbers and the value will be an array with the letters which correspond to it.
  // with an array method or for loop, we can iterate through each letter of our input and see which key (number) in each object (column and row) represents that letter
  // then we transform that letter by sequentially adding those two numbers to the return string

  let rowObject = {
    1: ["A", "B", "C", "D", "E"],
    2: ["F", "G", "H", "I", "J", "K"],
    3: ["L", "M", "N", "O", "P"],
    4: ["Q", "R", "S", "T", "U"],
    5: ["V", "W", "X", "Y", "Z"],
  };
  let columnObject = {
    1: ["A", "F", "L", "Q", "V"],
    2: ["B", "G", "M", "R", "W"],
    3: ["C", "H", "N", "S", "X"],
    4: ["D", "I", "J", "O", "T", "Y"],
    5: ["E", "K", "P", "U", "Z"],
  };

  function getPolybiusNumber(object, object2, value) {          // declared a helper function that finds the encoded number of a character, by intaking the row object, the column object and the character
    return (Object.keys(object).find((key) => object[key].includes(value)) + "" + Object.keys(object2).find((key) => object2[key].includes(value)));
                                                                // we pass in the column as the first object with .find(). we are looking for the key (number) that holds our input character as its value.
                                                                // we then add that one number and do the same thing with the row. Add the two numbers together and you encoded a letter.
  }

  const ignoreSpacing = (input) => {                            // Here is another helper function that
    let myString = input;                                       // hold the value of the input parameter in a different variable to modify later
    let remText = myString.replace(/ /g, "");                   // this replaces all of the spaces in input
    let length = remText.length;                                // declared variable to store the input length

    let remainderVal = length % 2;                              // this protects the code in an edge case, if the encoded message is not an even number
    return remainderVal;                                        // returns either a 1 or a 2 depending if the input length is even or odd
  };

  function polybius(input, encode = true) {
    if (encode === true) {                                      // This part is strictly code for encoding a message
      let result = "";                                          // declared an empty string variable to return
      let upperCasedInput = input.toUpperCase();                // changed all of the input to upper case (doesn't matter which, just all have to be same)
      for (let i = 0; i < upperCasedInput.length; i++) {        // started a for loop to iterate through each letter of the input
        if (upperCasedInput[i] === " ") {                       // if the currently iterated character of input is a space 
          result += " ";                                        // then it gets added to the result without changes
        } else {
          let keyValue = getPolybiusNumber(columnObject, rowObject, upperCasedInput[i]); // if its not a space (everything else) we call the helper function to get our encoded num
          result += keyValue;                                   // and we add that to result
        } 
      }
      return result;                                            // return encoded message after all iterations are complete

    } else {                                                    // This part is for decoding from numbers to text
      if (ignoreSpacing(input) === 1) return false;             // Guard clause to protect the code from receiving an odd number which cant be decoded

      let result2 = "";                                         // declared an empty string to hold the return value
      for (let i = 0; i < input.length; i += 2) {               // started a for loop to iterate through each pair of numbers of the input (i += 2 because two numbers mean one letter)
        if (input[i] === " ") {                                 // if the currently iterated character of input is a space
          result2 += " ";                                       // add the space into the result string unchanged
          i--;                                                  // and go back one iteration since a space has a length of 1

        } else if (`${input[i]}${input[i + 1]}` === "42") {     // protecting from an edge case of I and J, both share one slot. If two numbers next to each other make up 42 
          result2 += "i/j";                                     // - add "i/j" to result

        } else {                                                // if everything is passed in as it should be
          let numValue = columnObject[input[i]];                // declared one variable to store the value of the key represented by the number held by input[i]
          let numValue2 = rowObject[input[i + 1]];              // declared a second variable to store the value of the key represented by the number held by input[i]
          let foundVal = numValue.find((num) => numValue2.includes(num));  // use .find on the first variable to find the correlation between the two objects and if they share letters
          result2 += foundVal;                                  // add that letter to result
        }
      }

      return result2.toLowerCase();                             // return the message in lowercase
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };