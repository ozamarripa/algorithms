const LinkedList = require("../linked-list")
const { expect } = require("chai")

describe("Linked list", () => {
  let list
  beforeEach(() => {
    list = new LinkedList()
    list.push(1)
    list.push(2)
    list.push(3)
    list.push(4)
  })

  it("should return an element on pop", () => {
    expect(list.pop()).to.equal(4)
  })

  it("should return an element on get", () => {
    expect(list.get(1)).to.equal(1)
  })

  it("should return an element on head", () => {
    expect(list.head.value).to.equal(1)
  })

  it("should return an element on tail", () => {
    expect(list.tail.value).to.equal(4)
  })
})
