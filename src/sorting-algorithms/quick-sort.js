
function pivotSplit(list, pivot) {
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
  const pivot = list[list.length - 1]
  const [left, right] = pivotSplit(list.slice(0, list.length - 1), pivot)

  return [].concat(quickSort(left), [pivot], quickSort(right))
}

module.exports = {
  quickSort,
  pivotSplit,
}
