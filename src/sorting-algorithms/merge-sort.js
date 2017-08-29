
// 1/2 = 0
// 2/2 = 1
// 3/2 = 1.5 -> 1 ->
// 4/2 = 2

// [5, 8, 3, 4, 2] length 5
// middle = Math.floor(5/2) = 2
//
// [5, 8, 3]   [4, 2]
//
// [5, 8] [3]    [4]   [2]
//
// [3, 5, 8]    [2, 4]
//
// [2, 3, 4, 5, 8]

function stitch(list1, list2) {
  const result = []

  while (list1.length && list2.length) {
    if (list1[0] <= list2[0]) { result.push(list1.shift()) } else { result.push(list2.shift()) }
  }

  return result.concat(list1, list2)
}

function mergeSort(list) {
  if (list.length <= 1) { return list }
  const middle = Math.floor(list.length / 2)

  const list1 = list.slice(0, middle)
  const list2 = list.slice(middle, list.length)

  const result = stitch(mergeSort(list1), mergeSort(list2))
  return result
}

exports.stitch = stitch

exports.mergeSort = mergeSort
