
// 0 1 1 2 3 5 8 13

// 3 = 2 + 1
//
// n = (n-1) + (n-2)

function fibonacci(n) {
  let first = 0
  let second = 1
  let newValue = first

  for (let i = 1; i < n; i += 1) {
    newValue = first + second
    first = second
    second = newValue
  }

  return first
}

function recursiveFibonacci(n) {
  if (n <= 1) { return 0 }
  if (n === 2) { return 1 }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

module.exports = {
  fibonacci,
  recursiveFibonacci,
}
