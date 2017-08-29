

function recursive(max, current) {
  if (current > max) { return 0 }
  return current + recursive(max, current + 1)
}

function fibonacci(n) {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

module.exports = {
  recursive,
  fibonacci,
}
