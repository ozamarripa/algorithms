function isMultiple3(number) {
  return (number % 3) === 0
}

function isMultiple5(number) {
  return (number % 5) === 0
}

function coerceNaturalNumber(number) {
  return (typeof number === "number" && number >= 0) ? number : 0
}

function solution(number){
  let sum = 0
  let num = coerceNaturalNumber(number)
  for(let i = 0; i < num; i++) {
    sum += (isMultiple3(i) || isMultiple5(i)) ? i : 0
  }
  return sum
}

module.exports = {
  isMultiple5,
  isMultiple3,
  coerceNaturalNumber,
  solution
}
