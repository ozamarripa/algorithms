
function countWords(phrase) {
  let length = -1
  if (typeof phrase === "string") { length = phrase.trim().split(" ").length }
  return length
}

module.exports = {
  countWords,
}
