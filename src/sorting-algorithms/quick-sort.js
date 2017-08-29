const assert = require("assert")

const log = console.log.bind(this)

function pivotSplit(list, pivot) {
  // log(list, pivot)
  const left = []
  const right = []
  while (list.length) {
    if (list[0] < pivot) {
      left.push(list.shift())
    } else {
      right.push(list.shift())
    }
  }

  return [left, right]
}

function quickSort(list) {
  if (list.length <= 1) { return list }
  const pivot = list.pop()
  const [left, right] = pivotSplit(list, pivot)
  // log(left, right)
  return [].concat(quickSort(left), [pivot], quickSort(right))
}

const nums = [10, 6, 3, 8, 2, 1, 4, 7, 9, 5]
const sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

log(quickSort(nums.slice(0)))
assert.deepEqual(quickSort(nums), sorted)
