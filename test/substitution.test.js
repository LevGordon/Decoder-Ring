// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");



describe("substitution function", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long.", () => {
        let actual = substitution("You shall not pass", "#zert$uio", encode = true )
        expect(actual).to.equal(false)
    })
    it("should correctly translate the given phrase, based on the alphabet given to the function.", () => {
        let actual = substitution("You shall not pass", "#zert$uioaqsdfghj(lmwxcvbn", encode = true)
        let expected = "bgw li#ss fgm h#ll"
        expect(actual).to.equal(expected)
    })
    it("should return false if there are any duplicate characters in the given alphabet.", () => {
        let actual = substitution("You shall not pass", "#zert$uaaaqsdfghj(lmwxcvbn", encode = true)
        expect(actual).to.equal(false)
    })
    it("should maintain spaces in the message, before and after encoding or decoding.", () => {
        let actual = substitution("You shall not pass", "#zert$uioaqsdfghj(lmwxcvbn", encode = true)
        let expected = "bgw li#ss fgm h#ll"
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters.", () => {
        let actual = substitution("you shall not pass", "#zert$uioaqsdfghj(lmwxcvbn", encode = true)
        let expected = substitution("You sHAlL nOt pASs", "#zert$uioaqsdfghj(lmwxcvbn", encode = true)
        expect(actual).to.equal(expected)
    })
})








