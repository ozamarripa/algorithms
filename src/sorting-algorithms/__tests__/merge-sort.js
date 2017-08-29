const {expect} = require("chai")
const {stitch, mergeSort} = require("../merge-sort")

describe("Merge sort", function() {

  describe("Sticth", function() {

    it("should sticth together", () => {
      expect(stitch([], [])).to.eql([])
    })

    it("should sticth together", () => {
      expect(stitch([2], [])).to.eql([2])
    })

    it("should sticth together", () => {
      expect(stitch([], [2])).to.eql([2])
    })

    it("should sticth together", () => {
      expect(stitch([3], [2])).to.eql([2, 3])
    })

    it("should sticth together", () => {
      expect(stitch([3, 5], [4])).to.eql([3, 4, 5])
    })

    it("should sticth together", () => {
      expect(stitch([3, 5], [4, 8, 9])).to.eql([3, 4, 5, 8, 9])
    })

  })

  describe("Merge sort", function() {

    it("should sort", () => {
      expect(mergeSort([])).to.eql([])
    })

    it("should sort", () => {
      expect(mergeSort([2])).to.eql([2])
    })

    it("should sort", () => {
      expect(mergeSort([4, 2])).to.eql([2, 4])
    })

    it("should sort", () => {
      expect(mergeSort([4, 8, 2])).to.eql([2, 4, 8])
    })

    it("should sort", () => {
      expect(mergeSort([5, 8, 3, 4, 2])).to.eql([2, 3, 4, 5, 8])
    })

  })

})
