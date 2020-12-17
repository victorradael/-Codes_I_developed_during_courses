const {writeFile} = require('fs')

function crateFile(name, content) {
    return new Promise((resolve, reject) => {
        writeFile(name,content, err =>{
            if(err) return reject(err)
            resolve()
        })
    })
}

crateFile('Promise.txt', 'creating file using promise')
    .then(_ => console.log('SUCCESS'))
    .catch(err => console.log(err))