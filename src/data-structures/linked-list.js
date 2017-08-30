
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
    let value
    while (prevLastNode && prevLastNode.next && prevLastNode.next.next) {
      prevLastNode = prevLastNode.next
    }
    if (prevLastNode) {
      value = prevLastNode.next.value
      prevLastNode.next = null
    }
    this.tail = prevLastNode
    return value
  }
  get(index) {
    let num = 0
    let node = this.head
    let value = null
    while (node && num < index) {
      num += 1
      value = node.value
      node = node.next
    }

    return (num === index) ? value : null
  }
}

module.exports = LinkedList
