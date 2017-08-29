const { fibonacci, recursiveFibonacci } = require("../fibonacci")
const { expect } = require("chai")

describe("Fibonacci", () => {
  describe("Fibonacci", () => {
    it("should return the 1 Fibonacci", () => {
      expect(fibonacci(1)).to.equal(0)
    })

    it("should return the 2 Fibonacci", () => {
      expect(fibonacci(2)).to.equal(1)
    })

    it("should return the 3 Fibonacci", () => {
      expect(fibonacci(3)).to.equal(1)
    })

    it("should return the 4 Fibonacci", () => {
      expect(fibonacci(4)).to.equal(2)
    })

    it("should return the 5 Fibonacci", () => {
      expect(fibonacci(5)).to.equal(3)
    })
  })

  describe("Recursive Fibonacci", () => {
    it("should return the 1 Fibonacci", () => {
      expect(recursiveFibonacci(1)).to.equal(0)
    })

    it("should return the 2 Fibonacci", () => {
      expect(recursiveFibonacci(2)).to.equal(1)
    })

    it("should return the 3 Fibonacci", () => {
      expect(recursiveFibonacci(3)).to.equal(1)
    })

    it("should return the 4 Fibonacci", () => {
      expect(recursiveFibonacci(4)).to.equal(2)
    })

    it("should return the 5 Fibonacci", () => {
      expect(recursiveFibonacci(5)).to.equal(3)
    })
  })
})
