
function splitNumbersFromStr(str) {
  return str.split(" ")
}

function calculateWeight(value) {

  return `${value}`.split("").reduce((sum, digit) => {
    sum += parseInt(digit)
    return sum
  }, 0)

}

function compareWeights(a, b) {
  const weightA = calculateWeight(a)
  const weightB = calculateWeight(b)

  if(weightA < weightB)
    return -1
  if(weightA > weightB)
    return 1
  // compare them as strings if they have the same weight
  return a <= b ? -1 : 1

}

function orderWeight(strng) {

  const result = splitNumbersFromStr(strng).sort(compareWeights)
  return result.join(" ")
}
