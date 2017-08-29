const assert = require("assert")

const log = console.log.bind(this)

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    const node = new Node(value)
    if (this.head === null) { this.head = node }
    if (this.tail !== null) {
      this.tail.next = node
    }
    this.tail = node
  }

  pop() {
    let prevLastNode = this.head
    while (prevLastNode && prevLastNode.next && prevLastNode.next.next) {
      prevLastNode = prevLastNode.next
    }
    if (prevLastNode) { prevLastNode.next = null }
    this.tail = prevLastNode
  }
  get(index) {
    let num = 0
    let node = this.head
    let value = null
    while (node && num < index) {
      num++
      value = node.value
      node = node.next
    }

    return (num === index) ? value : null
  }
}

const list = new LinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.pop()

log("head", list.head)
log("tail", list.tail)
log("get", list.get(5))
