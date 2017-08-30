const newKeyword = require("../new-keyword")
const { expect } = require("chai")

describe("New keyword", function () { // eslint-disable-line
  beforeEach(() => {
    function Person(name) {
      this.name = name
    }
    Person.prototype.talk = function talk() {
      return this.name
    }
    this.person1 = new Person("Omar")
    this.person2 = newKeyword(Person, "Omar")
  })

  it("should return the name on talk when using implementation of new keyword", () => {
    expect(this.person2.talk()).to.equal(this.person1.talk())
  })
})
