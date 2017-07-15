const assert = require("assert")
const log = console.log.bind(this)

function mergeSort(list) {
  if (list.length === 1)
    return list
  const [list1, list2] = splitList(list)
  return stitchShift(mergeSort(list1), mergeSort(list2))

}

function splitList(list) {
  const half = list.length / 2
  const leftList = list.slice(0, half)
  const rightList = list.slice(half, list.length)
  return[leftList, rightList]
}

function stitch(list1, list2) {
  let newList = []
  let lastElem = null
  for(let i = 0; i < list1.length; i++) {
    if(lastElem === null) {
      lastElem = list1[i]
    } else if(lastElem < list1[i]) {
      newList.push(lastElem)
      lastElem = list1[i]
    } else {
      newList.push(list1[i])
    }
    if (lastElem < list2[i]) {
      newList.push(lastElem)
      lastElem = list2[i]
    }
    else {
      newList.push(list2[i])
    }
  }
  newList.push(lastElem)
  newList = newList.concat(list2.slice(list1.length))

  return newList
}

function stitchShift(leftList, rightList) {
  const left = leftList.slice(0)
  const right = rightList.slice(0)
  const results  = []
  while (left.length && right.length) {

    if (left[0] <= right[0]) {
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }
  }

  // while(left.length) {
  //   results.push(left.shift());
  // }
  // while(right.length) {
  //   results.push(right.shift());
  // }
  return results.concat(left, right)
}

const list= [1,5,8,6,9,7]
const sortedList= [1,5,6,7,8,9]
const list1 = [ 1, 5, 8 ]
const list2 = [ 6,9,7 ]

const list3 = [ 2, 6 ,9 ]
const list4 = [ 1, 3, 8, 11]
const sortedList2= [1,2,3,6, 8,9, 11]

log("splitList", splitList(list))
assert.deepEqual(
  splitList(list),
  [list1, list2]
)

log("stitch", stitch(list3, list4))
assert.deepEqual(
  stitch(list3, list4),
  sortedList2
)

log("stitchShift", stitchShift(list3, list4))
assert.deepEqual(
  stitchShift(list3, list4),
  sortedList2
)

log("mergeSort", mergeSort(list))
assert.deepEqual(mergeSort(list), sortedList)
const nums = [10,5,3,8,2,6,4,7,9,1]

log("mergeSort", mergeSort(nums))
assert.deepEqual(mergeSort(nums), [1,2,3,4,5,6,7,8,9,10])
