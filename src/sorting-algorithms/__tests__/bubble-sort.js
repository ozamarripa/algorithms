const { expect } = require("chai")
const bubbleSort = require("../bubble-sort")

describe("Bubble sort", () => {
  describe("Bubble sort", () => {
    it("should sort", () => {
      expect(bubbleSort([])).to.eql([])
    })

    it("should sort", () => {
      expect(bubbleSort([2])).to.eql([2])
    })

    it("should sort", () => {
      expect(bubbleSort([4, 2])).to.eql([2, 4])
    })

    it("should sort", () => {
      expect(bubbleSort([4, 8, 2])).to.eql([2, 4, 8])
    })

    it("should sort", () => {
      expect(bubbleSort([5, 8, 3, 4, 2])).to.eql([2, 3, 4, 5, 8])
    })
  })
})
