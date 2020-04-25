const fs = require('fs')

fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data)
    fs.unlink('file.txt', (err, data) => {
        if (err) throw err;
        console.log('Arquivo Excluido')
    })

})

