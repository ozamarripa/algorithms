const { expect } = require("chai")
const { countWords } = require("../string-manipulation")

describe("String manipulation", () => {
  describe("Count words", () => {
    it("should count words", () => {
      expect(countWords("This is awesome!!")).to.equal(3)
    })
  })
})
