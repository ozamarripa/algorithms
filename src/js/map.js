const log = console.log.bind(this)
const map = new Map()

log(map.size)

map.set("1", 65813)

log(map.size)
log(map)

for (const value of map) {
  log(value)
}


for (const value of [1, 2, 3]) {
  log(value)
}
