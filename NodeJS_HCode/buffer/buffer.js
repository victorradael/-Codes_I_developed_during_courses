const {Buffer} = require('buffer')

const buf = Buffer.from('Complet Courser of Node.js')

console.log(buf) // binary
console.log(buf.toString()) // Binary to String
console.log(buf.toString('utf16le')) // Binary to String Asiatic

const buf_string = Buffer.from('Loading String', 'utf-8')

console.log(Buffer.isBuffer(buf_string))
console.log(buf_string.toString('utf-8', 0, 10))
