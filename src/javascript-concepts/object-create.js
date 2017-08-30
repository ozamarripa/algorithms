
function objectCreate(proto) {
  const obj = {}
  Object.setPrototypeOf(obj, proto)
  return obj
}

module.exports = objectCreate
