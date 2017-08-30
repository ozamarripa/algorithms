const objectCreate = require("../object-create")
const { expect } = require("chai")

describe("Object create", function () { // eslint-disable-line
  beforeEach(() => {
    this.animal = {
      makeSound() {
        return this.sound
      },
    }

    this.cat1 = Object.create(this.animal)
    this.cat1.sound = "miau"

    this.cat2 = objectCreate(this.animal)
    this.cat2.sound = "miau"
  })

  it("should return the sound when using implementation of Object create", () => {
    expect(this.cat2.makeSound()).to.equal(this.cat1.makeSound())
  })

  describe("When changing implementation of make sound", () => {
    beforeEach(() => {
      this.animal.makeSound = function makeSound() {
        return `sound ${this.sound}`
      }
    })

    it("should change the implementationof the objects created", () => {
      expect(this.cat1.makeSound()).to.equal("sound miau")
      expect(this.cat2.makeSound()).to.equal("sound miau")
    })
  })
})
