const { expect } = require("chai")
const insertionSort = require("../insertion-sort")

describe("Insertion sort", () => {
  describe("Insertion sort", () => {
    it("should sort", () => {
      expect(insertionSort([])).to.eql([])
    })

    it("should sort", () => {
      expect(insertionSort([2])).to.eql([2])
    })

    it("should sort", () => {
      expect(insertionSort([4, 2])).to.eql([2, 4])
    })

    it("should sort", () => {
      expect(insertionSort([4, 8, 2])).to.eql([2, 4, 8])
    })

    it("should sort", () => {
      expect(insertionSort([5, 8, 3, 4, 2])).to.eql([2, 3, 4, 5, 8])
    })
  })
})
