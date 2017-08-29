

function recursive(max, current) {
  if (current > max) { return }
  return current + recursive(max, current + 1)
}

function fibonacci(n) {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

for (let i = 1; i <= 20; i++) {
  console.log(`${i}. ${fibonacci(i)}`)
}
