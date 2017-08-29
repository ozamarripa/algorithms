/* eslint-disable no-param-reassign */

function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = i + 1; j > 0; j -= 1) {
      if (array[j] < array[j - 1]) {
        const temp = array[j - 1]
        array[j - 1] = array[j]
        array[j] = temp
      } else {
        break
      }
    }
  }
  return array
}

module.exports = insertionSort
