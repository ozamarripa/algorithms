// word new
// 1 Create a new Object
// 2 Set Protoype of constroctu
// 3 call constuctor with arguments
// 4 return result of constructor or created object
function newFn(constructor, ...args) {
  let obj = {}

  // Object.setPrototypeOf(obj, constructor.prototype)
  obj = Object.create(constructor.prototype)

  return constructor.apply(obj, args) || obj
}


module.exports = newFn
