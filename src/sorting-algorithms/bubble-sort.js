/* eslint-disable no-param-reassign */

function bubbleSort(array) {
  let swap = true
  while (swap) {
    swap = false
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i + 1] < array[i]) {
        const temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        swap = true
      }
    }
  }
  return array
}

module.exports = bubbleSort
