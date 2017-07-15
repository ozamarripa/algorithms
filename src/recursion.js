

function recursive(max, current) {
  if (current > max)
    return
  console.log(current)
  return current + recursive(max, current+1)
}

function fibonacci(n) {
  if (n <= 1) {
    return n
  } else {
    return fibonacci(n-1) + fibonacci(n-2)
  }

}
console.log("result", fibonacci(5))

for (var i = 1; i <= 20; i++) {
  console.log(`${i}. ${fibonacci(i)}`);
}
