

function insertionSort(array) {
  // const sortedArray = [array[1]]
  for(let i = 0; i < array.length -1; i++) {
    console.log("loop", i)
    for(let j = i +1; j > 0 ; j--) {
      console.log("if", array[j], "<", array[j-1])
      if (array[j] < array[j-1]) {

        let temp = array[j-1]
        array[j-1] = array[j]
        array[j] = temp
      }
      else {
        break;
      }
    }
    console.log(array)
  }

  return array
}


console.log(insertionSort([7, 3, 1, 10]))
