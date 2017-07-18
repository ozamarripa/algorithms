
function Person(name) {
  this.name = name
}

Person.prototype.talk = function() {
  console.log(this.name)
}

const me = new Person("Omar")

me.talk()

const talkCopyFn = me.talk

talkCopyFn()

// word new
// 1 Create a new Object
// 2 Set Protoype of constroctu
// 3 call constuctor with arguments
// 4 return result of constructor or created object
function newFn(constructor) {
  let obj = {}
  // Object.setPrototypeOf(obj, constructor.prototype)
  obj = Object.create(constructor.prototype)
  console.log(arguments)
  // const argsArray = Array.from(arguments)
  const argsArray = Array.prototype.slice.call(arguments)
  // const argsArray =
  console.log(arguments.prototype)
  console.log("args", argsArray)

  return constructor.apply(obj, argsArray.slice(1)) || obj
}
const meAgain = newFn(Person, "New Omar")
meAgain.talk()

const cat = {
  makeSound() {
    console.log(this.sound)
  }
}

const mark = Object.create(cat)
mark.sound = " khe rv"
mark.makeSound()

function objectCreate(proto) {
  const obj = {}
  Object.setPrototypeOf(obj, proto)
  return obj
}

const mark2 = objectCreate(cat)
mark2.sound = " khe rv"
mark2.makeSound()

cat.makeSound = function() {
  console.log("----", this.sound)
}
mark.makeSound()
