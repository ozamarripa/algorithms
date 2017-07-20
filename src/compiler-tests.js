let assert = require("chai").assert;
let expect = require("chai").expect;
describe('Valid Braces', () => {

  describe("isClosingBrace", () => {
    it("should handle ( )", () => {
       expect(isClosingBrace("(")).to.equal(false)
       expect(isClosingBrace(")")).to.equal(true)
    })

    it("should handle [] )", () => {
       expect(isClosingBrace("[")).to.equal(false)
       expect(isClosingBrace("]")).to.equal(true)
    })

    it("should handle { } )", () => {
       expect(isClosingBrace("{")).to.equal(false)
       expect(isClosingBrace("}")).to.equal(true)
    })

  })

  describe("isMatchingBraces", () => {
    it("should handle ()", () => {
       expect(areMatchingBraces("(", ")")).to.equal(true)
    })

    it("should handle [] )", () => {
       expect(areMatchingBraces("[", "]")).to.equal(true)
    })

    it("should handle {} )", () => {
       expect(areMatchingBraces("{", "}")).to.equal(true)
    })

     it("should not handle {]", () => {
       expect(areMatchingBraces("{", "]")).to.equal(false)
    })

    it("should not handle {)", () => {
       expect(areMatchingBraces("{", ")")).to.equal(false)
    })

  })

  describe("Evaluate", () => {

    it("should add to stack when receiving an open brace", () => {
       expect(compile(["("], "(")).to.eql(["(", "("])
       expect(compile(["("], "{")).to.eql(["(", "{"])
       expect(compile(["("], "[")).to.eql(["(", "["])
    })


    it("should evaluate stack when receiving a closing brace", () => {
       expect(compile(["("], ")")).to.eql([])
       expect(compile(["["], "]")).to.eql([])
       expect(compile(["{"], "}")).to.eql([])
    })

    it("should throw an error when braces do not correspond", () => {
      expect(() => compile(["(", "{"], "]")).to.throw("Mismatch in braces")
      expect(() => compile(["[", "["], ")")).to.throw("Mismatch in braces")
    })


  })

  describe("Solution", () => {

    it('should handle no nesting', () => {
      assert.equal(validBraces( "()" ), true);
    })

    it('should handle nesting', () => {
      assert.equal(validBraces( "([{}])" ), true);
    })

    it('should handle invalid nesting', () => {
      assert.equal(validBraces( "[(])" ), false);
    })

    it('should handle invalid nesting 2', () => {
      assert.equal(validBraces( "[({})](]" ), false);
    })

    it('should handle when missing closing braces', () => {
      assert.equal(validBraces( "(((({{" ), false);
    })
  })

})
