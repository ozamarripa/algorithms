
function isClosingBrace(brace) {
  return brace === ")" || brace === "}" || brace === "]"
}

function areMatchingBraces(brace1, brace2) {
  const braces = `${brace1}${brace2}`
  return braces === "()" || braces === "[]" || braces === "{}"
}

const areNotMatchingBraces = (a,b) => !areMatchingBraces(a,b)

function compile(stack, value) {
  if (isClosingBrace(value)) {
    const stackValue = stack.pop()
    if(areNotMatchingBraces(stackValue, value))
      throw new Error("Mismatch in braces")
  } else {
    stack.push(value)
  }

  return stack
}

function validBraces(braces){
  let valid = false
  let stack = []
  try {
    stack = braces.split("").reduce((stackAccum, value) => {
      return compile(stackAccum, value)
    }, stack)
  } catch(e) {
    return false
  }
  valid = stack.length === 0 ? true : false
  return valid

}

module.exports = {
  validBraces,
  compile,
  isClosingBrace,
  areMatchingBraces
}
