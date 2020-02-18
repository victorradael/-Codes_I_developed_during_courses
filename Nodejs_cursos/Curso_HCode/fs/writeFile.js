const {writeFile} = require('fs')

writeFile('file.txt' ,'Creating File.txt with writeFile',err => {
    if(err) throw err
    console.log(`FILE CREATED WITH SUCCESS`)
})