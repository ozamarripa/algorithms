const factorial = require("../factorial")
const { expect } = require("chai")

describe.only("Factorial", () => {
  it("should calculate the factorial", () => {
    expect(factorial(3)).to.equal(6)
  })

  it("should calculate the factorial", () => {
    expect(factorial(10)).to.equal(3628800)
  })
})
