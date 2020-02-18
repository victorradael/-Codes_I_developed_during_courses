const fs = require('fs').promises

async function read (file) {
    const data = await fs.readFile(file, 'binary')
    return new Buffer.from(data)
}

try {
    read('text.txt').then(data => console.log(data.toString()))
} catch (error) {
    console.log(error)
}