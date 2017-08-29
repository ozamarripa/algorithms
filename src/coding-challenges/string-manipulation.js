const assert = require("assert")


function countWords(phrase) {
  let length = -1
  if (typeof phrase === "string")
   length = phrase.trim().split(" ").length
  return length
}

console.log(countWords("This is awesome!! "))
assert.equal(countWords("This is awesome!! "), 3)

console.log("xxxoooooxX".match(/x/gi))
