const assert = require("chai").assert
const expect = require("chai").expect
const {
  compareWeights,
  orderWeight,
  calculateWeight,
  splitNumbersFromStr,
} = require("../compare-weights")

describe("Order Weights", () => {
  describe("string to array", () => {
    it("should separate by space", () => {
      expect(splitNumbersFromStr("23 34")).to.eql(["23", "34"])
    })
  })

  describe("calculate weight", () => {
    it("should handle single digits", () => {
      expect(calculateWeight("3")).to.equal(3)
    })

    it("should handle severla digits digits", () => {
      expect(calculateWeight("356")).to.equal(14)
    })

    it("should handle zeros", () => {
      expect(calculateWeight("100")).to.equal(1)
    })

    it("should handle numbers", () => {
      expect(calculateWeight(100)).to.equal(1)
    })
  })

  describe("compare weights", () => {
    it("should reutrn -1 when a is lower", () => {
      expect(compareWeights("20000", "45")).to.equal(-1)
    })

    it("should reutrn 1 when b is lower", () => {
      expect(compareWeights("4444", "12")).to.equal(1)
    })

    it("should consider them as string when equal", () => {
      expect(compareWeights("90", "180")).to.equal(1)
    })
  })


  describe("calculate result", () => {
    it("basic tests", () => {
      assert.equal(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
      assert.equal(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
    })
  })
})
