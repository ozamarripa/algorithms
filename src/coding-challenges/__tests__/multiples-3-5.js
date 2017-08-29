const { expect } = require("chai")
const {
  isMultiple5,
  isMultiple3,
  coerceNaturalNumber,
  solution,
} = require("../multiples-3-5")

describe("Multiples of 3 and 5", () => {
  describe("Multiples of 3", () => {
    it("should handle when is multiple of 3", () => {
      expect(isMultiple3(3)).to.equal(true)
    })

    it("should handle when is not multiple of 3", () => {
      expect(isMultiple3(4)).to.equal(false)
    })
  })

  describe("Multiples of 5", () => {
    it("should handle when is multiple of 5", () => {
      expect(isMultiple5(10)).to.equal(true)
    })

    it("should handle when is not multiple of 5", () => {
      expect(isMultiple5(4)).to.equal(false)
    })
  })

  describe("Coerce natural number", () => {
    it("should handle negative numbers", () => {
      expect(coerceNaturalNumber(-1)).to.equal(0)
    })

    it("should handle not numbers", () => {
      expect(coerceNaturalNumber("v")).to.equal(0)
    })
  })

  describe("Multiples of 3 and 5", () => {
    it("should handle basics", () => {
      expect(solution(10)).to.equal(23)
    })

    it("should return 0 with negatives", () => {
      expect(solution(-3)).to.equal(0)
    })

    it("should return 0 if a number is not given", () => {
      expect(solution("f")).to.equal(0)
    })
  })
})
