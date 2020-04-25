const fs = require('fs')

fs.readFile('text.txt' , (err, data) => {
    if(err) throw err
    console.log(data.toString())
})
// blocking
const text = fs.readFileSync('text.txt')

console.log(`Texto de maneira bloqueante: ${text}`)