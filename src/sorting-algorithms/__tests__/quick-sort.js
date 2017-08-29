const { expect } = require("chai")
const { quickSort } = require("../quick-sort")

describe("Quick sort", () => {
  describe("Quick sort", () => {
    it("should sort", () => {
      expect(quickSort([])).to.eql([])
    })

    it("should sort", () => {
      expect(quickSort([2])).to.eql([2])
    })

    it("should sort", () => {
      expect(quickSort([4, 2])).to.eql([2, 4])
    })

    it("should sort", () => {
      expect(quickSort([4, 8, 2])).to.eql([2, 4, 8])
    })

    it("should sort", () => {
      expect(quickSort([5, 8, 3, 4, 2])).to.eql([2, 3, 4, 5, 8])
    })
  })
})
