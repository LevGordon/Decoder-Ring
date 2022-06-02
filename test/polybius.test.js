// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");



describe ("polybius function", () => {
    it("should make sure both i and j are equal to 42 when encoding", () => {
        let actual = polybius("There is more to life than meets the eye", encode = true)
        let expected = "4432512451 4234 23432451 4443 13421251 44321133 2351514434 443251 514551"
        expect(actual).to.equal(expected)
    })
    it("should  make sure both i and j are equal to 42 when decoding", () => {
        let actual = polybius("4432512451 4234 23432451 4443 13421251 44321133 2351514434 443251 514551", encode = false)
        let expected = "there i/js more to li/jfe than meets the eye"
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", () => {
        let expected = polybius("there once was a wonderful city of fife", encode = true)
        let actual = polybius("tHeRe OnCe WaS A woNDeRfUl cIty oF FiFe" , encode = true)
        expect(expected).to.equal(actual)

    })
    it("should maintain spaces in the message, before and after encoding or decoding", () => {
        let actualEncode = polybius("space space space", encode = true)
        let actualDecode = polybius("3453113151 3453113151 3453113151", encode = false)
        let actual = `${actualEncode} ${actualDecode}`
        let expected = "3453113151 3453113151 3453113151 space space space"
        expect(actual).to.equal(expected)
    })

})

