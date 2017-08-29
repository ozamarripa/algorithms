
function splitList(list) {
  const half = list.length / 2
  const leftList = list.slice(0, half)
  const rightList = list.slice(half, list.length)
  return [leftList, rightList]
}

function stitch(list1, list2) {
  let newList = []
  let lastElem = null
  for (let i = 0; i < list1.length; i += 1) {
    if (lastElem === null) {
      lastElem = list1[i]
    } else if (lastElem < list1[i]) {
      newList.push(lastElem)
      lastElem = list1[i]
    } else {
      newList.push(list1[i])
    }
    if (lastElem < list2[i]) {
      newList.push(lastElem)
      lastElem = list2[i]
    } else {
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
  const results = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  return results.concat(left, right)
}


function mergeSort(list) {
  if (list.length <= 1) { return list }
  const [list1, list2] = splitList(list)
  return stitchShift(mergeSort(list1), mergeSort(list2))
}

exports.stitch = stitchShift
exports.stitch2 = stitch
exports.mergeSort = mergeSort
