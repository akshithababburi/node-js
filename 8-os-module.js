const os = require('os')


const user = os.userInfo()
console.log(user)

console.log(`uptime is ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    freemem:os.freemem(),
    totmem:os.totalmem()
}

console.log(currentOS)