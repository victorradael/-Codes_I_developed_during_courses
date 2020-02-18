const {promisify} = require('util')

const writeFile = promisify(require('fs').writeFile)
const content = 'Creating a text file using promisify'
writeFile('utilFile.txt',content)
    .then(_=>{console.log('Success')})              // for being a promise, a callback is 
    .catch(err => {console.log(`ERROR: ${err}`)     //not necessary to deal with
})                                 
                                  