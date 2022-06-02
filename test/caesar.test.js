// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");



describe ("caesar function", () => {
    it ("should return false if the shift value is equal to 0", () => {
        let actual = caesar("input", 0, true)
        expect(actual).to.equal(false)
    }) 
    it ("should return false if the shift value is below -25", () => {
        let actual = caesar("input", -26, true)
        expect(actual).to.equal(false)

    })
    it ("should return false if the shift value is above 25", () => {
        let actual = caesar("input", 26, true)
        expect(actual).to.equal(false)

    })
    it("should return false if shift value is missing", () => {
        let actual = caesar("input")
        expect(actual).to.equal(false)
    })
    it("should ignore capital letters inside the input", () => {
        let actual = caesar("INPUT", 13, true)
        let expected = "vachg"
        expect(actual).to.equal(expected)
    })
    it("should make sure that letters wrap around the alphabet during positive shift (eg: z becomes b)", () => {
        let actual = caesar("z", 2, true)
        let expected = "b"
        expect(actual).to.equal(expected)
    })
    it("should make sure that letters wrap around the alphabet during negative shift (eg: a becomes y)", () => {
        let actual = caesar("a", -2, true)
        let expected = "y"
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
        let actualEncode = caesar("a b[", 10, true)
        let actualDecode = caesar("k l[", 10, false)
        let actual = `${actualEncode} ${actualDecode}`
        let expected = "k l[ a b["
        expect(actual).to.equal(expected)
    })
})

